import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// Cat fact route (calls external API)
app.get("/api/catfact", async (req, res) => {
  try {
    const response = await fetch("https://catfact.ninja/fact", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    const data = await response.json();

    return res.json({
      fact: data.fact,
      length: data.length,
    });
  } catch (err) {
    return res.status(500).json({
      error: { message: "Failed to fetch cat fact." },
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});