export default {
  id: "derivation",
  title: "La dérivation",
  parts: [
    {
      id: "definition-derivee",
      title: "Définition de la dérivée",
      definition: "La dérivée d'une fonction f en un point a, notée f'(a), est la limite du taux de variation de f autour de a : f'(a) = lim(h→0) [f(a+h) - f(a)]/h. Géométriquement, c'est la pente de la tangente à la courbe de f au point d'abscisse a.",
      example: "Pour f(x) = x², f'(x) = lim(h→0) [(x+h)² - x²]/h = lim(h→0) [x² + 2xh + h² - x²]/h = lim(h→0) [2x + h] = 2x",
      gameQuestions: [
        { question: "Quelle est l'interprétation géométrique de la dérivée d'une fonction en un point ?", answer: "La pente de la tangente à la courbe en ce point" }
      ],
      exercises: [
        { question: "Calculez la dérivée de f(x) = x³ - 2x en utilisant la définition.", answer: "f'(x) = 3x² - 2" }
      ],
      gameType: "quiz"
    },
    {
      id: "regles-derivation",
      title: "Règles de dérivation",
      definition: "Pour dériver efficacement, on utilise des règles : (u+v)' = u' + v', (λu)' = λu', (uv)' = u'v + uv', (u/v)' = (u'v - uv')/v², (f∘g)' = (f'∘g) × g'.",
      example: "Pour f(x) = x².sin(x), f'(x) = 2x.sin(x) + x².cos(x)",
      gameQuestions: [
        { question: "Quelle est la dérivée de f(x) = e^x ?", answer: "f'(x) = e^x" }
      ],
      exercises: [
        { question: "Calculez la dérivée de f(x) = (x² + 1)/(x - 3)", answer: "f'(x) = [(2x)(x-3) - (x²+1)]/[(x-3)²] = [2x²-6x-(x²+1)]/[(x-3)²] = [x²-6x-1]/[(x-3)²]" }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-derivation",
      title: "Applications de la dérivation",
      definition: "La dérivation est utilisée pour : étudier les variations d'une fonction, déterminer les extrema, résoudre des problèmes d'optimisation, calculer des approximations linéaires.",
      example: "Pour trouver le maximum de f(x) = -x² + 4x + 2, on résout f'(x) = -2x + 4 = 0, d'où x = 2 est un maximum car f''(2) = -2 < 0.",
      gameQuestions: [
        { question: "Comment utilise-t-on la dérivée pour déterminer les intervalles où une fonction est croissante ?", answer: "La fonction est croissante sur les intervalles où sa dérivée est positive" }
      ],
      exercises: [
        { question: "Déterminez les extrema de la fonction f(x) = x³ - 3x² + 1 et précisez leur nature.", answer: "f'(x) = 3x² - 6x = 3x(x-2). Points critiques en x = 0 et x = 2. f''(0) = -6 < 0 donc maximum local. f''(2) = 6 > 0 donc minimum local." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 