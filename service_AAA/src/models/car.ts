interface BasicCar {
    name: string;
    ps: number;
    type: "BEV" | "PHEV" | "FOSSIL";
}

export interface CarDatabaseDto extends BasicCar {
    id: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateCarRequest extends BasicCar {}

export class CreateCarRequestDto implements BasicCar {
    type: "BEV" | "PHEV" | "FOSSIL";
    ps: number;
    name: string;
}

export class CarDatabaseDto
    extends CreateCarRequestDto
    implements CarDatabaseDto
{
    id: string;
}
