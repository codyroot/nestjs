import {
    Body,
    Controller,
    DefaultValuePipe,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UseFilters,
    UsePipes,
} from "@nestjs/common";
import {
    CreateCarRequestClassValidatorDto,
    CreateCarRequestDto,
    ICarDatabaseDto,
} from "../models/car";
import { BevClassValidatorPipe } from "./bev-class-validator.pipe";
import { BevPipe } from "./bev.pipe";
import { PipeExceptionFilter } from "./pipe-exception.filter";

@Controller("/pipe")
@UsePipes(BevPipe)
export class PipeController {
    @Get("/p/:id")
    async pipeInt(@Param("id", ParseIntPipe) id: number) {
        return id;
    }

    @Get("/defaultvalue")
    async pipeDefaultValue(
        @Query("page", new DefaultValuePipe("007")) page: string,
        @Query("bonus") bonus: boolean,
    ) {
        return { page, bonus };
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

    @Post("/body-from-param/nobev")
    async pipeBodyFromParam(
        @Body(BevPipe) car: CreateCarRequestDto,
    ): Promise<ICarDatabaseDto> {
        return {
            ...car,
            id: "1007-001",
        };
    }

    @Post("/body-from-method-decorator/nobev")
    @UsePipes(BevPipe)
    async pipeBodyFromMethodDecorator(
        @Body() car: CreateCarRequestDto,
    ): Promise<ICarDatabaseDto> {
        return {
            ...car,
            id: "1007-002",
        };
    }

    @Post("/body-from-class-decorator/nobev")
    async pipeBodyFromClassDecorator(
        @Body() car: CreateCarRequestDto,
    ): Promise<ICarDatabaseDto> {
        return {
            ...car,
            id: "1007-003",
        };
    }

    @Post("/body-from-class-validator/no-ps")
    // @UsePipes(BevClassValidatorPipe)
    async pipeBodyFromClassValidator(
        @Body() car: CreateCarRequestClassValidatorDto,
    ): Promise<ICarDatabaseDto> {
        return {
            ...car,
            id: "1007-004",
        };
    }
}
