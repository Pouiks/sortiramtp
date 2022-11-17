
import db from '../database';

class User {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };
    
    async findOne()
}

export default User;