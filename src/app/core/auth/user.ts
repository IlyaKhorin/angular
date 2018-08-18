import { IUser } from './iuser';

export class User implements IUser {
    constructor(
        public id: number,
        public name: {
            first: string;
            last: string;
        },
        public login: string
    ) { }
}
