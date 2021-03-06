import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.MONGO_URL;
const mongoDbName = "Paripoorna-Placemnet-Project";

const mongo = {
  db: null,
  details: null,
  async connect() {
    const client = new MongoClient(mongoURL);
    await client.connect();
    console.log("MongoDB connection established");

    this.db = client.db(mongoDbName);
    console.log("MongoDB Selected");

    this.details = this.db.collection("Details");
    console.log("Collections Initialized");
  },
};

export { mongo };
