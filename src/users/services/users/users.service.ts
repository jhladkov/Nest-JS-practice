import { Injectable } from '@nestjs/common';
import {SerializedUser, User} from "../../types";

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            username: 'James',
            password: 'James'
        },
        {
            id: 2,
            username: 'Danny',
            password: 'Danny'
        },
        {
            id: 3,
            username: 'July',
            password: 'July'
        },
        {
            id: 4,
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
    getUserById(id: number) {
        return this.users.find(user => user.id === id)
    }
}
