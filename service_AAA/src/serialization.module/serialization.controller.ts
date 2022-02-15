import {
    ClassSerializerInterceptor,
    Controller,
    Get,
    SerializeOptions,
    UseInterceptors,
} from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Controller("/serialization")
export class SerializationController {
    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        excludePrefixes: ["_"],
        version: 1,
    })
    @Get("/")
    findOne(): UserEntity {
        return new UserEntity({
            id: 1,
            // exluded wegen "_"
            _uid: "uid",
            firstName: "Bud",
            lastName: "Spencer",
            password: "my-pw",
        });
    }
}
