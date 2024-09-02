import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/books.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
// Initialize Express app and dotenv
dotenv.config();
const app = express();

// Get PORT and MongoDB URI from environment variables
const port = process.env.PORT || 4000;
const uri = process.env.MongoDbUri;

// Connect to MongoDB using async/await
try {
  await mongoose.connect(uri);
  console.log("Successfully connected to DB");
} catch (e) {
  console.error(`Error: ${e.message}`);
  process.exit(1); // Exit the process with a failure code
}

app.use(express.json());
app.use(cors());
app.use("/book", bookRoute);
app.use("/user", userRoute);
// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
