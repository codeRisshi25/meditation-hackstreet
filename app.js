const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("login_auth.db");

const app = express();

db.serialize(() => {
  db.run(`
	  CREATE TABLE IF NOT EXISTS Users (
		id INTEGER PRIMARY KEY,
		name TEXT,
		email TEXT,
		password TEXT
	  )
	`);
});

// const user = {
// 	name: 'John Doe',
// 	email: 'john.doe@example.com',
// 	password: 'password123'
// };

function getUsers() {
  db.all("SELECT * FROM Users", (err, rows) => {
    if (err) throw err;

    console.log("Users:");
    rows.forEach((row) => {
      console.log(row);
    });
  });
}

// const db = mysql.createConnection({
// 	host: process.env.DATABASE_HOST,
// 	user: process.env.DATABASE_USER,
// 	password: process.env.DATABASE_PASSWORD,
// 	database: process.env.DATABASE,
// });

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "hbs");

// db.connect((err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Connected to database");
// 	}
// });

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
