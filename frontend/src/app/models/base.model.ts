export class BaseModel {
    init(fields: string[], obj?: any) {
        for (let i = 0; i < fields.length; i++) {
            this[fields[i]] = null;
        }
        if(obj) {
            for(let key in obj) {
                if(this[key] === null && obj[key] !== undefined && (typeof obj[key] === 'string' || typeof obj[key] === 'boolean' || typeof obj[key] === 'number')) {
                    this[key] = obj[key];
                }
            }
        }
    }
}