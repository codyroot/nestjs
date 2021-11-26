import {
    Injectable,
    CanActivate,
    ExecutionContext,
    BadRequestException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { ROLE_KEY } from "./role.decorator";

const userMap: Map<string, Set<string>> = new Map();

userMap.set("James", new Set(["agent", "driver"]));
userMap.set("Taxy", new Set(["driver"]));

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roleForThisContext = this.reflector.get<string[]>(
            ROLE_KEY,
            context.getHandler(),
        );

        if (!roleForThisContext) {
            return true;
        }
        const request = context.switchToHttp().getRequest<Request>();
        const user = request.headers["x-user"] as string;

        const currentUser = userMap.get(user);

        return (
            currentUser != null &&
            roleForThisContext.some((userRole) => currentUser.has(userRole))
        );
    }
}
