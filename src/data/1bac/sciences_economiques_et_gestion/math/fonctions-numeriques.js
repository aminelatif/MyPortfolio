export default {
  id: "fonctions-numeriques",
  title: "Les fonctions numériques",
  parts: [
    {
      id: "generalites-fonctions",
      title: "Généralités sur les fonctions",
      definition: "Une fonction numérique f associe à chaque élément x d'un ensemble de départ (domaine de définition) un unique élément y = f(x) de l'ensemble d'arrivée. Le domaine de définition d'une fonction est l'ensemble des valeurs de x pour lesquelles f(x) est défini.",
      example: "Pour la fonction f(x) = 1/x, le domaine de définition est ℝ* (l'ensemble des réels non nuls), car la division par zéro n'est pas définie. Pour g(x) = √x, le domaine est [0, +∞[ car on ne peut pas prendre la racine carrée d'un nombre négatif.",
      gameQuestions: [
        { question: "Quel est le domaine de définition de la fonction f(x) = √(1-x²)?", answer: "[-1, 1]" },
        { question: "Vrai ou Faux : Le domaine de définition de f(x) = (x-1)/(x²-4) est ℝ\\{-2, 2}", answer: "Vrai" }
      ],
      exercises: [
        { question: "Déterminer le domaine de définition de la fonction f(x) = ln(x²-x-2).", answer: "On a besoin que x²-x-2 > 0. En résolvant cette inéquation: (x-2)(x+1) > 0, d'où x < -1 ou x > 2. Le domaine de définition est donc ]-∞, -1[ U ]2, +∞[." }
      ],
      gameType: "quiz"
    },
    {
      id: "fonction-croissante-decroissante",
      title: "Fonctions croissantes et décroissantes",
      definition: "Une fonction f est croissante sur un intervalle I si pour tout x₁ < x₂ dans I, on a f(x₁) ≤ f(x₂). Elle est strictement croissante si f(x₁) < f(x₂). De même, f est décroissante si f(x₁) ≥ f(x₂) pour x₁ < x₂, et strictement décroissante si f(x₁) > f(x₂).",
      example: "La fonction f(x) = x² est strictement décroissante sur ]-∞, 0] et strictement croissante sur [0, +∞[. La fonction g(x) = 2x + 3 est strictement croissante sur ℝ.",
      gameQuestions: [
        { question: "Sur quel intervalle la fonction f(x) = -x³ est-elle croissante ?", answer: "]-∞, 0]" },
        { question: "Vrai ou Faux : La fonction f(x) = 1/x est strictement décroissante sur ]0, +∞[", answer: "Vrai" }
      ],
      exercises: [
        { question: "Étudier les variations de la fonction f(x) = x² - 4x + 3.", answer: "On calcule la dérivée: f'(x) = 2x - 4. Cette dérivée s'annule pour x = 2. Elle est négative pour x < 2 et positive pour x > 2. Donc f est décroissante sur ]-∞, 2] et croissante sur [2, +∞[." }
      ],
      gameType: "quiz"
    },
    {
      id: "fonction-paire-impaire",
      title: "Fonctions paires et impaires",
      definition: "Une fonction f est paire si pour tout x du domaine, -x est aussi dans le domaine et f(-x) = f(x). Le graphe d'une fonction paire est symétrique par rapport à l'axe des ordonnées. Une fonction f est impaire si f(-x) = -f(x). Le graphe d'une fonction impaire est symétrique par rapport à l'origine.",
      example: "La fonction f(x) = x² est paire car f(-x) = (-x)² = x² = f(x). La fonction g(x) = x³ est impaire car g(-x) = (-x)³ = -x³ = -g(x).",
      gameQuestions: [
        { question: "La fonction f(x) = x²+1 est-elle paire, impaire ou ni l'une ni l'autre ?", answer: "Paire" },
        { question: "La fonction f(x) = x³-x est-elle paire, impaire ou ni l'une ni l'autre ?", answer: "Impaire" }
      ],
      exercises: [
        { question: "Montrer que la fonction f(x) = x/(1+x²) est impaire.", answer: "Calculons f(-x) = -x/(1+(-x)²) = -x/(1+x²) = -(x/(1+x²)) = -f(x). Comme f(-x) = -f(x), la fonction est impaire." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "fonction-reference",
      title: "Fonctions de référence et leurs graphes",
      definition: "Les fonctions de référence sont des fonctions simples dont les propriétés sont bien connues et servent de base à l'étude d'autres fonctions. Elles incluent les fonctions affines, puissances, racines, exponentielles, logarithmiques et trigonométriques.",
      example: "Fonctions affines: f(x) = ax + b (droite). Fonctions puissance: f(x) = x² (parabole), f(x) = x³ (cubique). Fonctions exponentielles: f(x) = e^x. Fonction logarithme: f(x) = ln(x).",
      gameQuestions: [
        { question: "Quelle est la dérivée de la fonction f(x) = e^x ?", answer: "e^x" },
        { question: "Quelle est la dérivée de la fonction f(x) = ln(x) ?", answer: "1/x" }
      ],
      exercises: [
        { question: "Comparer les croissances des fonctions f(x) = x², g(x) = e^x et h(x) = ln(x) pour x > 0 et très grand.", answer: "Pour x très grand, ln(x) < x² < e^x. La fonction exponentielle croît plus vite que les fonctions puissances, qui croissent plus vite que la fonction logarithme." }
      ],
      gameType: "quiz"
    }
  ]
}; 