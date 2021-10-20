import { Inject, Injectable } from "@nestjs/common";
import { ConfigOptions, CONFIG_OPTIONS_IDENTIFIER } from "./config.options";

@Injectable()
export class ConfigService {
    constructor(
        @Inject(CONFIG_OPTIONS_IDENTIFIER) private options: ConfigOptions,
    ) {}

    config(): ConfigOptions {
        return this.options;
    }
}
