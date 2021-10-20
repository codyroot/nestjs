import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class AddHeaderMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        res.append("Middleware", "it works");
        next();
    }
}
