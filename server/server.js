import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";
import youtubeRoutes from "./routes/youtubeRoutes.js";

dotenv.config();
console.log("Gemini:", process.env.GEMINI_API_KEY ? "Loaded" : "Missing");
console.log("YouTube:", process.env.YOUTUBE_API_KEY ? "Loaded" : "Missing");
const app = express();   // ← सबसे पहले app create होगा

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("TubeKit API Running...");
});

app.use("/api", aiRoutes);

app.use("/api/youtube", youtubeRoutes); // ← app बनने के बाद

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
