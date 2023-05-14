export interface User {
    id?: string;
    username?: string;
    email?: string;
    token?: string;
    role?: number;
    password?: string | null | undefined;
    linkId?: string | null | undefined;
}