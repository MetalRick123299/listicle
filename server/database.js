import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const config = {
  connectionString: process.env.DATABASE_URL,
};

export const pool = new pg.Pool(config);
