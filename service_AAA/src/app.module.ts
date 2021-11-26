import { Module } from "@nestjs/common";
import { BasisModule } from "./basis.module/basis.module";
import { CustomDecoratorModule } from "./custom-decorator.module/custom-decorator.module";
import { ErrorModule } from "./error.module.ts/error.module";
import { GuardModule } from "./guard.module/guard.module";
import { InterceptorModule } from "./interceptor.module/interceptor.module";
import { PipeModule } from "./pipe.module/pipe.module";

@Module({
    imports: [
        BasisModule,
        PipeModule,
        ErrorModule,
        GuardModule,
        InterceptorModule,
        CustomDecoratorModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
