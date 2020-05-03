const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database');
const morgan = require("morgan");

const app = express()
const port = process.env.PORT || 3000

//custom routes
const users = require("./routes/v1/user");
const cabs = require("./routes/v1/cabs");
const bookings = require("./routes/v1/bookings");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//logging every request URL
app.use(morgan("dev"))

//routes
app.use("/api/v1/users", users);
app.use("/api/v1/cabs", cabs);
app.use("/api/v1/bookings", bookings);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

db.authenticate()
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(`Error connecting to db: ${err}`))

