const express = require("express");

const app = express();

app.get("/getHi", (request, response) => {
  response.send({ hi: "User Name EDITED" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
