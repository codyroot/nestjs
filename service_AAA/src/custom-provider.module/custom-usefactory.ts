import { FuelType } from "../models/car";

export abstract class BasicCar {
    abstract fuelType: FuelType;

    abstract acc(): string;
}

export class CarFactory {
    public readonly fuelType: FuelType;

    public static newElectricCar(): CarFactory {
        return new CarFactory(FuelType.BEV);
    }

    public static newHybridCar(): CarFactory {
        return new CarFactory(FuelType.PHEV);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(type: FuelType) {
        this.fuelType = type;
    }

    getType(): string {
        return `Ich bin ein Power ${this.fuelType} Auto !!!`;
    }
}
