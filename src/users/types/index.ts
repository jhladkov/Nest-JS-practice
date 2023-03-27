import {Exclude} from "class-transformer";

export interface User {
    username: string;
    password: string;
}

export class SerializedUser {
    username: string;
    @Exclude()
    password: string

    constructor(partial: Partial<SerializedUser>) { // :TODO learn about this
        Object.assign(this, partial)
    }
}