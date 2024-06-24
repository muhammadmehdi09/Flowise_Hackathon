import "dotenv/config";
import express from "express";
import datas from "./routes/data.mjs";
import connectDB from "./database/main.mjs";

connectDB();
const app = express();
const PORT = 5678;

app.use(express.json());

app.use("/", datas);

app.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT);
});
