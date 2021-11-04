import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import {
    addHeaderFunctionalMiddleware,
    AddHeaderMiddleware,
} from "./add-header.middleware";
import { BasisController } from "./basis.controller";
import { BasisService } from "./basis.service";
import { BasisStore } from "./basis.store";
import { ConfigModule } from "../dynamic.config.module/config.module";
import { CONFIG_OPTIONS } from "../dynamic.config.module/config.options";

@Module({
    imports: [
        ConfigModule.register({
            type: CONFIG_OPTIONS.PROD,
        }),
    ],
    exports: [],
    controllers: [BasisController],
    providers: [BasisService, BasisStore],
})
export class BasisModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(AddHeaderMiddleware).forRoutes("/basis");
        consumer
            .apply(AddHeaderMiddleware, addHeaderFunctionalMiddleware)
            .forRoutes(BasisController);
    }
}
