import { Controller, Get } from "@nestjs/common";

@Controller("/interceptor")
export class InterceptorController {
    @Get("")
    getRoute() {
        return "interceptor";
    }
}
