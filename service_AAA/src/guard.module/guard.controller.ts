import { Controller, Get, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./authorization.guard";
import { Roles } from "./role.decorator";
import { RolesGuard } from "./role.guard";

@Controller("/guard")
export class GuardController {
    @Get("/auth")
    @UseGuards(AuthGuard)
    getRoute() {
        return "Ich bin eingeloggt";
    }

    @Get("/role/set-meta-data")
    @UseGuards(RolesGuard)
    @SetMetadata("roles", ["agent"])
    getRoleWithSetMetadata() {
        return "set metadata role";
    }

    @Get("/role/custom-decorator")
    @Roles("roles", "driver", "agent")
    @UseGuards(RolesGuard)
    getRoleWithCustomDecorator() {
        return "set custom decorator role";
    }
}
