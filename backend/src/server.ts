import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Handson API running on http://localhost:${PORT}`);
  });
};

startServer();