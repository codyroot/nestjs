import { Injectable } from "@nestjs/common";

@Injectable()
export class TestinServiceA {
    aaa(): string {
        return "AAA";
    }
}
