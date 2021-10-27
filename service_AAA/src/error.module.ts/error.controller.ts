import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    UseFilters,
} from "@nestjs/common";
import { LowBatteryException } from "../basis.module/low-battery.exception";
import { OfflineExceptionFilter } from "../basis.module/offline-exception.filter";

@Controller("/error")
export class ErrorController {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    @Get("/unrecognized")
    throwUnrecognized(): void {
        throw new Error("Ein Fehler kommt");
    }

    @Get("/httperror")
    throwHttpError(): void {
        throw new HttpException(
            {
                error: "ya ein Fehler",
                nachricht: true,
                exception: HttpException.name,
            },
            HttpStatus.I_AM_A_TEAPOT,
        );
    }

    @Get("/customerror")
    throwCustom(): void {
        throw new LowBatteryException("wenig saft im Akku");
    }

    @Get("/filtererror")
    @UseFilters(OfflineExceptionFilter)
    throwFilter(): void {
        throw new HttpException("filter error ...", HttpStatus.FORBIDDEN);
    }
}
