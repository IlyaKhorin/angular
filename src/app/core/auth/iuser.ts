export interface IUser {
    id: number;
    name: {
        first: string;
        last: string;
    };
    login: string;
}
