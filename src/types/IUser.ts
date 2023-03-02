export type Role = 'admin' | 'member';

export interface IUser {
    id: number;
    email: string;
    username: string;
    role: Role;
}
