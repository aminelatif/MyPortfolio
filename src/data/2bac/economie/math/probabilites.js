export default {
  id: "probabilites",
  title: "Probabilités et applications économiques",
  parts: [
    {
      id: "probabilite-conditionnelle",
      title: "Probabilités conditionnelles",
      definition: "La probabilité conditionnelle de A sachant B, notée P(A|B), est la probabilité que l'événement A se réalise sachant que l'événement B s'est déjà réalisé. Elle est définie par P(A|B) = P(A∩B)/P(B), avec P(B) > 0. Deux événements sont indépendants si et seulement si P(A∩B) = P(A)×P(B), ou de façon équivalente, si P(A|B) = P(A).",
      example: "Dans une entreprise, 60% des employés sont des femmes. Parmi les femmes, 25% occupent des postes de direction, contre 15% pour les hommes. La probabilité qu'un employé soit une femme occupant un poste de direction est P(F∩D) = P(F)×P(D|F) = 0,6 × 0,25 = 0,15 soit 15%.",
      gameQuestions: [
        { question: "Si P(A) = 0,3, P(B) = 0,4 et P(A∩B) = 0,12, quelle est la valeur de P(A|B)?", answer: "0,3" },
        { question: "Dans une économie, la probabilité qu'une entreprise fasse faillite dans l'année est de 0,05. Si on sait que l'entreprise a des dettes importantes, cette probabilité passe à 0,2. Les événements 'faire faillite' et 'avoir des dettes importantes' sont-ils indépendants?", answer: "Non" }
      ],
      exercises: [
        { question: "Dans un portefeuille d'actions, la probabilité qu'une action prenne de la valeur est de 0,7. La probabilité qu'une action qui a pris de la valeur appartienne au secteur technologique est de 0,4, et la probabilité qu'une action appartienne au secteur technologique est de 0,3. Quelle est la probabilité qu'une action du secteur technologique prenne de la valeur?", answer: "Soit T l'événement 'appartenir au secteur technologique' et V l'événement 'prendre de la valeur'. On cherche P(V|T). On sait que P(V) = 0,7, P(T|V) = 0,4 et P(T) = 0,3. Par la formule de Bayes: P(V|T) = P(T|V)×P(V)/P(T) = 0,4×0,7/0,3 = 0,93. La probabilité qu'une action du secteur technologique prenne de la valeur est donc de 93%." }
      ],
      gameType: "quiz"
    },
    {
      id: "variable-aleatoire",
      title: "Variables aléatoires et espérance",
      definition: "Une variable aléatoire X est une fonction qui associe à chaque événement élémentaire une valeur numérique. L'espérance mathématique E(X) mesure la valeur moyenne attendue et est définie par E(X) = ∑x∈X x×P(X=x) pour les variables discrètes. La variance Var(X) = E[(X-E(X))²] = E(X²) - E(X)² mesure la dispersion autour de la moyenne.",
      example: "Un investisseur peut gagner 1000€ avec une probabilité de 0,6, perdre 500€ avec une probabilité de 0,3, ou ni gagner ni perdre avec une probabilité de 0,1. L'espérance de gain est E(X) = 1000×0,6 + (-500)×0,3 + 0×0,1 = 600 - 150 = 450€. La variance est Var(X) = (1000-450)²×0,6 + (-500-450)²×0,3 + (0-450)²×0,1 = 182500 + 270000 + 20250 = 472750€².",
      gameQuestions: [
        { question: "Un projet économique a 40% de chances de générer un profit de 5000€, 35% de chances de générer un profit de 2000€ et 25% de chances de générer une perte de 1000€. Quelle est l'espérance de profit?", answer: "2550€" },
        { question: "Si X et Y sont deux variables aléatoires indépendantes, quelle est la formule de l'espérance de leur somme?", answer: "E(X+Y) = E(X) + E(Y)" }
      ],
      exercises: [
        { question: "Une entreprise lance un nouveau produit. La probabilité que le produit soit un succès est de 0,7. Si c'est un succès, le bénéfice sera de 500 000€. Si c'est un échec, la perte sera de 200 000€. Calculez l'espérance de gain et l'écart-type.", answer: "L'espérance est E(X) = 500 000 × 0,7 + (-200 000) × 0,3 = 350 000 - 60 000 = 290 000€. Pour l'écart-type, calculons d'abord la variance: Var(X) = (500 000 - 290 000)² × 0,7 + (-200 000 - 290 000)² × 0,3 = 31 360 000 000 + 72 030 000 000 = 103 390 000 000€². L'écart-type est σ = √Var(X) = 321 543€." }
      ],
      gameType: "quiz"
    },
    {
      id: "lois-probabilites",
      title: "Lois de probabilité usuelles",
      definition: "Les lois de probabilité usuelles sont des modèles mathématiques qui décrivent la distribution de probabilité d'une variable aléatoire. En économie, on utilise fréquemment: la loi binomiale (n épreuves indépendantes à deux issues), la loi de Poisson (nombre d'occurrences sur un intervalle fixé), et la loi normale (distribution en cloche, symétrique autour de la moyenne).",
      example: "La loi binomiale B(n,p) modélise le nombre de succès dans n épreuves indépendantes avec probabilité p de succès à chaque épreuve. Par exemple, si la probabilité qu'un client achète un produit est p = 0,2, alors la probabilité d'avoir exactement 3 clients qui achètent parmi 10 clients est P(X = 3) = C(10,3) × 0,2³ × 0,8⁷ = 0,201.",
      gameQuestions: [
        { question: "Dans quel cas utilise-t-on la loi de Poisson plutôt que la loi binomiale?", answer: "Quand n est grand et p est petit, avec np constant" },
        { question: "Pour une variable aléatoire X suivant une loi normale N(μ,σ²), quelle est la probabilité que X soit compris entre μ-σ et μ+σ?", answer: "Environ 68%" }
      ],
      exercises: [
        { question: "Une compagnie d'assurance estime que la probabilité qu'un assuré ait un accident dans l'année est de 0,05. Si la compagnie a 1000 assurés, quelle est la probabilité qu'il y ait au moins 60 accidents dans l'année?", answer: "On peut modéliser le nombre d'accidents par une loi binomiale B(1000, 0,05) ou approcher par une loi normale N(np, np(1-p)) = N(50, 47,5). La probabilité cherchée est P(X ≥ 60) = 1 - P(X < 60) = 1 - P(Z < (60-50)/√47,5) = 1 - P(Z < 1,45) ≈ 1 - 0,9265 = 0,0735, soit environ 7,35%." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie et finance",
      definition: "Les probabilités sont largement utilisées en économie et finance pour modéliser l'incertitude et le risque. La théorie de la décision utilise l'espérance d'utilité pour modéliser les choix des agents économiques face à l'incertitude. En finance, le modèle de Black-Scholes pour l'évaluation des options repose sur le mouvement brownien, un processus stochastique.",
      example: "Un investisseur a le choix entre deux actifs: l'actif A rapporte avec certitude 5% de rendement; l'actif B a 70% de chances de rapporter 10% et 30% de chances de rapporter -5%. L'espérance de rendement de B est E(B) = 0,7×10% + 0,3×(-5%) = 7% - 1,5% = 5,5%. Si l'investisseur est neutre au risque, il préfère B car son espérance est plus élevée. S'il est averse au risque, il pourrait préférer A malgré une espérance légèrement inférieure.",
      gameQuestions: [
        { question: "Qu'est-ce que l'aversion au risque en économie?", answer: "La préférence pour un gain certain plutôt qu'un gain aléatoire de même espérance" },
        { question: "Dans le modèle de diversification de portefeuille, pourquoi est-il avantageux de combiner des actifs dont les rendements ne sont pas parfaitement corrélés?", answer: "Cela permet de réduire le risque global du portefeuille" }
      ],
      exercises: [
        { question: "Un entrepreneur doit choisir entre deux projets d'investissement. Le projet A nécessite un investissement de 100 000€ et rapportera 130 000€ avec une probabilité de 0,9 ou 70 000€ avec une probabilité de 0,1. Le projet B nécessite le même investissement et rapportera 180 000€ avec une probabilité de 0,5 ou 40 000€ avec une probabilité de 0,5. Calculez l'espérance et la variance du bénéfice pour chaque projet. Quel projet choisiriez-vous?", answer: "Pour le projet A: E(A) = 0,9×(130 000-100 000) + 0,1×(70 000-100 000) = 0,9×30 000 + 0,1×(-30 000) = 27 000 - 3 000 = 24 000€. Var(A) = 0,9×(30 000-24 000)² + 0,1×(-30 000-24 000)² = 324 000 000€². Pour le projet B: E(B) = 0,5×(180 000-100 000) + 0,5×(40 000-100 000) = 0,5×80 000 + 0,5×(-60 000) = 40 000 - 30 000 = 10 000€. Var(B) = 0,5×(80 000-10 000)² + 0,5×(-60 000-10 000)² = 4 900 000 000€². Le projet A a une espérance plus élevée (24 000€ contre 10 000€) et une variance plus faible, donc il est préférable quel que soit le degré d'aversion au risque." }
      ],
      gameType: "quiz"
    }
  ]
}; 