const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new sqlite3.Database("./database.db");

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
  )
`);

// ❌ STORED XSS (intentional)
app.post("/submit", (req, res) => {
  const msg = req.body.message;

  db.run(
    "INSERT INTO feedback (message) VALUES (?)",
    [msg],
    () => res.redirect("/dashboard.html")
  );
});

// ❌ STORED XSS execution point
app.get("/data", (req, res) => {
  db.all("SELECT * FROM feedback", (err, rows) => {
    let output = "";
    rows.forEach(r => {
      output += `<div class="comment">${r.message}</div>`;
    });
    res.send(output);
  });
});

// ❌ SQL INJECTION (intentional)
app.get("/search", (req, res) => {
  const q = req.query.q;

  // UNSAFE string concatenation → SQLi
  const query = `SELECT * FROM feedback WHERE message LIKE '%${q}%'`;

  db.all(query, (err, rows) => {
    if (err) {
      return res.send("SQL Error: " + err.message);
    }

    let output = "<h2>Search Results</h2>";
    rows.forEach(r => {
      output += `<div class="comment">${r.message}</div>`;
    });

    res.send(output);
  });
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
