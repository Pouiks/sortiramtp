
import db from '../database';

class Pro {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };

    async findAll(){
        const pros = await db.query(`
            select * from "pro";
        `)
        return pros.rows;
    };

    async findOne(id){
        const pro = await db.query(`select * from "pro" where id = $1`, [id]);
        return pro.rows[0];
    }

    async create(pro){
        const {name, image, adress, city, zip_code, phone, location} = pro;
        const newpro = db.query(`
            INSERT INTO
                "pro" (
                    "name",
                    "image",
                    "adress",
                    "city",
                    "zip_code",
                    "phone",
                    "location"
                )
            VALUES ( $1, $2, $3, $4, $5, $6, $7`, 
            [name, image, adress, city, zip_code, phone, location]
        );
        return newpro;
    }

    async update(pro){
        const proToUpdate = db.query(`
            UPDATE "pro" 
                SET 
                    name = $1,
                    image = $2,
                    adress = $3,
                    city = $4,
                    zip_code = $5,
                    location = $6,
                    phone = $7,
                    is_partner = $8
        `, [pro.name, pro.image, pro.adress, pro.city, pro.zip_code, pro.location, pro.phone, pro.is_partner]
        );
        return proToUpdate;
    }

    async delete(id){
        await db.query(`DELETE FROM "pro" WHERE id = $1`, [id]);
    }


}

export default Pro;