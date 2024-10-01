import { pool } from "../database.js";
import monsterData from "../data/monsters.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const createMonstersTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS monsters;

        CREATE TABLE IF NOT EXISTS monsters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 monsters table created successfully");
  } catch (err) {
    console.error("⚠️ error creating monsters table", err);
  }
};

const seedMonstersTable = async () => {
  await createMonstersTable();

  monsterData.forEach((monster) => {
    const insertQuery = {
      text: "INSERT INTO monsters (name, type, image, description) VALUES ($1, $2, $3, $4)",
    };

    const values = [
      monster.name,
      monster.type,
      monster.image,
      monster.description,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting monster", err);
        return;
      }

      console.log(`✅ ${monster.name} added successfully`);
    });
  });
};

seedMonstersTable();
