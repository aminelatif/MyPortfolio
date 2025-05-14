export default {
  id: "limites-fonctions",
  title: "Limites d'une fonction numérique",
  parts: [
    {
      id: "definition-notion",
      title: "Définition et notion intuitive",
      definition: "La limite d'une fonction f en un point a, notée lim[x→a] f(x) = L, signifie que f(x) peut être rendue aussi proche que l'on veut de L en prenant x suffisamment proche de a. On étudie aussi les limites infinies (lim[x→a] f(x) = ±∞) et les limites en l'infini (lim[x→±∞] f(x) = L ou ±∞). En économie, les limites permettent d'analyser le comportement asymptotique des fonctions de coût, de production ou d'utilité.",
      example: "Pour f(x) = x², on a lim[x→3] f(x) = 3² = 9. Pour g(x) = 1/x, lim[x→0⁺] g(x) = +∞ (limite par la droite) et lim[x→+∞] g(x) = 0. En économie, si C(q) représente le coût total de production de q unités, alors lim[q→+∞] C(q)/q représente le coût marginal à long terme.",
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = 2x + 1 quand x tend vers 4?", answer: "lim[x→4] (2x + 1) = 2×4 + 1 = 9" },
        { question: "Que signifie économiquement lim[q→+∞] C(q)/q, où C(q) est le coût total de production?", answer: "Le coût moyen à long terme ou le coût marginal à long terme" }
      ],
      exercises: [
        { question: "Considérons une fonction de demande D(p) = 1000/(p+5), où p est le prix unitaire. (a) Calculez la limite de D(p) quand p tend vers +∞. (b) Calculez la limite de D(p) quand p tend vers 0. (c) Interprétez économiquement ces résultats.", answer: "(a) lim[p→+∞] D(p) = lim[p→+∞] 1000/(p+5) = 0. Quand le prix devient très élevé, la demande tend vers zéro.\n\n(b) lim[p→0] D(p) = lim[p→0] 1000/(p+5) = 1000/5 = 200. Quand le prix est nul, la demande est de 200 unités.\n\n(c) Interprétation économique : Quand le prix augmente indéfiniment, la demande devient négligeable (loi de la demande). Quand le prix est gratuit (p = 0), la demande atteint un maximum de 200 unités, ce qui représente une contrainte de saturation du marché (même gratuit, le produit n'est demandé qu'en quantité limitée)." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-limites",
      title: "Opérations sur les limites",
      definition: "Si lim[x→a] f(x) = L et lim[x→a] g(x) = M (limites finies), alors : lim[x→a] [f(x) + g(x)] = L + M, lim[x→a] [f(x) × g(x)] = L × M, lim[x→a] [f(x)/g(x)] = L/M (si M ≠ 0). Ces règles s'appliquent aussi aux limites à l'infini. Des règles spéciales existent pour les formes indéterminées (∞-∞, 0×∞, 0/0, ∞/∞, etc.).",
      example: "Pour f(x) = (x²-1)/(x-1), on a une forme indéterminée 0/0 en x = 1. En factorisant : f(x) = ((x-1)(x+1))/(x-1) = x+1 pour x ≠ 1, donc lim[x→1] f(x) = 1+1 = 2. En économie, le calcul de l'élasticité-prix de la demande fait intervenir des quotients de variations infinitésimales.",
      gameQuestions: [
        { question: "Calculez lim[x→2] (x³-8)/(x-2)", answer: "C'est une forme indéterminée 0/0. En factorisant x³-8 = (x-2)(x²+2x+4), on obtient lim[x→2] (x³-8)/(x-2) = lim[x→2] (x²+2x+4) = 2²+2×2+4 = 4+4+4 = 12" },
        { question: "Si lim[x→+∞] f(x)/x = 3 et lim[x→+∞] g(x)/x = 5, quelle est la limite de (f(x)+g(x))/x quand x tend vers +∞?", answer: "lim[x→+∞] (f(x)+g(x))/x = lim[x→+∞] f(x)/x + lim[x→+∞] g(x)/x = 3 + 5 = 8" }
      ],
      exercises: [
        { question: "La fonction de coût total d'une entreprise est C(q) = 50q/(q+10) + 20, où q est la quantité produite. (a) Calculez la limite du coût moyen C(q)/q quand q tend vers +∞. (b) Calculez la limite du coût marginal C'(q) quand q tend vers +∞. (c) Comparez ces deux limites et interprétez économiquement.", answer: "(a) lim[q→+∞] C(q)/q = lim[q→+∞] [50q/(q+10) + 20]/q = lim[q→+∞] [50/(q+10) + 20/q]\nQuand q tend vers +∞, 50/(q+10) tend vers 0 et 20/q tend vers 0.\nDonc lim[q→+∞] C(q)/q = 50 + 0 = 50.\n\n(b) C'(q) = 50(q+10-q)/(q+10)² = 500/(q+10)²\nlim[q→+∞] C'(q) = lim[q→+∞] 500/(q+10)² = 0\n\n(c) Le coût moyen à long terme tend vers 50, tandis que le coût marginal tend vers 0. Cela suggère des rendements d'échelle croissants à l'infini : produire une unité supplémentaire coûte de moins en moins cher à mesure que la production augmente, mais le coût moyen se stabilise à 50 unités monétaires par unité produite." }
      ],
      gameType: "quiz"
    },
    {
      id: "limites-usuelles",
      title: "Limites des fonctions usuelles",
      definition: "Certaines limites sont fondamentales : lim[x→±∞] (1/x) = 0, lim[x→0] (sin x)/x = 1, et lim[x→+∞] (1+1/x)^x = e. Pour les polynômes, la limite à l'infini est déterminée par le terme de plus haut degré. Pour les fractions rationnelles, la limite à l'infini dépend du rapport des degrés des polynômes au numérateur et au dénominateur.",
      example: "Pour P(x) = 3x³ - 2x² + 5, lim[x→+∞] P(x) = +∞ car le terme dominant est 3x³. Pour f(x) = (2x² + 3x - 1)/(5x² - 2), lim[x→+∞] f(x) = 2/5 car les numérateur et dénominateur sont dominés par leurs termes de plus haut degré. En économie, les fonctions logarithmiques modélisent souvent la croissance de grandeurs qui ralentissent progressivement, comme l'utilité marginale décroissante.",
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = (3x³ - 2x + 1)/(x³ + 5x) quand x tend vers +∞?", answer: "lim[x→+∞] f(x) = lim[x→+∞] (3x³)/(x³) = 3" },
        { question: "Quelle est la limite de g(x) = x/(1+e^x) quand x tend vers +∞?", answer: "lim[x→+∞] g(x) = 0, car e^x croît plus vite que x" }
      ],
      exercises: [
        { question: "Un économiste modélise l'utilité d'un consommateur face à la richesse par la fonction U(w) = 1 - e^(-αw), où w représente la richesse et α > 0 est un paramètre d'aversion au risque. (a) Calculez lim[w→+∞] U(w). (b) Calculez lim[w→+∞] U'(w). (c) Interprétez ces résultats en termes d'utilité marginale décroissante.", answer: "(a) lim[w→+∞] U(w) = lim[w→+∞] (1 - e^(-αw)) = 1 - 0 = 1\nL'utilité tend vers 1 quand la richesse tend vers l'infini, ce qui indique un niveau de satisfaction maximal que le consommateur peut atteindre.\n\n(b) U'(w) = αe^(-αw)\nlim[w→+∞] U'(w) = lim[w→+∞] αe^(-αw) = α×0 = 0\n\n(c) L'utilité marginale (U'(w)) tend vers 0 lorsque la richesse augmente indéfiniment. Cela illustre le principe d'utilité marginale décroissante : chaque unité supplémentaire de richesse apporte de moins en moins de satisfaction additionnelle à mesure que la richesse totale augmente. L'utilité totale plafonne à 1, et l'utilité marginale devient négligeable pour les grandes richesses." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      definition: "Les limites sont essentielles en économie pour analyser les comportements asymptotiques des fonctions économiques : coûts à long terme, rendements d'échelle, élasticités, équilibre des marchés, et optimisation. Elles permettent de déterminer les tendances de fond au-delà des fluctuations à court terme et d'étudier les propriétés des modèles économiques dans des cas extrêmes.",
      example: "Dans un marché en concurrence parfaite, à long terme, le prix tend vers le coût marginal : lim[t→+∞] P(t) = lim[t→+∞] CM(t). Pour une fonction de production Cobb-Douglas f(K,L) = K^α·L^(1-α) avec 0 < α < 1, les rendements d'échelle sont constants : lim[λ→+∞] f(λK,λL)/λ = f(K,L), ce qui signifie qu'un doublement des facteurs de production double exactement la production.",
      gameQuestions: [
        { question: "Dans un monopole, si la demande inverse est P(q) = a - bq et le coût marginal est CM(q) = c + dq, quelle est la quantité qui maximise le profit?", answer: "q* = (a-c)/(2b+d)" },
        { question: "Pourquoi l'étude des limites est-elle importante dans l'analyse des rendements d'échelle?", answer: "Les limites permettent d'évaluer comment évolue la production quand tous les facteurs augmentent dans les mêmes proportions, ce qui définit les rendements d'échelle" }
      ],
      exercises: [
        { question: "Un monopole fait face à une fonction de demande inverse P(q) = 100 - 2q et a une fonction de coût total C(q) = 20q + q²/10. (a) Exprimez la fonction de profit Π(q). (b) Déterminez la quantité q* qui maximise le profit. (c) Calculez limites de P(q) et C'(q) quand q tend vers +∞ et interprétez économiquement.", answer: "(a) La fonction de profit est :\nΠ(q) = q·P(q) - C(q)\nΠ(q) = q(100 - 2q) - (20q + q²/10)\nΠ(q) = 100q - 2q² - 20q - q²/10\nΠ(q) = 80q - 2q² - q²/10 = 80q - 21q²/10\n\n(b) Pour maximiser le profit, on dérive et on égalise à zéro :\nΠ'(q) = 80 - 42q/10 = 0\n80 = 42q/10\n800 = 42q\nq* = 800/42 ≈ 19,05 unités\n\n(c) lim[q→+∞] P(q) = lim[q→+∞] (100 - 2q) = -∞\nLorsque la quantité devient très grande, le prix devient négatif, ce qui n'a pas de sens économique. En pratique, il existe une quantité maximale qmax = 50 au-delà de laquelle la demande est nulle.\n\nlim[q→+∞] C'(q) = lim[q→+∞] (20 + q/5) = +∞\nLe coût marginal augmente indéfiniment avec la quantité produite, reflétant des rendements d'échelle décroissants à l'infini." }
      ],
      gameType: "quiz"
    }
  ]
}; 