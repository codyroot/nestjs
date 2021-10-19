import { Injectable } from "@nestjs/common";
import { Car } from "../models/car";
import { BasisStore } from "./basis.store";

@Injectable()
export class BasisService {
    constructor(private store: BasisStore) {}

    getCar(): Car {
        this.store.save();

        return {
            id: "1",
            name: "BMW",
            ps: 200,
        };
    }
}
