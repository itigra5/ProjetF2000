
  const fulltext = "Cupidon ne voulut pas me laisser assez de temps pour une vraie explication, mais cette impressionnante technologie me donne l’espace d’approfondir. Sachez qu’un traître se terre parmi vous, subtilement ; si vous ne le retrouvez pas, il s’emparera de notre précieux trésor et n’en laissera pas une miette ! Malheureusement, je ne peux pas encore vous indiquer son identité avec précision, ce serait bien trop évident… Donc, d’ici la rentrée, résolvez ces questions et, une fois fait, une lettre vous sera envoyée dans laquelle les indications pour le dénicher et surtout retrouver le trésor vous seront données. Évidemment, le butin sera vôtre.";


function expandText() {
  document.getElementById('description').textContent = fulltext;
  expandButton.style.display = 'none';
}

const ENV = {
    code: "ILS ONT REUSSIENT !!"
};

const bonnesReponses = [
  "Rick Astley",
  "secret",
  "sous-marins",
  "Sniper",
  "Juliette",
  "magnésie",
  "mur",
  "Für Elise",
  "navire"
];


function submitAnswers() {
  let toutTrue = true; 
  let compteFalse = 0;

  for (let i = 1; i <= 9; i++) {
    const userInput = document.getElementById(`reponse${i}`);
    const valeur = userInput.value.trim().toLowerCase();
    const bonne = bonnesReponses[i - 1].toLowerCase();
    if (valeur !== bonne) {
      toutTrue = false;
      compteFalse++;
    }
  }

  if (toutTrue) {
    alert("Bravo, toutes les réponses sont correctes, envoie de la lettre...");

    // Envoi au backend
    fetch("/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: ENV.code })
    });

    if (document.getElementById(`reponse3`).value.trim().toLowerCase() === "secret") {
      fetch("/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Tout va bien, c'est un test : " + ENV.code })
      });
    }

  } else {
    // ← ce else correspond à if(toutTrue)
    alert(`${compteFalse} réponses sont incorrectes.`);
  }
}
