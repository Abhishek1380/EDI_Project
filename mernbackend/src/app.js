const express = require("express"); // To use express module
const app = express();
require("./db/conn.js");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from thapatechnical");
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});