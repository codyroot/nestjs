import { Module } from "@nestjs/common";
import { CustomProviderController } from "./custom-provider.controller";
import { CustomProviderService } from "./custom-provider.service";
import { BasicCar, ElectricCar, HybridCar } from "./custom-useclass";
import {
    customUseValue,
    customUseValueInterface,
    customUseValueToken,
    INTERFACE_USE_VALUE,
    TOKEN_USE_VALUE,
} from "./custom-usevalue";

@Module({
    controllers: [CustomProviderController],
    providers: [
        {
            provide: CustomProviderService,
            useValue: customUseValue,
        },
        {
            provide: TOKEN_USE_VALUE,
            useValue: customUseValueToken,
        },
        {
            provide: INTERFACE_USE_VALUE,
            useValue: customUseValueInterface,
        },
        {
            provide: BasicCar,
            useClass: true ? ElectricCar : HybridCar,
            // useClass: false ? ElectricCar : HybridCar,
        },
    ],
})
export class CustomProviderModule {}
