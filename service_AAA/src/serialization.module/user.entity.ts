import { Exclude, Expose, Transform } from "class-transformer";

export class UserEntity {
    id: number;
    _uid: string;
    firstName: string;
    lastName: string;

    @Transform((value) => value.value.name)
    entityName = {
        name: "blubb",
    };

    @Exclude()
    password: string;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }

    @Expose()
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
