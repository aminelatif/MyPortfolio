export default {
  id: "suites-numeriques",
  title: "Les suites numériques",
  parts: [
    {
      id: "definition-suite",
      title: "Définition et modes de génération",
      definition: "Une suite numérique est une fonction définie sur l'ensemble ℕ des entiers naturels et à valeurs dans ℝ.",
      example: "La suite (un) définie par un = 2n + 1 donne les termes: u0 = 1, u1 = 3, u2 = 5, u3 = 7...",
      gameQuestions: [
        { question: "Comment appelle-t-on une suite définie par une relation un+1 = f(un) ?", answer: "Suite définie par récurrence" }
      ],
      exercises: [
        { question: "Calculez les 4 premiers termes de la suite (un) définie par u0 = 1 et un+1 = 2un - 1", answer: "u0 = 1, u1 = 1, u2 = 1, u3 = 1" }
      ],
      gameType: "quiz"
    },
    {
      id: "monotonie-suites",
      title: "Monotonie des suites",
      definition: "Une suite (un) est croissante si pour tout n, un+1 ≥ un. Elle est décroissante si pour tout n, un+1 ≤ un.",
      example: "La suite un = n² est croissante car (n+1)² - n² = 2n + 1 > 0 pour tout n ≥ 0.",
      gameQuestions: [
        { question: "La suite définie par un = 1/n est-elle croissante ou décroissante ?", answer: "Décroissante" }
      ],
      exercises: [
        { question: "Étudiez la monotonie de la suite définie par un = n/(n+1)", answer: "Croissante" }
      ],
      gameType: "quiz"
    },
    {
      id: "limite-suite",
      title: "Limite d'une suite",
      definition: "On dit que la suite (un) tend vers la limite l lorsque n tend vers l'infini si tout intervalle ouvert contenant l contient tous les termes de la suite à partir d'un certain rang.",
      example: "La suite un = 1/n tend vers 0 quand n tend vers l'infini.",
      gameQuestions: [
        { question: "Vers quelle limite tend la suite un = (3n² + 2)/(2n² + 1) ?", answer: "3/2" }
      ],
      exercises: [
        { question: "Déterminez la limite de la suite un = (n-1)/(n+1) quand n tend vers l'infini.", answer: "1" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 