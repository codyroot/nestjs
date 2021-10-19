import { Injectable } from "@nestjs/common";
import { Car } from "../models/car";

@Injectable()
export class BasisService {
    getCar(): Car {
        return {
            id: "1",
            name: "BMW",
            ps: 200,
        };
    }
}
