import { Injectable, CanActivate, ExecutionContext, Req } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();

        if (request.headers["x-token"] !== "007") {
            return false;
        }

        return true;
    }
}
