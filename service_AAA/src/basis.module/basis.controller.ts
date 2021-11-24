import { project } from "@blubb/tsproject";
import {
    Body,
    Controller,
    Get,
    Header,
    Headers,
    HttpCode,
    HttpStatus,
    Inject,
    Param,
    Post,
    Redirect,
    Res,
} from "@nestjs/common";
import { Response } from "express";
import { IncomingHttpHeaders } from "http";
import { CarDatabaseDto, CreateCarRequest } from "../models/car";
import { BasisService } from "./basis.service";

@Controller("/basis")
export class BasisController {
    constructor(private readonly service: BasisService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @Header("bro", "da")
    getCar(@Headers() headers: IncomingHttpHeaders): CarDatabaseDto {
        console.log(headers);
        console.log(headers["user-agent"]);
        console.log(headers["yope"]);

        console.log(project + "!!!");

        return this.service.getCar();
    }

    @Get("/car/:id")
    getCarId(@Param("id") id: string): CarDatabaseDto {
        return {
            ...this.service.getCar(),
            id,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createCar(@Body() car: CreateCarRequest): CarDatabaseDto {
        return {
            id: "1",
            name: car.name,
            ps: car.ps,
            type: "PHEV",
        };
    }

    @Get("/custom")
    getCarCustom(@Res({ passthrough: false }) response: Response) {
        response
            .status(HttpStatus.NON_AUTHORITATIVE_INFORMATION)
            .send(this.service.getCar());
    }

    @Get("/redirect")
    @Redirect("http://localhost:5000/basis")
    redirect() {
        console.log("redirect");
    }

    @Get("/async")
    async getAsync(): Promise<CarDatabaseDto> {
        return Promise.resolve(this.service.getCar());
    }
}
