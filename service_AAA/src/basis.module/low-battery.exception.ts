import { HttpException, HttpStatus } from "@nestjs/common";

export class LowBatteryException extends HttpException {
    private static get nameOfConstructor(): string {
        return this.name;
    }

    constructor(msg: string) {
        super(
            {
                exception: LowBatteryException.nameOfConstructor,
                soc: 17,
                msg,
            },
            HttpStatus.EXPECTATION_FAILED,
        );
    }
}
