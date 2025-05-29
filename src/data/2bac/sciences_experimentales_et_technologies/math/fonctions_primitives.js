// Leçon : Fonctions primitives (Sciences Expérimentales)
export default {
  id: "fonctions_primitives",
  title: "Fonctions primitives",
  parts: [
    {
      id: "definition-primitive",
      title: "Définition d'une primitive",
      sections: [
        { title: "Définition", content: "Une primitive d'une fonction f est une fonction F dont la dérivée est f." },
        { title: "Exemple", content: "F(x) = x² est une primitive de f(x) = 2x." },
        { title: "Remarque", content: "Les primitives sont essentielles pour le calcul intégral en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "Quelle est une primitive de f(x) = 3x² ?", answer: "x³" }
      ],
      exercises: [
        { question: "Trouvez une primitive de f(x) = 4x³.", answer: "x⁴" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-primitives",
      title: "Propriétés des primitives",
      sections: [
        { title: "Définition", content: "Si F est une primitive de f, alors F + C est aussi une primitive de f pour toute constante C." },
        { title: "Exemple", content: "F(x) = x² + 5 est une primitive de f(x) = 2x." },
        { title: "Remarque", content: "Les propriétés des primitives permettent de généraliser les solutions en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "Quelle est la primitive de f(x) = 2x qui s'annule en 0 ?", answer: "x²" }
      ],
      exercises: [
        { question: "Trouvez la primitive de f(x) = 3x² qui vaut 1 en 0.", answer: "x³ + 1" }
      ],
      gameType: "quiz"
    }
  ]
}; 