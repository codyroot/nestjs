import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { AppService } from "./app.service";
import { CreateCarRequest } from "./models/car";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): // @Req() request: Request,
    // @Res() response: Response
    string {
        // console.log(request.headers.yope);
        return this.appService.getHello();
    }

    @Post()
    createCar(@Req() request: Request, @Body() car: CreateCarRequest): string {
        console.log(request.headers);
        console.log(car);
        return "ok" + car.name;
    }
}
