import { Controller, Get, Inject } from "@nestjs/common";
import {
    CustomProviderService,
    ICustomProviderService,
} from "./custom-provider.service";
import { BasicCar } from "./custom-useclass";
import { CarFactory } from "./custom-usefactory";
import { INTERFACE_USE_VALUE, TOKEN_USE_VALUE } from "./custom-usevalue";

@Controller("/custom-provider")
export class CustomProviderController {
    constructor(
        // Das geht nur mit einer Klasse und kein interface, weil interfaces nur zur CompileZeit verfügbar sind
        private service: CustomProviderService,
        @Inject(TOKEN_USE_VALUE) private serviceToken: CustomProviderService,
        @Inject(INTERFACE_USE_VALUE)
        private serviceInterface: CustomProviderService,
        private car: BasicCar,
        private carFactory: CarFactory,
    ) {}

    @Get("/usevalue")
    useValue(): string {
        return this.service.getMessage();
    }

    @Get("/usevalue-token")
    useValueToken(): string {
        return this.serviceToken.getMessage();
    }

    @Get("/usevalue-interface")
    useValueInterface(): string {
        return this.serviceInterface.getMessage();
    }

    @Get("/useclass")
    useClass(): string {
        return this.car.acc();
    }

    @Get("/usefactory")
    useFactory(): string {
        return this.carFactory.getType();
    }
}
