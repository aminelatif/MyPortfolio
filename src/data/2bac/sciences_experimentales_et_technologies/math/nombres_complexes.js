// Leçon : Nombres complexes (Sciences Expérimentales)
export default {
  id: "nombres_complexes",
  title: "Nombres complexes",
  parts: [
    {
      id: "definition-complexe",
      title: "Définition des nombres complexes",
      definition: "Un nombre complexe est un nombre de la forme z = a + bi, où a et b sont des réels et i est l'unité imaginaire telle que i² = -1.",
      example: "z = 3 + 2i est un nombre complexe.",
      gameQuestions: [
        { question: "Quel est le conjugué de z = 4 - 5i ?", answer: "4 + 5i" }
      ],
      exercises: [
        { question: "Calculez |z| pour z = 3 + 4i.", answer: "5" }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-complexes",
      title: "Opérations sur les nombres complexes",
      definition: "On peut additionner, soustraire, multiplier et diviser des nombres complexes.",
      example: "(1 + 2i) + (3 - i) = 4 + i.",
      gameQuestions: [
        { question: "Calculez (2 + 3i) * (1 - i).", answer: "5 + i" }
      ],
      exercises: [
        { question: "Trouvez la forme algébrique de (1 + i)^2.", answer: "2i" }
      ],
      gameType: "quiz"
    }
  ]
}; 