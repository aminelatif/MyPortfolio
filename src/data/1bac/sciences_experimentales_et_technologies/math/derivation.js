export default {
  id: "derivation",
  title: "Dérivation",
  parts: [
    {
      id: "notion-derivee",
      title: "Notion de dérivée",
      definition: "La dérivée d'une fonction f au point x₀, notée f'(x₀), est définie comme la limite du taux de variation de f entre x₀ et x₀+h lorsque h tend vers 0. Mathématiquement : f'(x₀) = lim[h→0] (f(x₀+h) - f(x₀))/h. Géométriquement, la dérivée représente la pente de la tangente à la courbe de f au point (x₀, f(x₀)).",
      example: "Pour la fonction f(x) = x², on a f'(x) = lim[h→0] ((x+h)² - x²)/h = lim[h→0] (x² + 2xh + h² - x²)/h = lim[h→0] (2xh + h²)/h = lim[h→0] (2x + h) = 2x. Donc f'(x) = 2x. En particulier, au point x₀ = 3, la dérivée vaut f'(3) = 2×3 = 6.",
      gameQuestions: [
        { question: "Quelle est l'interprétation géométrique de la dérivée d'une fonction en un point?", answer: "La pente de la tangente à la courbe en ce point" },
        { question: "Si f(x) = x³, calculez f'(2).", answer: "12" }
      ],
      exercises: [
        { question: "Calculez la dérivée de la fonction f(x) = 3x² - 2x + 1 et déterminez la pente de la tangente à la courbe de f au point d'abscisse x₀ = 2.", answer: "La dérivée de f(x) = 3x² - 2x + 1 est f'(x) = 6x - 2. Au point x₀ = 2, on a f'(2) = 6×2 - 2 = 12 - 2 = 10. La pente de la tangente à la courbe au point d'abscisse x₀ = 2 est donc égale à 10." }
      ],
      gameType: "quiz"
    },
    {
      id: "regles-calcul",
      title: "Règles de calcul des dérivées",
      definition: "Pour calculer efficacement les dérivées, on utilise des règles : (1) Dérivée d'une constante : (k)' = 0. (2) Dérivée de l'identité : (x)' = 1. (3) Linéarité : (αf + βg)' = αf' + βg'. (4) Dérivée d'un produit : (fg)' = f'g + fg'. (5) Dérivée d'un quotient : (f/g)' = (f'g - fg')/g². (6) Dérivée de la composée : (f∘g)' = (f'∘g) × g'.",
      example: "Calculons la dérivée de h(x) = (2x+1)(x²-3). En utilisant la règle du produit : h'(x) = (2x+1)'(x²-3) + (2x+1)(x²-3)' = 2(x²-3) + (2x+1)(2x) = 2x²-6 + 4x²+2x = 6x²+2x-6.",
      gameQuestions: [
        { question: "Quelle est la dérivée de f(x) = (3x+2)(x-1)?", answer: "f'(x) = (3x+2)(1) + (3)(x-1) = 3x+2 + 3x-3 = 6x-1" },
        { question: "Quelle est la formule de la dérivée du quotient de deux fonctions f(x)/g(x)?", answer: "(f'g - fg')/g²" }
      ],
      exercises: [
        { question: "Calculez la dérivée de la fonction f(x) = (x² + 1)/(x - 2).", answer: "Utilisons la règle du quotient : f'(x) = ((x² + 1)'(x - 2) - (x² + 1)(x - 2)')/(x - 2)² = (2x(x - 2) - (x² + 1))/(x - 2)² = (2x² - 4x - x² - 1)/(x - 2)² = (x² - 4x - 1)/(x - 2)²." }
      ],
      gameType: "quiz"
    },
    {
      id: "derivees-usuelles",
      title: "Dérivées des fonctions usuelles",
      definition: "Voici les dérivées des fonctions usuelles : (1) (xⁿ)' = nxⁿ⁻¹. (2) (sin x)' = cos x. (3) (cos x)' = -sin x. (4) (eˣ)' = eˣ. (5) (ln x)' = 1/x, pour x > 0. Ces formules permettent de calculer rapidement les dérivées de nombreuses fonctions.",
      example: "Pour f(x) = x³.sin(x), appliquons la règle du produit : f'(x) = (x³)'sin(x) + x³(sin(x))' = 3x²sin(x) + x³cos(x).",
      gameQuestions: [
        { question: "Quelle est la dérivée de f(x) = x⁴?", answer: "f'(x) = 4x³" },
        { question: "Quelle est la dérivée de g(x) = e^(2x)?", answer: "g'(x) = 2e^(2x)" }
      ],
      exercises: [
        { question: "Calculez la dérivée de la fonction f(x) = x²ln(x) pour x > 0.", answer: "Utilisons la règle du produit : f'(x) = (x²)'ln(x) + x²(ln(x))' = 2xln(x) + x²(1/x) = 2xln(x) + x = x(2ln(x) + 1)." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-derivees",
      title: "Applications des dérivées",
      definition: "Les dérivées ont de nombreuses applications : (1) Étude des variations d'une fonction : si f'(x) > 0 sur un intervalle, f est strictement croissante; si f'(x) < 0, f est strictement décroissante. (2) Recherche des extrema : les extrema locaux se trouvent parmi les points où f'(x) = 0 ou f'(x) n'existe pas. (3) Étude de la concavité via la dérivée seconde f''(x). (4) Approximation linéaire d'une fonction près d'un point.",
      example: "Étudions les variations de f(x) = x³ - 3x² + 2. On a f'(x) = 3x² - 6x = 3x(x - 2). Donc f'(x) = 0 pour x = 0 et x = 2. De plus, f'(x) > 0 pour x < 0 et x > 2, et f'(x) < 0 pour 0 < x < 2. Ainsi, f est croissante sur ]-∞, 0] et [2, +∞[, et décroissante sur [0, 2]. La fonction f admet un maximum local en x = 0 et un minimum local en x = 2.",
      gameQuestions: [
        { question: "Si f'(x) < 0 sur un intervalle I, que peut-on dire de f sur cet intervalle?", answer: "f est strictement décroissante sur I" },
        { question: "Quelle condition nécessaire doivent vérifier les abscisses des extrema locaux d'une fonction dérivable?", answer: "f'(x) = 0" }
      ],
      exercises: [
        { question: "Déterminez les intervalles de croissance et de décroissance de la fonction f(x) = x³ - 6x² + 9x + 1, puis les extrema locaux de f.", answer: "On a f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3). Donc f'(x) = 0 pour x = 1 et x = 3. De plus, f'(x) > 0 pour x < 1 ou x > 3, et f'(x) < 0 pour 1 < x < 3. Ainsi, f est croissante sur ]-∞, 1] et [3, +∞[, et décroissante sur [1, 3]. La fonction f admet un maximum local en x = 1, qui vaut f(1) = 1 - 6 + 9 + 1 = 5, et un minimum local en x = 3, qui vaut f(3) = 27 - 54 + 27 + 1 = 1." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-physique",
      title: "Applications en physique",
      definition: "La dérivation est fondamentale en physique : (1) La vitesse est la dérivée de la position par rapport au temps: v(t) = s'(t). (2) L'accélération est la dérivée de la vitesse: a(t) = v'(t) = s''(t). (3) Le débit est la dérivée du volume par rapport au temps. (4) La puissance est la dérivée de l'énergie par rapport au temps.",
      example: "Un objet en chute libre a une position s(t) = -4.9t² + v₀t + s₀, où v₀ est la vitesse initiale et s₀ la position initiale. Sa vitesse est v(t) = s'(t) = -9.8t + v₀, et son accélération est a(t) = v'(t) = -9.8 m/s², qui est l'accélération due à la gravité.",
      gameQuestions: [
        { question: "Si la position d'un objet est donnée par s(t) = 3t² - 2t + 1, quelle est sa vitesse à t = 2?", answer: "v(2) = s'(2) = 6t - 2|_{t=2} = 12 - 2 = 10" },
        { question: "Quelle est la relation entre l'accélération et la position d'un objet?", answer: "L'accélération est la dérivée seconde de la position: a(t) = s''(t)" }
      ],
      exercises: [
        { question: "Un objet se déplace selon la loi de position s(t) = t³ - 6t² + 9t (en mètres, t en secondes). Déterminez sa vitesse et son accélération à t = 2s. À quels instants la vitesse de l'objet est-elle nulle?", answer: "La vitesse est v(t) = s'(t) = 3t² - 12t + 9. À t = 2s, v(2) = 3×4 - 12×2 + 9 = 12 - 24 + 9 = -3 m/s. L'accélération est a(t) = v'(t) = 6t - 12. À t = 2s, a(2) = 6×2 - 12 = 12 - 12 = 0 m/s². La vitesse est nulle lorsque v(t) = 0, soit 3t² - 12t + 9 = 0. Le discriminant est Δ = (-12)² - 4×3×9 = 144 - 108 = 36 > 0. Les solutions sont t = (12 ± √36)/(2×3) = (12 ± 6)/6 = 2 ± 1. Donc la vitesse est nulle aux instants t = 1s et t = 3s." }
      ],
      gameType: "quiz"
    }
  ]
}; 