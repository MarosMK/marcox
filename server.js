const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Get projects from database
app.get("/projects", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM Projects");
        res.json(result.recordset);
    } catch (err) {
        console.error("DB error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});