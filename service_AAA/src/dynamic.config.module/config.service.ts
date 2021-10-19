import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
    log() {
        console.log("from log module");
    }
}
