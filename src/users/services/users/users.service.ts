import { Injectable } from '@nestjs/common';
import {SerializedUser, User} from "../../types";

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'James',
            password: 'James'
        },
        {
            username: 'Danny',
            password: 'Danny'
        },
        {
            username: 'July',
            password: 'July'
        },
        {
            username: 'Kris',
            password: 'Kris'
        },
    ]
    getUsers() {
        return this.users.map(user => new SerializedUser(user))
    }

    getUserByUsername(username: string) {
        return this.users.find(user => user.username === username)
    }
}
