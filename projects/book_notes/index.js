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
app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM books ORDER BY date_read DESC;");

        res.render("index.ejs", { books: result.rows });

    } catch (err) {
        console.log(err);
        res.send("Database error");
    }
});

// test db
app.get("/test-db", async (req, res) => {
    const result = await db.query("SELECT NOW();");
    res.send(result.rows);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});