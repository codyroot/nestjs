import { Inject, Injectable } from "@nestjs/common";
import {
    CONFIG_OPTIONS_IDENTIFIER,
    ConfigOptions,
    CONFIG_OPTIONS,
} from "./config.options";

@Injectable()
export class LogService {
    constructor(
        @Inject(CONFIG_OPTIONS_IDENTIFIER) private options: ConfigOptions,
    ) {}

    log(msg: string) {
        const prefix = CONFIG_OPTIONS[this.options.type];
        console.log(`${prefix}::${msg}`);
    }
}
