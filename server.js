const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.post("/log", (req, res) => {
  const message = req.body.message || "Pas de message";
  console.log("Message depuis le front :", message);
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
