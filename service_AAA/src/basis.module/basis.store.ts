/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from "@nestjs/common";

@Injectable()
export class BasisStore {
    save() {
        console.log("save()");
    }
}
