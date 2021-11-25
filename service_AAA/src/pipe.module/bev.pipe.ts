import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform,
} from "@nestjs/common";
import { CreateCarRequestDto, FuelType } from "../models/car";

@Injectable()
export class BevPipe
    implements PipeTransform<CreateCarRequestDto, CreateCarRequestDto>
{
    transform(value: CreateCarRequestDto, metadata: ArgumentMetadata) {
        console.log(metadata);

        // Weil es eine middlware ist läuft hier jeder Request (bzw. wo es definiert ist)
        // Global/Controller/Methode oder Param drüber
        // Es soll nur für einen bestimmten Anwendungsfall zutreffen
        if (metadata.metatype !== CreateCarRequestDto) return value;

        if (value.type != FuelType.BEV) {
            throw new BadRequestException(
                `Type must be a BEV instead of ${value.type}`,
            );
        }

        return value;
    }
}
