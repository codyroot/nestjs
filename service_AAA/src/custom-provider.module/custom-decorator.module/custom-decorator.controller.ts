import { Controller, Post } from "@nestjs/common";

@Controller("/custom-provider")
export class CustomProviderController {
    @Post("/")
    createCar(): string {
        return ``;
    }
}
