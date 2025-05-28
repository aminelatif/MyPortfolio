export default {
  id: "equations",
  title: "Équations, inéquations et systèmes",
  parts: [
    {
      id: "equations-premier-degre",
      title: "Équations du premier degré",
      definition: "Une équation du premier degré à une inconnue est une équation de la forme ax + b = 0, où a ≠ 0.",
      example: "3x - 6 = 0 est une équation du premier degré dont la solution est x = 2.",
      sections: [
        { title: "Définition", content: "Une équation du premier degré à une inconnue est une équation de la forme ax + b = 0, où a ≠ 0." },
        { title: "Exemple", content: "3x - 6 = 0 est une équation du premier degré dont la solution est x = 2." },
        { title: "Remarque", content: "Chaque type d'équation ou d'inéquation a ses propres méthodes de résolution." }
      ],
      gameQuestions: [
        { question: "Résolvez l'équation 2x - 5 = 7.", answer: "x = 6" },
        { question: "Résolvez l'équation 3(x - 2) = 2(x + 1).", answer: "x = 8" }
      ],
      exercises: [
        { question: "Résolvez l'équation 4(x + 1) - 3(x - 2) = 5.", answer: "x = 1" }
      ],
      gameType: "quiz"
    },
    {
      id: "inegalites",
      title: "Inégalités et inéquations",
      definition: "Une inéquation est une inégalité entre deux expressions mathématiques qui contient des variables.",
      example: "L'inéquation 2x + 3 < 7 a pour ensemble de solutions x < 2.",
      sections: [
        { title: "Définition", content: "Une inéquation est une inégalité entre deux expressions mathématiques qui contient des variables." },
        { title: "Exemple", content: "L'inéquation 2x + 3 < 7 a pour ensemble de solutions x < 2." },
        { title: "Remarque", content: "Chaque type d'équation ou d'inéquation a ses propres méthodes de résolution." }
      ],
      gameQuestions: [
        { question: "Résolvez l'inéquation 3x - 1 > 5.", answer: "x > 2" }
      ],
      exercises: [
        { question: "Résolvez l'inéquation 4(x - 1) ≤ 3(x + 2).", answer: "x ≤ 10" }
      ],
      gameType: "brainsprint"
    },
    {
      id: "systemes",
      title: "Systèmes d'équations",
      definition: "Un système d'équations est un ensemble d'équations comportant plusieurs variables à résoudre simultanément.",
      example: "Le système {x + y = 5\nx - y = 1 a pour solution (x,y) = (3,2).",
      sections: [
        { title: "Définition", content: "Un système d'équations est un ensemble d'équations comportant plusieurs variables à résoudre simultanément." },
        { title: "Exemple", content: "Le système {x + y = 5\nx - y = 1 a pour solution (x,y) = (3,2)." },
        { title: "Remarque", content: "Chaque type d'équation ou d'inéquation a ses propres méthodes de résolution." }
      ],
      gameQuestions: [
        { question: "Résolvez le système {x + y = 8\nx - y = 2", answer: "(5,3)" }
      ],
      exercises: [
        { question: "Résolvez le système {2x + 3y = 13\nx - y = 1", answer: "(2,3)" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 