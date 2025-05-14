export default {
  id: "fonctions-numeriques",
  title: "Généralités sur les fonctions numériques",
  parts: [
    {
      id: "domaine-definition",
      title: "Domaine de définition",
      definition: "Le domaine de définition d'une fonction numérique f est l'ensemble des valeurs de x pour lesquelles f(x) existe.",
      example: "Pour f(x) = √x, le domaine de définition est Df = [0, +∞[",
      gameQuestions: [
        { question: "Quel est le domaine de définition de f(x) = 1/(x-2) ?", answer: "ℝ\\{2}" }
      ],
      exercises: [
        { question: "Déterminez le domaine de définition de f(x) = ln(x²-4)", answer: "]-∞, -2[ ∪ ]2, +∞[" }
      ],
      gameType: "quiz"
    },
    {
      id: "parite-periodicite",
      title: "Parité et périodicité",
      definition: "Une fonction est paire si f(-x) = f(x) pour tout x du domaine. Elle est impaire si f(-x) = -f(x).",
      example: "La fonction cosinus est paire, car cos(-x) = cos(x). La fonction sinus est impaire, car sin(-x) = -sin(x).",
      gameQuestions: [
        { question: "La fonction f(x) = x² + 1 est-elle paire, impaire ou ni l'une ni l'autre ?", answer: "Paire" }
      ],
      exercises: [
        { question: "Déterminez si la fonction f(x) = x³ + x est paire, impaire ou ni l'une ni l'autre.", answer: "Impaire" }
      ],
      gameType: "quiz"
    }
  ]
}; 