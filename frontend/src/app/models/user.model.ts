import { BaseModel } from './base.model';

export class User extends BaseModel {

    static fields: string[] = [
        'id',
        'password',
        'username',
        'firstName',
        'lastName',
        'email',
        'birthDate',
        'registerDate'
    ];

    id: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    registerDate: string;

    constructor(obj?: any) {
        super();
        this.init(User.fields, obj);
    }

    static initArray(array: any[]) {
        let arrayInstances = [];
        if(array && array.length > 0) {
            array.forEach(e => arrayInstances.push(new User(e)));
        }
        return arrayInstances;
    }

    validate(): boolean | string[] {
        let valid: string[] = [];

        if(!this.id && !this.password) {
            valid.push('password');
        }
        if(!this.username) {
            valid.push('username');
        }
        if(!this.firstName) {
            valid.push('firstName');
        }
        if(!this.lastName) {
            valid.push('lastName');
        }
        if(!this.email) {
            valid.push('email');
        }
        if(!this.birthDate) {
            valid.push('birthDate');
        }

        if(valid.length > 0) {
            return valid;
        } else {
            return true;
        }
    }
}