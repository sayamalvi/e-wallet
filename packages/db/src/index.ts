import { Client } from "pg";
const client = new Client({
  connectionString: process.env.DB_URL,
});
export default client;
