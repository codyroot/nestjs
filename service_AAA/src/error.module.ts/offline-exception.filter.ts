import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

// Exception filters can be scoped at different levels: method-scoped, controller-scoped, or global-scoped

// In order to catch every unhandled exception (regardless of the exception type),
// leave the @Catch() decorator's parameter list empty, e.g., @Catch().
@Catch(HttpException)
export class OfflineExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        const status = exception.getStatus();

        response.status(status).json({
            httpCode: status,
            timestamp: new Date().toISOString(),
            errorPath: request.url,
            msg: exception.message,
            fromCatch: true,
        });
    }
}
