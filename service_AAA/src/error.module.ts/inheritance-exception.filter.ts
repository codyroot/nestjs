import { Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch()
export class InheritanceError extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const msg = (exception as HttpException).message;
        console.log(`Inheritance Fehler ist:  ${msg}`);
        super.catch(exception, host);
    }
}
