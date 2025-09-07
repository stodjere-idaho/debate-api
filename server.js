// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware so Express can read JSON bodies
app.use(express.json());

// Health check route (to test if the server runs)
app.get("/healthz", (req, res) => {
  res.json({ ok: true, message: "Server is working!" });
});

// Placeholder endpoint for your debate turns
app.post("/sessions/:id/turns", (req, res) => {
  const { user_message, voices } = req.body;
  console.log("Received:", user_message, voices);

  // For now, just return dummy JSON (you’ll connect OpenAI later)
  res.json({
    author: { voice: "author", thesis: "Author reply here" },
    challenger: { voice: "challenger", thesis: "Challenger reply here" },
    synthesizer: { voice: "synthesizer", thesis: "Synthesizer reply here" },
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
