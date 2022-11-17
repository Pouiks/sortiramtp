import {} from 'dotenv/config'
//Il vaut mieux utiliser un système de pool pour traiter plusieurs requête en même temps
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ 
    user: process.env.PG_USER ,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    host: process.env.PG_HOST
 });

// Pas besoin de connect car c'est le Pool qui va se charger d'établir les connexions

export default pool;