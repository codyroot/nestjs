import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException,
} from "@nestjs/common";
import { CreateCarRequestDto } from "../models/car";

@Injectable()
export class BevPipe implements PipeTransform {
    transform(value: CreateCarRequestDto, metadata: ArgumentMetadata) {
        console.log(metadata);

        if (value.type != "BEV") {
            throw new BadRequestException(
                `Type must be a BEV instead of ${value.type}`,
            );
        }

        return value;
    }
}
