import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    UseFilters
} from "@nestjs/common";
import { AllExceptionFilter } from "./all-exception.filter";
import { InheritanceError } from "./inheritance-exception.filter";
import { LowBatteryException } from "./low-battery.exception";
import { OfflineExceptionFilter } from "./offline-exception.filter";

@Controller("/error")
export class ErrorController {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    @Get("/unrecognized")
    throwUnrecognized(): void {
        throw new Error("Ein Fehler kommt");
    }

    @Get("/unrecognized-catch")
    @UseFilters(AllExceptionFilter)
    throwUnrecognizedCatch(): void {
        throw new Error("Ein Fehler kommt  und ist catched");
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

    @Get("/inheritanceerror")
    @UseFilters(InheritanceError)
    inheritanceException(): void {
        throw new HttpException(
            "Error durch Vererbung!!!",
            HttpStatus.FAILED_DEPENDENCY,
        );
    }

    @Get("/filtererror")
    @UseFilters(OfflineExceptionFilter)
    throwFilter(): void {
        throw new HttpException("filter error ...", HttpStatus.FORBIDDEN);
    }
}
