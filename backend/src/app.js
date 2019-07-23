const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();

// Settings

app.set("port", process.env.PORT || 4000);


// Middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/login", require("./routes/login"));
app.use("/api/register", require("./routes/register"));
app.use("/api/publications", require("./routes/publications"));
app.use("/api/users", require("./routes/users"));
app.use("/api/comments", require("./routes/comments"));



module.exports = app;
