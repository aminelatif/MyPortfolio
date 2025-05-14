export default {
  id: "fonctions",
  title: "Généralités sur les fonctions",
  parts: [
    {
      id: "definition-fonction",
      title: "Définition d'une fonction",
      definition: "Une fonction est une relation qui associe à chaque élément d'un ensemble de départ un unique élément d'un ensemble d'arrivée.",
      example: "La fonction f : x → x² associe à chaque nombre réel son carré.",
      gameQuestions: [
        { question: "Que signifie f(3) = 9 pour la fonction f : x → x² ?", answer: "L'image de 3 par la fonction f est 9" },
        { question: "Si f(x) = 2x + 1, quelle est la valeur de f(2) ?", answer: "5" }
      ],
      exercises: [
        { question: "Calculez f(-1) si f(x) = x³ - 2x.", answer: "-1" }
      ],
      gameType: "quiz"
    },
    {
      id: "domaine-definition",
      title: "Domaine de définition",
      definition: "Le domaine de définition d'une fonction est l'ensemble des valeurs pour lesquelles la fonction est définie.",
      example: "La fonction f : x → 1/x a pour domaine de définition ℝ\\{0} (tous les réels sauf 0).",
      gameQuestions: [
        { question: "Quel est le domaine de définition de f(x) = √x ?", answer: "[0, +∞[" }
      ],
      exercises: [
        { question: "Déterminez le domaine de définition de f(x) = ln(x-1).", answer: "]1, +∞[" }
      ],
      gameType: "brainsprint"
    },
    {
      id: "extrema-variations",
      title: "Extrema et variations",
      definition: "Les extrema sont les valeurs maximales ou minimales prises par une fonction sur un intervalle. Les variations d'une fonction décrivent comment elle évolue (croissance, décroissance).",
      example: "La fonction f : x → x² est décroissante sur ]-∞, 0] et croissante sur [0, +∞[. Elle admet un minimum global en x = 0.",
      gameQuestions: [
        { question: "La fonction f : x → x³ est-elle croissante sur ℝ ?", answer: "Oui" }
      ],
      exercises: [
        { question: "Déterminez les intervalles de croissance et de décroissance de f(x) = x² - 4x + 3.", answer: "Décroissante sur ]-∞, 2], croissante sur [2, +∞[" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 