import { Injectable } from "@nestjs/common";

@Injectable()
export class TestinServiceB {
    bbb(): string {
        return "BBB";
    }
}
