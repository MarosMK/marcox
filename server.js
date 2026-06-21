const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Get projects from database
app.get("/projects", async (req, res) => {
    const result = await db.query("SELECT * FROM Projects");
    res.json(result.recordset);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});