import { Injectable } from "@nestjs/common";

export interface ICustomProviderService {
    getMessage(): string;
}

@Injectable()
export class CustomProviderService implements ICustomProviderService {
    public getMessage() {
        return `${CustomProviderService.name}`;
    }
}
