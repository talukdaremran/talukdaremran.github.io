import express from 'express';
import bodyparser from 'body-parser';
import db from './db.js';

const app = express();
const port = 3000;

// middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// home
app.get("/", (req, res) => {
    res.send("Server is running");
});

// test db
app.get("/test-db", async (req, res) => {
    const result = await db.query("SELECT NOW();");
    res.send(result.rows);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});