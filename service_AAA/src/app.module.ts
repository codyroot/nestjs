import { Module } from "@nestjs/common";
import { BasisModule } from "./basis.module/basis.module";
import { CfgModule } from "./configuration.module/config.module";
import { CustomDecoratorModule } from "./custom-decorator.module/custom-decorator.module";
import { CustomProviderModule } from "./custom-provider.module/custom-provider.module";
import { DatabaseModule } from "./database.module/database.module";
import { ErrorModule } from "./error.module.ts/error.module";
import { GuardModule } from "./guard.module/guard.module";
import { InterceptorModule } from "./interceptor.module/interceptor.module";
import { LifecycleModule } from "./life-cycle.module/life-cycle.module";
import { PipeModule } from "./pipe.module/pipe.module";
import { SchedulingModule } from "./scheduling.module/scheduling.module";
import { SerializationModule } from "./serialization.module/serialization.module";
import { TestingModule } from "./testing.module/testing.module";
import { VersioningModule } from "./versioning.module/versioning.module";

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
        CfgModule,
        SerializationModule,
        VersioningModule,
        SchedulingModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
