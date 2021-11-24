import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    UseFilters,
} from "@nestjs/common";
import { CreateCarRequestDto, CreateCarRequest } from '../models/car';
import { BevPipe } from "./bev.pipe";
import { PipeExceptionFilter } from "./pipe-exception.filter";

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

    @Post("/body/nobev")
    @HttpCode(HttpStatus.OK)
    async pipeBody(@Body(BevPipe) car: CreateCarRequestDto) {
        return {
            ...car,
            id: 1007,
        };
    }
}
