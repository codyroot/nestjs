import { Injectable } from "@nestjs/common";
import { ConfigService } from "../dynamic.config.module/config.service";

@Injectable()
export class LogService {
    constructor(private readonly configService: ConfigService) {}

    log() {
        console.log(this.configService.config(), "from log module");
    }
}
