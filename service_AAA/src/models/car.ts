interface BasicCar {
    name: string;
    ps: number;
}

export interface Car extends BasicCar {
    id: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateCarRequest extends BasicCar {}
