import { Controller, Get, Version } from "@nestjs/common";

// In der main.ts muss es gesetzt werden
// Entweder URL, Header oder Media Type
@Controller("/versioning")
export class VersioningController {
    @Version("1")
    @Get("/url")
    public url_1() {
        return "URL Version 1";
    }

    @Version("2")
    @Get("/url")
    public url_2() {
        return "URL Version 2";
    }

    @Version(["1", "2"])
    @Get("/multiple")
    public url_multiple() {
        return "URL Version multiple";
    }
}
