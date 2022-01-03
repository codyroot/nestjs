import { Module } from "@nestjs/common";
import { BasisModule } from "./basis.module/basis.module";
import { CustomDecoratorModule } from "./custom-decorator.module/custom-decorator.module";
import { CustomProviderModule } from "./custom-provider.module/custom-provider.module";
import { DatabaseModule } from "./database.module/database.module";
import { ErrorModule } from "./error.module.ts/error.module";
import { GuardModule } from "./guard.module/guard.module";
import { InterceptorModule } from "./interceptor.module/interceptor.module";
import { LifecycleModule } from "./life-cycle.module/life-cycle.module";
import { PipeModule } from "./pipe.module/pipe.module";
import { TestingModule } from "./testing.module/testing.module";

@Module({
    imports: [
        BasisModule,
        PipeModule,
        ErrorModule,
        GuardModule,
        InterceptorModule,
        CustomDecoratorModule,
        CustomProviderModule,
        DatabaseModule,
        LifecycleModule,
        TestingModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
