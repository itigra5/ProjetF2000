const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Pour lire le corps des POST
app.use(express.json());

// Sert tout ce qu'il y a dans public
app.use(express.static("public"));

// Route pour recevoir les messages du front
app.post("/log", (req, res) => {
  const message = req.body.message || "Pas de message";
  console.log("Message depuis le front :", message);
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
