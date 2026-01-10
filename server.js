const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new sqlite3.Database("./database.db");

db.run(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
  )
`);

// ❌ STORED XSS (no sanitization)
app.post("/submit", (req, res) => {
  const msg = req.body.message;

  db.run(
    "INSERT INTO feedback (message) VALUES (?)",
    [msg],
    () => res.redirect("/dashboard.html")
  );
});

app.get("/data", (req, res) => {
  db.all("SELECT * FROM feedback", (err, rows) => {
    let output = "";
    rows.forEach(r => {
      output += `<div class="comment">${r.message}</div>`; // XSS here
    });
    res.send(output);
  });
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
