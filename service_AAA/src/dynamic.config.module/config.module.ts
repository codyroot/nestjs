import { DynamicModule, Module } from "@nestjs/common";
import { ConfigOptions, CONFIG_OPTIONS_IDENTIFIER } from "./config.options";
import { ConfigService } from "./config.service";

// @Module({})
export class ConfigModule {
    static register(options: ConfigOptions): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: CONFIG_OPTIONS_IDENTIFIER,
                    useValue: options,
                },
                ConfigService,
            ],
            exports: [ConfigService],
        };
    }
}
