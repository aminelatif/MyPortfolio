export default {
  id: "suites-numeriques",
  title: "Les suites numériques",
  parts: [
    {
      id: "definition-suites",
      title: "Définition et modes de génération",
      definition: "Une suite numérique est une fonction définie sur ℕ (ou une partie de ℕ) à valeurs dans ℝ. On note généralement (un) une suite, où un est le terme de rang n. Les suites peuvent être définies par une formule explicite un = f(n), par une relation de récurrence un+1 = f(un), ou par un algorithme de construction. En économie, les suites permettent de modéliser l'évolution de grandeurs dans le temps, comme la croissance d'un capital ou l'amortissement d'un investissement.",
      example: "La suite (un) définie par un = 2n + 3 est une suite explicite. Les premiers termes sont u0 = 3, u1 = 5, u2 = 7, etc. En économie, si Cn représente le capital après n années, avec un placement à 5% d'intérêts composés et un capital initial C0 = 1000€, alors Cn+1 = 1,05×Cn, ce qui définit une suite récurrente.",
      gameQuestions: [
        { question: "Si une suite est définie par un = 3n - 1, quel est le terme u5?", answer: "u5 = 3×5 - 1 = 15 - 1 = 14" },
        { question: "Dans un modèle de dépréciation linéaire, la valeur d'un équipement après n années est donnée par Vn = V0 - n×d, où V0 est la valeur initiale et d est la dépréciation annuelle. S'agit-il d'une suite arithmétique ou géométrique?", answer: "Arithmétique" }
      ],
      exercises: [
        { question: "Une entreprise produit 1000 unités la première année et augmente sa production de 10% chaque année. (a) Définissez la suite (Pn) représentant la production à l'année n. (b) Calculez la production pour les années 1, 2 et 3. (c) Quelle sera la production à l'année 10?", answer: "(a) Si P1 = 1000 représente la production de la première année, alors la relation de récurrence est :\nPn+1 = Pn × 1,1 pour n ≥ 1\n\n(b) Calcul des premiers termes :\nP1 = 1000\nP2 = P1 × 1,1 = 1000 × 1,1 = 1100\nP3 = P2 × 1,1 = 1100 × 1,1 = 1210\n\n(c) Cette suite est géométrique de raison q = 1,1. La formule explicite est Pn = P1 × q^(n-1) = 1000 × (1,1)^(n-1)\nDonc P10 = 1000 × (1,1)^9 ≈ 1000 × 2,358 ≈ 2358\nLa production à l'année 10 sera d'environ 2358 unités." }
      ],
      gameType: "quiz"
    },
    {
      id: "suites-arithmetiques",
      title: "Suites arithmétiques",
      definition: "Une suite arithmétique est une suite dont la différence entre deux termes consécutifs est constante. Cette différence, notée r, est appelée la raison de la suite. Si (un) est une suite arithmétique de raison r, alors un+1 = un + r pour tout n, et un = u0 + n×r (formule explicite). En économie, les suites arithmétiques modélisent les évolutions linéaires, comme un salaire augmentant d'un montant fixe chaque année.",
      example: "La suite (un) définie par un = 100 + 20n est une suite arithmétique de raison r = 20 et de premier terme u0 = 100. Les premiers termes sont u0 = 100, u1 = 120, u2 = 140, etc. Dans un contexte économique, cette suite pourrait représenter un salaire initial de 100€ augmentant de 20€ chaque mois.",
      gameQuestions: [
        { question: "Quelle est la raison de la suite arithmétique (un) définie par un = 5n - 3?", answer: "r = 5" },
        { question: "Si le loyer d'un local commercial est de 1200€ la première année et augmente de 50€ chaque année, quel sera le loyer la 8ème année?", answer: "1550€" }
      ],
      exercises: [
        { question: "Une entreprise prévoit d'augmenter sa productivité de 5 unités par jour. Le premier jour, elle produit 100 unités. (a) Exprimez la production Pn au jour n. (b) Calculez la somme totale des unités produites du jour 1 au jour 30. (c) Après combien de jours la production quotidienne dépassera-t-elle 250 unités?", answer: "(a) La production au jour n est donnée par la suite arithmétique :\nPn = P1 + (n-1)r = 100 + (n-1)×5 = 100 + 5n - 5 = 95 + 5n\n\n(b) La somme des termes d'une suite arithmétique est donnée par :\nS = n(a1 + an)/2 où a1 est le premier terme et an le dernier terme.\nP30 = 95 + 5×30 = 95 + 150 = 245\nS = 30(100 + 245)/2 = 30×345/2 = 5175 unités\n\n(c) On cherche n tel que Pn > 250 :\n95 + 5n > 250\n5n > 155\nn > 31\nLa production quotidienne dépassera 250 unités à partir du 32ème jour." }
      ],
      gameType: "quiz"
    },
    {
      id: "suites-geometriques",
      title: "Suites géométriques et applications financières",
      definition: "Une suite géométrique est une suite dont le quotient entre deux termes consécutifs est constant. Ce quotient, noté q, est appelé la raison de la suite. Si (un) est une suite géométrique de raison q, alors un+1 = q×un pour tout n, et un = u0×q^n (formule explicite). Les suites géométriques sont omniprésentes en économie et finance pour modéliser la croissance ou la décroissance exponentielle, comme les intérêts composés.",
      example: "La suite (un) définie par un = 1000×(1,05)^n est une suite géométrique de raison q = 1,05 et de premier terme u0 = 1000. Les premiers termes sont u0 = 1000, u1 = 1050, u2 = 1102,5, etc. Cette suite pourrait représenter l'évolution d'un capital de 1000€ placé à un taux d'intérêt annuel de 5% avec capitalisation des intérêts.",
      gameQuestions: [
        { question: "Quelle est la raison de la suite géométrique (un) définie par un = 2000×(0,9)^n?", answer: "q = 0,9" },
        { question: "Un capital de 5000€ est placé à un taux annuel de 3%. Quelle sera sa valeur après 10 ans?", answer: "6719,58€" }
      ],
      exercises: [
        { question: "Un équipement industriel coûte 50 000€ à l'achat et se déprécie de 15% chaque année. (a) Exprimez la valeur Vn de l'équipement après n années. (b) Quelle sera sa valeur après 8 ans? (c) Après combien d'années sa valeur sera-t-elle inférieure à 10 000€?", answer: "(a) La valeur après n années est donnée par la suite géométrique :\nVn = V0 × q^n = 50 000 × (0,85)^n\n\n(b) Après 8 ans :\nV8 = 50 000 × (0,85)^8 ≈ 50 000 × 0,272 ≈ 13 607€\n\n(c) On cherche n tel que Vn < 10 000 :\n50 000 × (0,85)^n < 10 000\n(0,85)^n < 0,2\nPrenons le logarithme naturel des deux côtés :\nn × ln(0,85) < ln(0,2)\nn > ln(0,2)/ln(0,85) ≈ (-1,61)/(-0,16) ≈ 10,06\nLa valeur sera inférieure à 10 000€ après 11 ans." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "calcul-sommes-applications",
      title: "Calcul de sommes et applications économiques",
      definition: "La somme des n+1 premiers termes d'une suite arithmétique (un) est Sn = (n+1)×(u0 + un)/2. Pour une suite géométrique (un) de raison q ≠ 1, la somme est Sn = u0×(1-q^(n+1))/(1-q). Ces formules permettent de calculer des totaux cumulés, essentiels en finance pour l'évaluation d'investissements ou l'amortissement de dettes.",
      example: "Pour une suite arithmétique (un) définie par un = 3n + 2, la somme des 5 premiers termes est S4 = 5×(u0 + u4)/2 = 5×(2 + 14)/2 = 5×8 = 40. Pour un emprunt remboursé par mensualités constantes, la formule de la somme géométrique permet de calculer la relation entre capital emprunté, taux d'intérêt et montant des mensualités.",
      gameQuestions: [
        { question: "Quelle est la somme des 10 premiers termes de la suite arithmétique (un) définie par un = 3n + 1?", answer: "170" },
        { question: "Une entreprise investit 1000€ par mois pendant 5 ans dans un fonds rapportant 6% par an. Quel sera le montant total accumulé (en supposant que les intérêts sont calculés mensuellement)?", answer: "Environ 69 814€" }
      ],
      exercises: [
        { question: "Un fabricant lance un nouveau produit et prévoit que les ventes mensuelles suivront une progression géométrique. Il estime vendre 100 unités le premier mois, puis les ventes augmenteront de 20% chaque mois pendant la première année. (a) Calculez les ventes cumulées sur les 12 premiers mois. (b) Si le profit par unité est de 25€, quel sera le profit total sur cette période?", answer: "(a) Les ventes du mois n sont données par Vn = V1 × q^(n-1) = 100 × (1,2)^(n-1)\nLa somme des ventes sur 12 mois est :\nS = V1 × (1-q^12)/(1-q) = 100 × (1-(1,2)^12)/(1-1,2) = 100 × (1-8,916)/(-0,2) = 100 × (-7,916)/(-0,2) ≈ 3958 unités\n\n(b) Le profit total est :\nProfit = 25€ × 3958 = 98 950€" }
      ],
      gameType: "quiz"
    }
  ]
}; 