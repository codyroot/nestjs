import { Module } from "@nestjs/common";
import { ErrorController } from "./error.controller";
import { APP_FILTER } from "@nestjs/core";
import { GlobalExceptionFilter } from "./global-exception.filter";

@Module({
    imports: [],
    exports: [],
    controllers: [ErrorController],
    providers: [
        {
            // Hinweis -> Die Fehlerklasse wird hierdurch GLOBAL in allen anderen Modulen verwendet
            provide: APP_FILTER,
            useClass: GlobalExceptionFilter,
        },
    ],
})
export class ErrorModule {}
