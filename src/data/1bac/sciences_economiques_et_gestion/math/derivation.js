export default {
  id: "derivation",
  title: "Dérivation",
  parts: [
    {
      id: "nombre-derive",
      title: "Nombre dérivé et fonction dérivée",
      sections: [
        { title: "Définition", content: "Le nombre dérivé d'une fonction f en un point a est la limite du taux d'accroissement f(a+h)-f(a)/h quand h tend vers 0, noté f'(a). Géométriquement, c'est le coefficient directeur de la tangente à la courbe au point d'abscisse a. La fonction dérivée associe à chaque point x le nombre dérivé f'(x)." },
        { title: "Exemple", content: "Pour f(x) = x², f'(a) = lim[h→0] [(a+h)²-a²]/h = lim[h→0] [a²+2ah+h²-a²]/h = lim[h→0] [2a+h] = 2a. Donc f'(x) = 2x. Pour x = 3, f'(3) = 6, la pente de la tangente à la courbe en x = 3 est 6." },
        { title: "Remarque", content: "La dérivée est un outil fondamental en économie pour analyser les variations marginales, comme le coût marginal ou le revenu marginal, qui sont essentiels pour la prise de décision." }
      ],
      gameQuestions: [
        { question: "Quelle est la dérivée de f(x) = 3x² - 2x + 5 ?", answer: "f'(x) = 6x - 2" },
        { question: "Si f(x) = 1/x, quelle est la dérivée f'(x) ?", answer: "-1/x²" }
      ],
      exercises: [
        { question: "Calculer la dérivée de f(x) = x³ - 3x² + 2x - 1 et déterminer l'équation de la tangente à la courbe au point d'abscisse x = 2.", answer: "f'(x) = 3x² - 6x + 2. En x = 2, f'(2) = 3(2)² - 6(2) + 2 = 12 - 12 + 2 = 2. L'ordonnée au point est f(2) = 2³ - 3(2)² + 2(2) - 1 = 8 - 12 + 4 - 1 = -1. L'équation de la tangente est donc y - (-1) = 2(x - 2), soit y = 2x - 5." }
      ],
      gameType: "quiz"
    },
    {
      id: "formules-derivation",
      title: "Formules et règles de dérivation",
      sections: [
        { title: "Définition", content: "La dérivation suit certaines règles: (u+v)' = u' + v', (λu)' = λu', (uv)' = u'v + uv', (u/v)' = (u'v - uv')/v² (v≠0). Pour les fonctions composées, (f∘g)'(x) = f'(g(x)) × g'(x). Certaines dérivées sont connues: (xⁿ)' = nxⁿ⁻¹, (eˣ)' = eˣ, (ln x)' = 1/x." },
        { title: "Exemple", content: "Pour f(x) = x²⋅ln(x), par la formule du produit: f'(x) = (x²)'⋅ln(x) + x²⋅(ln(x))' = 2x⋅ln(x) + x²⋅(1/x) = 2x⋅ln(x) + x = x(2ln(x) + 1)." },
        { title: "Remarque", content: "Ces règles de dérivation sont essentielles pour calculer les élasticités en économie, qui mesurent la sensibilité d'une variable par rapport à une autre." }
      ],
      gameQuestions: [
        { question: "Dériver f(x) = √x⋅(3x+1)", answer: "f'(x) = 1/(2√x)⋅(3x+1) + √x⋅3 = (3x+1)/(2√x) + 3√x" },
        { question: "Si f(x) = e^(2x+1), quelle est f'(x) ?", answer: "f'(x) = e^(2x+1) × 2 = 2e^(2x+1)" }
      ],
      exercises: [
        { question: "Calculer la dérivée de f(x) = ln(x²+1) / (x-3).", answer: "Par la formule du quotient: f'(x) = [(x²+1)'×ln'(x²+1)×(x-3) - ln(x²+1)×(x-3)'] / (x-3)². On a (x²+1)' = 2x et ln'(x²+1) = 1/(x²+1), donc (ln(x²+1))' = 2x/(x²+1). Aussi, (x-3)' = 1. D'où f'(x) = [2x/(x²+1)×(x-3) - ln(x²+1)] / (x-3)² = [2x(x-3)/(x²+1) - ln(x²+1)] / (x-3)²." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-economie",
      title: "Applications à l'économie",
      sections: [
        { title: "Définition", content: "En économie, les dérivées sont utilisées pour analyser les fonctions de coût, de revenu et de profit. La dérivée du coût total, C'(q), représente le coût marginal, c'est-à-dire le coût de production d'une unité supplémentaire. De même, R'(q) est le revenu marginal et П'(q) le profit marginal." },
        { title: "Exemple", content: "Si C(q) = 2q² + 30q + 100 est la fonction de coût total (en euros) pour produire q unités, alors le coût marginal est C'(q) = 4q + 30 euros par unité. Pour q = 10 unités, le coût marginal est C'(10) = 4(10) + 30 = 70 euros." },
        { title: "Remarque", content: "L'analyse marginale est fondamentale en microéconomie pour déterminer les quantités optimales de production et les prix d'équilibre." }
      ],
      gameQuestions: [
        { question: "Si la fonction de revenu est R(q) = 200q - q², quel est le revenu marginal pour q = 50 ?", answer: "R'(q) = 200 - 2q, donc R'(50) = 200 - 2(50) = 100" },
        { question: "Si C(q) = q³ - 6q² + 12q + 10 est la fonction de coût, quel est le coût marginal ?", answer: "C'(q) = 3q² - 12q + 12" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût C(q) = q³ - 3q² + 4q + 100 et une fonction de revenu R(q) = 60q - q². Calculer la fonction de profit П(q) et déterminer la quantité q₀ qui maximise le profit.", answer: "П(q) = R(q) - C(q) = 60q - q² - (q³ - 3q² + 4q + 100) = -q³ + 2q² + 56q - 100. Pour maximiser le profit, on cherche q tel que П'(q) = 0. П'(q) = -3q² + 4q + 56. En résolvant -3q² + 4q + 56 = 0, on trouve q₀ ≈ 4,72 (à vérifier que c'est bien un maximum)." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "optimisation",
      title: "Problèmes d'optimisation en économie",
      sections: [
        { title: "Définition", content: "L'optimisation consiste à trouver les valeurs qui maximisent ou minimisent une fonction. En économie, on cherche souvent à maximiser le profit ou minimiser les coûts. Pour une fonction dérivable f, les points où f'(x) = 0 sont des candidats à être des extrema (maximum ou minimum). Le signe de f''(x) permet de déterminer la nature de l'extremum." },
        { title: "Exemple", content: "Pour maximiser la fonction de profit П(q) = -2q² + 120q - 100, on résout П'(q) = -4q + 120 = 0, d'où q = 30. Comme П''(q) = -4 < 0, il s'agit bien d'un maximum. Le profit maximal est donc П(30) = -2(30)² + 120(30) - 100 = -1800 + 3600 - 100 = 1700." },
        { title: "Remarque", content: "L'optimisation est cruciale en économie pour la prise de décision, que ce soit pour la gestion de production, la fixation des prix ou l'allocation des ressources." }
      ],
      gameQuestions: [
        { question: "Une entreprise a une fonction de coût C(q) = q² + 20q + 50 et vend son produit au prix unitaire p = 60. Quelle quantité q doit-elle produire pour maximiser son profit ?", answer: "q = 20" },
        { question: "Si la demande pour un produit est donnée par p = 500 - 2q, où p est le prix et q la quantité, et que le coût de production est C(q) = q² + 100, quelle quantité maximise le profit ?", answer: "q = 100" }
      ],
      exercises: [
        { question: "Un fabricant de téléphones portables sait que son coût de production pour q unités est C(q) = q³ - 12q² + 60q + 200. Le prix de vente unitaire est p(q) = 300 - q. Déterminer la quantité q₀ qui maximise le profit et calculer ce profit maximal.", answer: "Le revenu est R(q) = p(q) × q = (300 - q) × q = 300q - q². Le profit est П(q) = R(q) - C(q) = 300q - q² - (q³ - 12q² + 60q + 200) = -q³ + 11q² + 240q - 200. Pour maximiser le profit: П'(q) = -3q² + 22q + 240 = 0. En résolvant cette équation du second degré, on trouve q₀ = 10 (l'autre racine est négative). On vérifie que П''(q₀) < 0, donc c'est bien un maximum. Le profit maximal est П(10) = -10³ + 11(10)² + 240(10) - 200 = -1000 + 1100 + 2400 - 200 = 2300." }
      ],
      gameType: "quiz"
    }
  ]
}; 