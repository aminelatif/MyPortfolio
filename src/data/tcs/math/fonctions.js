export default {
  id: "fonctions",
  title: "Généralités sur les fonctions",
  parts: [
    {
      id: "definition-fonction",
      title: "Définition d'une fonction",
      sections: [
        { title: "Définition", content: "Une fonction est une relation qui associe à chaque élément d'un ensemble de départ un unique élément d'un ensemble d'arrivée." },
        { title: "Exemple", content: "La fonction f : x → x² associe à chaque nombre réel son carré." },
        { title: "Remarque", content: "Voir les propriétés spécifiques de chaque fonction pour plus de détails." }
      ],
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
      sections: [
        { title: "Définition", content: "Le domaine de définition d'une fonction est l'ensemble des valeurs pour lesquelles la fonction est définie." },
        { title: "Exemple", content: "La fonction f : x → 1/x a pour domaine de définition ℝ\\{0} (tous les réels sauf 0)." },
        { title: "Remarque", content: "Voir les propriétés spécifiques de chaque fonction pour plus de détails." }
      ],
      gameQuestions: [
        { question: "Quel est le domaine de définition de f(x) = √x ?", answer: "[0, +∞[" }
      ],
      exercises: [
        { question: "Déterminez le domaine de définition de f(x) = ln(x-1).", answer: "]1, +∞[" }
      ],
      gameType: "brainsprint"
    }
  ]
}; 