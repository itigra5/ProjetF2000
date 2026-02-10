
  const fulltext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iste accusamus tenetur sapiente, numquam velit neque vel sed unde, necessitatibus ex quisquam doloremque, quidem fugiat est ipsa! Adipisci, explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque sequi similique consequuntur, enim tenetur molestiae totam doloremque neque aperiam rerum eos velit optio quidem eligendi incidunt impedit atque praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iste accusamus tenetur sapiente, numquam velit neque vel sed unde, necessitatibus ex quisquam doloremque, quidem fugiat est ipsa! Adipisci, explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque sequi similique consequuntur, enim tenetur molestiae totam doloremque neque aperiam rerum eos velit optio quidem eligendi incidunt impedit atque praesentium.";


function expandText() {
  document.getElementById('description').textContent = fulltext;
  expandButton.style.display = 'none';
}

const bonnesReponses = [
  "réponse1", // Remplace par la bonne réponse 1
  "réponse2", // Remplace par la bonne réponse 2
  "réponse3",
  "réponse4",
  "réponse5",
  "réponse6",
  "réponse7",
  "réponse8",
  "réponse9",
  "réponse10"
];


function submitAnswers() {
  let toutTrue = true; 
  let compteFalse = 0;
  for (let i = 1; i<=2; i++) {
    const userInput = document.getElementById(`reponse${i}`);
    const valeur = userInput.value.trim().toLowerCase();
    const bonne = bonnesReponses[i - 1].toLowerCase();
    if (valeur !== bonne) {
      toutTrue = false;
      compteFalse++;
    }
  }
  if (toutTrue) {
    alert("Bravo, toutes les réponses sont correctes, envoie de la lettre...")
    console.log("QUIZ FAIT !! ✅✅✅");
  } else {
    alert(`${compteFalse} réponses sont incorrectes.`);
  }
}