import {
    Body,
    Controller,
    Get,
    Header,
    Headers,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
} from "@nestjs/common";
import { Request, Response, response } from "express";
import { IncomingHttpHeaders } from "http";
import { Car, CreateCarRequest } from "../models/car";
import { BasisService } from "./basis.service";

@Controller("/basis")
export class BasisController {
    constructor(private readonly service: BasisService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @Header("bro", "da")
    getCar(@Headers() headers: IncomingHttpHeaders): Car {
        console.log(headers);
        console.log(headers["user-agent"]);
        console.log(headers["yope"]);

        return this.service.getCar();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createCar(@Body() car: CreateCarRequest): Car {
        return {
            id: "1",
            name: car.name,
            ps: car.ps,
        };
    }

    @Get("/custom")
    @HttpCode(HttpStatus.OK)
    getCarCustom(@Res({ passthrough: false }) response: Response) {
        response
            .status(HttpStatus.NON_AUTHORITATIVE_INFORMATION)
            .send(this.service.getCar());
    }
}
