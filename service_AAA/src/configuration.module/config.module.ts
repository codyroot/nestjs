import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { configNamespace } from "./config-namespace";
import { configPojo } from "./config-pojo";
import { ConfigController } from "./config.controller";

@Module({
    controllers: [ConfigController],
    imports: [
        // Variante 1 -> nur die angegebene config wird geladen
        ConfigModule.forFeature(configNamespace),
        ConfigModule.forRoot({
            envFilePath: "./src/configuration.module/.env",
            load: [configPojo /*configNamespace*/], // Variante 2
            cache: false,
        }),
    ],
})
export class CfgModule {}
