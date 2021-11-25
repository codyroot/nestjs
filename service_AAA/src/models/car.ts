import { IsEnum, IsInt, IsString } from "class-validator";

export enum FuelType {
    BEV = "BEV",
    PHEV = "PHEV",
    FOSSIL = "FOSSIL",
}

interface IBasicCar {
    name: string;
    ps: number;
    type: FuelType;
}

export interface ICarDatabaseDto extends IBasicCar {
    id: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateCarRequest extends IBasicCar {}

export class CreateCarRequestDto implements IBasicCar {
    type: FuelType;
    ps: number;
    name: string;
}

export class CreateCarRequestClassValidatorDto implements CreateCarRequest {
    @IsString()
    name: string;

    @IsInt()
    ps: number;

    @IsEnum(FuelType, { each: true })
    type: FuelType;
}
