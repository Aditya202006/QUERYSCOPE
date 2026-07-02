const express = require("express");
const cors = require("cors");

const analyzeRoute = require("./routes/analyze");

const aiRoutes = require("./routes/ai");

const app = express();

const mentorRoutes = require("./routes/mentor");

const reviewRoutes = require("./routes/review");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "QueryScope API Running 🚀"
    });
});

app.use("/api/ai", aiRoutes);

app.use("/api/analyze", analyzeRoute);

app.use("/api/ai/mentor", mentorRoutes);

app.use("/api/review", reviewRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});