import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);

const config = {
  connectionString: process.env.DATABASE_URL,
};

export const pool = new pg.Pool(config);
