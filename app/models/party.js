
import db from '../database';

class Party {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        };
    };

    async findAll(){
        const parties = await db.query(`
            select * from "party";
        `)
        return parties.rows;
    };

    async findOne(id){
        const party = await db.query(`select * from "party" where id = $1`, [id]);
        return party.rows[0];
    }

    async create(party){
        const {name, video, price, price_secondary,price_tertiary, date, start_at, end_at, reservation_link, description, pro_id } = party;
        const newParty = db.query(`
            INSERT INTO
                "party" (
                    "name",
                    "video",
                    "price",
                    "price_secondary",
                    "price_tertiary",
                    "date",
                    "start_at",
                    "end_at",
                    "reservation_link",
                    "description",
                    "pro_id",
                )
            VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11`, 
            [name, video, price, price_secondary,price_tertiary, date, start_at, end_at, reservation_link, description, pro_id]
        );
        return newParty;
    }

    async update(party){
        const proToUpdate = db.query(`
            UPDATE "pro" 
                SET 
                    name = $1,
                    video = $2,
                    price = $3,
                    price_secondary = $4,
                    price_tertiary = $5,
                    date = $6,
                    start_at = $7,
                    end_at = $8
                    reservation_link = $9
                    description = $10
                    pro_id = $11
        `, [party.name, party.video, party.price, party.price_secondary, party.price_tertiary, party.date, party.start_at, party.end_at, party.reservation_link, party.description, party.pro_id]
        );
        return proToUpdate;
    }

    async delete(id){
        await db.query(`DELETE FROM "party" WHERE id = $1`, [id]);
    }


}

export default Pro;