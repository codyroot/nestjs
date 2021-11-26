import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { setTimeout } from "timers/promises";
import { ErrorsInterceptor } from "./errors.interceptor";
import { LoggingInterceptor } from "./logging.interceptor";
import { TimeoutInterceptor } from "./timeout.interceptor";

@Controller("/interceptor")
export class InterceptorController {
    @Get("/log")
    @UseInterceptors(LoggingInterceptor)
    getLog() {
        return "Ein Methode die";
    }

    @Get("/error")
    @UseInterceptors(ErrorsInterceptor)
    getError() {
        throw new Error("Error wurde intercepted");
    }

    @Get("/timeout")
    @UseInterceptors(TimeoutInterceptor)
    async getTimeout() {
        await setTimeout(1500);
        return "OK";
    }
}
