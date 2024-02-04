exports.login = (req, res) => {
  const sqlite3 = require("sqlite3").verbose();

  const db = new sqlite3.Database("login_auth.db");

  db.all("SELECT * FROM Users", (err, rows) => {
    if (err) throw err;

    console.log("Users:");
    rows.forEach((row) => {
      if (req.body.email === row.email && req.body.password === row.password) {
        // res.render("index", { name: row.name });
        console.log("User found");
      } else {
        console.log("User not found");
      }
    });
  });
};
