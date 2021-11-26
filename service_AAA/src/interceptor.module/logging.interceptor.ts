import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor<string, string> {
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<string> {
        console.log("Before...");

        const now = Date.now();
        return next
            .handle()
            .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)))
            .pipe(map((val) => val + "intercepted wurde!!"));
    }
}
