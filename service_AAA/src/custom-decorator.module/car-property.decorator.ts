import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { CreateCarRequestDto } from "../models/car";
import { Request } from "express";

export const CarPropertyDecorator = createParamDecorator<
    keyof CreateCarRequestDto,
    any,
    CreateCarRequestDto[keyof CreateCarRequestDto]
>((property: keyof CreateCarRequestDto, ctx: ExecutionContext) => {
    const request = ctx
        .switchToHttp()
        .getRequest<Request<any, any, CreateCarRequestDto>>();
    const car = request.body;

    return car[property];
});
