import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform,
} from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { CreateCarRequestClassValidatorDto, FuelType } from "../models/car";

@Injectable()
export class BevClassValidatorPipe implements PipeTransform<any> {
    async transform(
        value: CreateCarRequestClassValidatorDto,
        { metatype }: ArgumentMetadata,
    ) {
        
        console.log(metatype);

        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        console.log(errors);

        if (errors.length > 0) {
            throw new BadRequestException(errors);
        }
        return value;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];

        console.log(typeof metatype);
        console.log(types.includes(metatype));

        return !types.includes(metatype);
    }
}
