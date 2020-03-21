export interface User {
    readonly id: number;
    email: string;
    username: string;
    readonly pwHash: string;
    firstName: string;
    lastName: string;
}
