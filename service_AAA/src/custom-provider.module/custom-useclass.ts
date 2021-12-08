import { FuelType } from "../models/car";

export abstract class BasicCar {
    abstract fuelType: FuelType;

    abstract acc(): string;
}

export class ElectricCar extends BasicCar {
    fuelType: FuelType = FuelType.BEV;
    acc(): string {
        return `Ich bin ein ${this.fuelType} Auto`;
    }
}

export class HybridCar extends BasicCar {
    fuelType: FuelType = FuelType.PHEV;
    acc(): string {
        return `Ich bin ein ${this.fuelType} Auto`;
    }
}
