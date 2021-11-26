import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { CreateCarRequestDto } from "../models/car";
import { Request } from "express";

export const CarDecorator = createParamDecorator<any, any, CreateCarRequestDto>(
    (_: unknown, ctx: ExecutionContext) => {
        const request = ctx
            .switchToHttp()
            .getRequest<Request<any, any, CreateCarRequestDto>>();
        const car: CreateCarRequestDto = request.body;

        return car;
    },
);
