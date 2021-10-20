import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AddHeaderMiddleware } from "./add-header.middleware";
import { BasisController } from "./basis.controller";
import { BasisService } from "./basis.service";
import { BasisStore } from "./basis.store";

@Module({
    imports: [],
    exports: [],
    controllers: [BasisController],
    providers: [BasisService, BasisStore],
})
export class BasisModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AddHeaderMiddleware).forRoutes("/basis");
    }
}
