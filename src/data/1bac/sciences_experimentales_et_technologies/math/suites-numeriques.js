export default {
  id: "suites-numeriques",
  title: "Les suites numériques",
  parts: [
    {
      id: "definition-generalites",
      title: "Définition et généralités",
      definition: "Une suite numérique est une fonction définie sur ℕ ou une partie de ℕ, à valeurs dans ℝ. On la note (uₙ) où n est l'indice. Il y a plusieurs façons de définir une suite: par son terme général, par récurrence, ou par une propriété caractéristique.",
      example: "La suite (uₙ) définie par uₙ = 2n+1 pour tout n∈ℕ donne les termes: u₀ = 1, u₁ = 3, u₂ = 5, u₃ = 7... C'est la suite des nombres impairs.",
      gameQuestions: [
        { question: "Si une suite (uₙ) est définie par récurrence, qu'est-ce qu'on doit connaître pour calculer ses termes?", answer: "Le premier terme u₀ (ou un autre terme initial) et la relation liant uₙ₊₁ à uₙ" },
        { question: "Quelle est la différence entre une suite définie par récurrence et une suite définie explicitement?", answer: "Une suite définie par récurrence exprime uₙ₊₁ en fonction de uₙ, tandis qu'une suite définie explicitement donne directement uₙ en fonction de n" }
      ],
      exercises: [
        { question: "Pour la suite (uₙ) définie par u₀ = 1 et uₙ₊₁ = 2uₙ + 3, calculez les quatre premiers termes.", answer: "u₀ = 1, u₁ = 2u₀ + 3 = 2×1 + 3 = 5, u₂ = 2u₁ + 3 = 2×5 + 3 = 13, u₃ = 2u₂ + 3 = 2×13 + 3 = 29" }
      ],
      gameType: "quiz"
    },
    {
      id: "suites-particulieres",
      title: "Suites arithmétiques et géométriques",
      definition: "Une suite (uₙ) est arithmétique s'il existe un nombre r tel que uₙ₊₁ = uₙ + r pour tout n. Le nombre r est la raison. Une suite (uₙ) est géométrique s'il existe un nombre q≠0 tel que uₙ₊₁ = q×uₙ pour tout n. Le nombre q est la raison.",
      example: "La suite (uₙ) définie par uₙ = 3n + 4 est arithmétique de raison r = 3. La suite (vₙ) définie par vₙ = 2×5ⁿ est géométrique de raison q = 5.",
      gameQuestions: [
        { question: "Si (uₙ) est une suite arithmétique de premier terme u₀ = 4 et de raison r = 3, quelle est la formule du terme général?", answer: "uₙ = u₀ + n×r = 4 + 3n" },
        { question: "Si (vₙ) est une suite géométrique de premier terme v₀ = 2 et de raison q = 1/2, quelle est la formule du terme général?", answer: "vₙ = v₀×qⁿ = 2×(1/2)ⁿ = 2×2⁻ⁿ = 2¹⁻ⁿ" }
      ],
      exercises: [
        { question: "Déterminez si la suite (uₙ) définie par uₙ = 3×2ⁿ - 5 est arithmétique, géométrique, ou ni l'une ni l'autre.", answer: "Calculons uₙ₊₁ - uₙ = (3×2ⁿ⁺¹ - 5) - (3×2ⁿ - 5) = 3×2ⁿ⁺¹ - 3×2ⁿ = 3×2ⁿ×(2-1) = 3×2ⁿ, qui dépend de n. La suite n'est donc pas arithmétique. Calculons uₙ₊₁/uₙ = (3×2ⁿ⁺¹ - 5)/(3×2ⁿ - 5), qui dépend de n car le terme constant -5 empêche d'obtenir un rapport constant. La suite n'est donc ni arithmétique, ni géométrique." }
      ],
      gameType: "quiz"
    },
    {
      id: "limites-suites",
      title: "Limites et comportement asymptotique",
      definition: "Une suite (uₙ) a pour limite l lorsque n tend vers l'infini si, pour tout ε > 0, il existe un rang N tel que pour tout n > N, on a |uₙ - l| < ε. On écrit alors lim uₙ = l ou uₙ → l quand n → +∞. Une suite qui admet une limite est dite convergente, sinon elle est divergente.",
      example: "La suite (uₙ) définie par uₙ = 1/n tend vers 0 quand n tend vers l'infini. La suite (vₙ) définie par vₙ = n² tend vers +∞.",
      gameQuestions: [
        { question: "Que peut-on dire de la limite d'une suite géométrique (uₙ) de raison q?", answer: "Si |q| < 1, alors lim uₙ = 0. Si |q| > 1, alors la suite diverge. Si q = 1, alors la suite est constante." },
        { question: "Que peut-on dire de la limite d'une suite arithmétique (uₙ) de raison r ≠ 0?", answer: "Si r > 0, alors lim uₙ = +∞. Si r < 0, alors lim uₙ = -∞. Si r = 0, alors la suite est constante." }
      ],
      exercises: [
        { question: "Déterminez la limite de la suite (uₙ) définie par uₙ = (3n²+1)/(2n²+n).", answer: "En divisant numérateur et dénominateur par n² (le terme de plus haut degré), on obtient uₙ = (3+1/n²)/(2+1/n) → 3/2 quand n → +∞." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 