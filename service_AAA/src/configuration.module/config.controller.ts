import { Controller, Get, Inject } from "@nestjs/common";
import { ConfigService, ConfigType } from "@nestjs/config";
import { configNamespace } from "./config-namespace";

interface DatabaseConfig {
    host: string;
    port: number;
}

@Controller("/config")
export class ConfigController {
    constructor(
        private readonly config: ConfigService,
        @Inject(configNamespace.KEY)
        private namespace: ConfigType<typeof configNamespace>,
    ) {}

    @Get("/all")
    getCfg() {
        const dbConfig = this.config.get<DatabaseConfig>("database");
        const dbUser = this.config.get("NOPE_KEY", "DefaultUser");
        const namespace = this.config.get("namespace");

        return {
            dbUser,
            dbHost: this.config.get("DATABASE_HOST"),
            dbPort: this.config.get("DATABASE_PORT"),
            appPort: this.config.get("APP_PORT"),
            dbConfig,
            namespace,
            injectNamespace: this.namespace,
        };
    }
}
