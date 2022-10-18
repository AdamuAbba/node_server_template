import dotenv from 'dotenv';
dotenv.config();

export const db_connection_url: string = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xo8tpkc.mongodb.net/Rad_dish?retryWrites=true&w=majority`;
