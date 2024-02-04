exports.register = (req, res) => {
  const sqlite3 = require("sqlite3").verbose();

  const db = new sqlite3.Database("login_auth.db");

  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  db.run(
    `
	INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`,
    [user.name, user.email, user.password],
    function (err) {
      if (err) return console.error(err.message);
      console.log(`A new user has been inserted with ID ${this.lastID}`);
    }
  );
};
