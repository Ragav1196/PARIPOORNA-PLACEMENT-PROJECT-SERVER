import { MongoClient } from "mongodb";

const mongoURL =
  "mongodb+srv://ragavendiran:welcome123@cluster0.vcsp8.mongodb.net";
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
