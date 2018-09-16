import { IUser } from './iuser';

export interface Authenticate {
    username: string;
    password: string;
  }

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
