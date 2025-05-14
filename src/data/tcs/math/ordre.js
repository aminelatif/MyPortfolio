export default {
  id: "ordre",
  title: "L'ordre dans IR",
  parts: [
    {
      id: "relation-ordre",
      title: "Relation d'ordre",
      definition: "Une relation d'ordre est une relation binaire qui permet de comparer des éléments d'un ensemble. Dans IR, on utilise les symboles < (inférieur à), > (supérieur à), ≤ (inférieur ou égal à), et ≥ (supérieur ou égal à).",
      example: "5 < 7, -3 < 0, √2 < 2, 3 ≤ 3",
      gameQuestions: [
        { question: "Vrai ou faux : -4 > -2 ?", answer: "Faux" },
        { question: "Vrai ou faux : 0 ≥ -5 ?", answer: "Vrai" }
      ],
      exercises: [
        { question: "Classez dans l'ordre croissant : -3, 0, -5, 4, 1", answer: "-5, -3, 0, 1, 4" }
      ],
      gameType: "quiz"
    },
    {
      id: "intervalles",
      title: "Intervalles dans IR",
      definition: "Un intervalle est un sous-ensemble de IR contenant tous les nombres réels compris entre deux valeurs. On distingue les intervalles fermés, ouverts et semi-ouverts.",
      example: "[a,b] = {x ∈ IR | a ≤ x ≤ b}\n]a,b[ = {x ∈ IR | a < x < b}",
      gameQuestions: [
        { question: "À quel intervalle appartient le nombre 5 parmi [2,5], [2,5[, ]5,8] ?", answer: "[2,5]" }
      ],
      exercises: [
        { question: "Exprimez l'ensemble {x ∈ IR | 2 ≤ x < 7} sous forme d'intervalle.", answer: "[2,7[" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 