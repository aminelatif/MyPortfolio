export default {
  id: "fonctions-numeriques",
  title: "Généralités sur les fonctions numériques",
  parts: [
    {
      id: "domaine-definition",
      title: "Domaine de définition",
      sections: [
        { title: "Définition", content: "Le domaine de définition d'une fonction numérique f est l'ensemble des valeurs de x pour lesquelles f(x) existe." },
        { title: "Exemple", content: "Pour f(x) = √x, le domaine de définition est Df = [0, +∞[" },
        { title: "Remarque", content: "Le domaine de définition est la première étape de l'étude d'une fonction." }
      ],
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
      sections: [
        { title: "Définition", content: "Une fonction est paire si f(-x) = f(x) pour tout x du domaine. Elle est impaire si f(-x) = -f(x)." },
        { title: "Exemple", content: "La fonction cosinus est paire, car cos(-x) = cos(x). La fonction sinus est impaire, car sin(-x) = -sin(x)." },
        { title: "Remarque", content: "La parité et la périodicité sont des propriétés importantes pour l'étude des fonctions." }
      ],
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