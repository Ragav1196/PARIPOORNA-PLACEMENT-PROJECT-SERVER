import express from "express";
import { mongo } from "./mongo.js";
import cors from "cors";
import { route as detailsRoute } from "./routes/details.routes.js";

(async () => {
  try {
    const app = express();

    app.use(express.json());
    app.use(cors());

    // MongoDB collection
    await mongo.connect();

    app.use("/details", detailsRoute);

    app.get("/", (req, res) => {
      res.send(`<h1 style="text-align: center" >APPLICANTS DETAILS</h1>`);
    });

    app.listen(9000, () => console.log("Server running at 9000"));
  } catch (error) {
    console.error("Error starting app");
  }
})();
