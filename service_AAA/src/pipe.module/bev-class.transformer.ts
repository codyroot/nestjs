import { IsNumber, IsString } from "class-validator";

export class CreateCarClassTransformerDto {
    @IsNumber()
    ps: number;

    @IsString()
    type: string;

    @IsString()
    name: string;
}
