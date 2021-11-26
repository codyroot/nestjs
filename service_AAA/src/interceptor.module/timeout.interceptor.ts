import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    RequestTimeoutException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable, throwError, TimeoutError } from "rxjs";
import { catchError, timeout } from "rxjs/operators";
import { TIMEOUT_KEY } from "./timeout.decorator";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    private constructor(private reflector: Reflector) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const timeoutInMs = this.reflector.get<number, typeof TIMEOUT_KEY>(
            TIMEOUT_KEY,
            context.getHandler(),
        );

        return next.handle().pipe(
            timeout(timeoutInMs),
            catchError((err) => {
                if (err instanceof TimeoutError) {
                    return throwError(new RequestTimeoutException());
                }
                return throwError(err);
            }),
        );
    }
}
