import {
    Controller,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    UseFilters,
} from "@nestjs/common";
import { PipeExceptionFilter } from "./pipe-exception.filter";

class CarDto {
    name: string;
    type: "BEV" | "PHEV";
}

@Controller("/pipe")
export class PipeController {
    @Get("/p/:id")
    async pipeInt(@Param("id", ParseIntPipe) id: number) {
        return id;
    }

    @Get("/customerror/:id")
    @UseFilters(PipeExceptionFilter)
    async pipeIntCustomError(
        @Param(
            "id",
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
    ) {
        return id;
    }

    @Post("/body")
    async pipeBody() {}
}
