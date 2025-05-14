export default {
  id: "polynomes",
  title: "Les polynômes",
  parts: [
    {
      id: "definition-polynome",
      title: "Définition d'un polynôme",
      definition: "Un polynôme est une expression algébrique qui consiste en une somme de termes, chaque terme étant le produit d'une constante et d'une ou plusieurs variables élevées à une puissance entière non négative.",
      example: "P(x) = 3x³ - 5x² + 2x - 7 est un polynôme de degré 3.",
      gameQuestions: [
        { question: "Quel est le degré du polynôme P(x) = 4x⁵ - 2x³ + x - 8 ?", answer: "5" },
        { question: "Quel est le coefficient du terme de plus haut degré dans P(x) = 4x⁵ - 2x³ + x - 8 ?", answer: "4" }
      ],
      exercises: [
        { question: "Décomposez le polynôme P(x) = x² - 9 en produit de facteurs du premier degré.", answer: "P(x) = (x - 3)(x + 3)" }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-polynomes",
      title: "Opérations sur les polynômes",
      definition: "Les opérations fondamentales sur les polynômes comprennent l'addition, la soustraction, la multiplication et la division.",
      example: "Si P(x) = x² + 2x + 1 et Q(x) = x - 1, alors P(x) + Q(x) = x² + 3x et P(x) × Q(x) = x³ + 2x² - x - 1",
      gameQuestions: [
        { question: "Effectuez la somme (2x² - 3x + 1) + (x² + 5x - 4).", answer: "3x² + 2x - 3" }
      ],
      exercises: [
        { question: "Calculez le quotient et le reste de la division de P(x) = x³ - 1 par Q(x) = x - 1.", answer: "Quotient : x² + x + 1, Reste : 0" }
      ],
      gameType: "brainsprint"
    }
  ]
}; 