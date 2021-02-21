export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    birthDate: string;
    avatar: string;
    isActive: boolean;
    hashPassword(): Promise<void>;
    comparePassword(attempt: string): Promise<boolean>;
}
