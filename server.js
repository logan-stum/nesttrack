import express from "express";
import cors from "cors";
import "dotenv/config";

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://logan-stum.github.io"
  ]
}));

app.use(express.json());

app.get("/api/fetch-listing", async (req, res) => {
  const { url } = req.query;
  try {
    const response = await fetch(
      `https://real-estate101.p.rapidapi.com/api/property-details/byurl?url=${encodeURIComponent(url)}`,
      {
        headers: {
          "x-rapidapi-host": "real-estate101.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

app.get("/api/fetch-photos", async (req, res) => {
  const { url } = req.query;
  try {
    const response = await fetch(
      `https://real-estate101.p.rapidapi.com/api/property-details/photos?url=${encodeURIComponent(url)}`,
      {
        headers: {
          "x-rapidapi-host": "real-estate101.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));