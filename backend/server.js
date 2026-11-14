
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("FindIt  is Running!");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});