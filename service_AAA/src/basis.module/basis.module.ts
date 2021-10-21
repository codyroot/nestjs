import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import {
    addHeaderFunctionalMiddleware,
    AddHeaderMiddleware,
} from "./add-header.middleware";
import { BasisController } from "./basis.controller";
import { BasisService } from "./basis.service";
import { BasisStore } from "./basis.store";
import { ErrorController } from "./error.controller";
import { PipeController } from "./pipe.controller";

@Module({
    imports: [],
    exports: [],
    controllers: [BasisController, ErrorController, PipeController],
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
