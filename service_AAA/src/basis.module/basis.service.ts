import { Injectable } from "@nestjs/common";
import { LogService } from "../dynamic.config.module/log.service";
import { Car } from "../models/car";
import { BasisStore } from "./basis.store";

@Injectable()
export class BasisService {
    constructor(private store: BasisStore, private log: LogService) {}

    getCar(): Car {
        this.store.save();
        this.log.log("SAVE");

        return {
            id: "1",
            name: "BMW",
            ps: 200,
        };
    }
}
