export default {
  id: "ensembles",
  title: "Les ensembles de nombres N, Z, Q, D et R",
  parts: [
    {
      id: "definition-ensembles",
      title: "Définitions des ensembles numériques",
      definition: "Les ensembles numériques représentent des collections de nombres avec des propriétés spécifiques.",
      example: "N : ensemble des entiers naturels (0, 1, 2, 3, ...)\nZ : ensemble des entiers relatifs (..., -2, -1, 0, 1, 2, ...)",
      gameQuestions: [
        { question: "À quel ensemble appartient le nombre -5 ?", answer: "Z" },
        { question: "À quel ensemble appartient le nombre 2,5 ?", answer: "Q, D, R" }
      ],
      exercises: [
        { question: "Citez tous les ensembles auxquels appartient le nombre 4.", answer: "N, Z, Q, D, R" }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-ensembles",
      title: "Opérations sur les ensembles",
      definition: "Les opérations sur les ensembles incluent l'union (∪), l'intersection (∩), et la différence.",
      example: "A = {1, 2, 3}, B = {3, 4, 5}\nA ∪ B = {1, 2, 3, 4, 5}\nA ∩ B = {3}",
      gameQuestions: [
        { question: "Si A = {1, 2, 3} et B = {2, 3, 4}, quel est A ∩ B ?", answer: "{2, 3}" }
      ],
      exercises: [
        { question: "Si A = {1, 3, 5, 7} et B = {2, 3, 5, 8}, calculez A ∪ B.", answer: "{1, 2, 3, 5, 7, 8}" }
      ],
      gameType: "brainsprint"
    }
  ]
}; 