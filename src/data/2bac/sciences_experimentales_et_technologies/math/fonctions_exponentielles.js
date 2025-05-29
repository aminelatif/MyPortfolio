// Leçon : Fonctions exponentielles (Sciences Expérimentales)
export default {
  id: "fonctions_exponentielles",
  title: "Fonctions exponentielles",
  parts: [
    {
      id: "definition-exponentielle",
      title: "Définition de la fonction exponentielle",
      sections: [
        { title: "Définition", content: "La fonction exponentielle est la fonction qui à tout réel x associe e^x." },
        { title: "Exemple", content: "e^0 = 1, e^1 = e ≈ 2,718." },
        { title: "Remarque", content: "La fonction exponentielle est cruciale pour modéliser des phénomènes de croissance en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "Quelle est la valeur de e^2 ?", answer: "7,389" }
      ],
      exercises: [
        { question: "Calculez e^3.", answer: "20,086" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-exponentielle",
      title: "Propriétés de la fonction exponentielle",
      sections: [
        { title: "Définition", content: "La fonction exponentielle est strictement croissante et sa dérivée est égale à elle-même." },
        { title: "Exemple", content: "Si f(x) = e^x, alors f'(x) = e^x." },
        { title: "Remarque", content: "Les propriétés de la fonction exponentielle sont essentielles pour l'analyse des phénomènes dynamiques en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "Quelle est la dérivée de f(x) = e^2x ?", answer: "2e^2x" }
      ],
      exercises: [
        { question: "Calculez la dérivée de f(x) = e^x².", answer: "2xe^x²" }
      ],
      gameType: "quiz"
    }
  ]
}; 