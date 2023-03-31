import {Exclude} from "class-transformer";

export interface User {
    id: number,
    username: string;
    password: string;
}

export class SerializedUser {
    id: number
    username: string;
    @Exclude()
    password: string

    constructor(partial: Partial<SerializedUser>) { // :TODO learn about this
        Object.assign(this, partial)
    }
}