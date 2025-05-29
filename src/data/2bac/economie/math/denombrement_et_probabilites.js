// Leçon : Dénombrement et probabilités (Économie)
export default {
  id: "denombrement_et_probabilites",
  title: "Dénombrement et probabilités",
  parts: [
    {
      id: "denombrement",
      title: "Dénombrement",
      sections: [
        { title: "Définition", content: "Le dénombrement consiste à compter le nombre de possibilités dans une situation donnée." },
        { title: "Exemple", content: "Le nombre de façons d'arranger 3 objets est 3! = 6." },
        { title: "Remarque", content: "Le dénombrement est essentiel pour l'analyse des choix et des combinaisons en économie." }
      ],
      gameQuestions: [
        { question: "Combien y a-t-il de façons d'arranger 4 objets ?", answer: "24" }
      ],
      exercises: [
        { question: "Calculez le nombre de combinaisons de 3 éléments parmi 5.", answer: "10" }
      ],
      gameType: "quiz"
    },
    {
      id: "probabilites",
      title: "Probabilités",
      sections: [
        { title: "Définition", content: "Une probabilité est un nombre entre 0 et 1 qui mesure la chance qu'un événement se réalise." },
        { title: "Exemple", content: "La probabilité d'obtenir pile en lançant une pièce est 1/2." },
        { title: "Remarque", content: "Les probabilités sont fondamentales pour l'analyse des risques et l'aide à la décision en économie." }
      ],
      gameQuestions: [
        { question: "Quelle est la probabilité d'obtenir un 6 en lançant un dé ?", answer: "1/6" }
      ],
      exercises: [
        { question: "Calculez la probabilité d'obtenir au moins un 6 en lançant deux dés.", answer: "11/36" }
      ],
      gameType: "quiz"
    }
  ]
}; 