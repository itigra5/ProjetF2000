const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// Pour lire le corps des POST
app.use(express.json());

// Pour que Express s'occupe du front end (de chat GPT)

// Servir les fichiers statiques de React
app.use(express.static(path.join(__dirname, 'dist')));

// Rediriger toutes les requêtes vers index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Route pour recevoir les messages du front
app.post("/log", (req, res) => {
  const message = req.body.message || "Pas de message";
  console.log("Message depuis le front :", message);
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
