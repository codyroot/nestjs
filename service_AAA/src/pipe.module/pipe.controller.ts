import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

@Controller("/pipe")
export class PipeController {
    @Get("/p/:id")
    async pipeInt(@Param("id", ParseIntPipe) id: number) {
        return id;
    }
}
