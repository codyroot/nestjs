import { Controller, Post } from "@nestjs/common";
import { CreateCarRequestDto } from "../models/car";
import { CarPropertyDecorator } from "./car-property.decorator";
import { CarDecorator } from "./car.decorator";

@Controller("/custom-decorator")
export class CustomDecoratorController {
    @Post("/car")
    createCar(@CarDecorator() car: CreateCarRequestDto): string {
        return `Name der Karre ${car.name}`;
    }

    @Post("/car-property")
    propertyCar(@CarPropertyDecorator("ps") carProp: string): string {
        return `Ps: ${carProp}`;
    }
}
