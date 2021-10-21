import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    UseFilters,
} from "@nestjs/common";
import { BasisService } from "./basis.service";
import { LowBatteryException } from "./low-battery.exception";
import { OfflineExceptionFilter } from "./offline-exception.filter";

@Controller("/error")
export class ErrorController {
    constructor(private readonly service: BasisService) {}

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
