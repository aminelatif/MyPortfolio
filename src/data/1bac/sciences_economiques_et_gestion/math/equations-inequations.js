export default {
  id: "equations-inequations",
  title: "Équations, inéquations et systèmes",
  parts: [
    {
      id: "equations-premier-degre",
      title: "Équations du premier degré",
      definition: "Une équation du premier degré à une inconnue est de la forme ax + b = 0, où a et b sont des nombres réels et a ≠ 0. La solution est x = -b/a. Ces équations représentent des relations linéaires entre variables économiques, comme le prix et la quantité demandée.",
      example: "Résolution de l'équation 3x - 6 = 0 : On isole x en ajoutant 6 aux deux membres, puis en divisant par 3. On obtient 3x = 6, donc x = 2. En économie, cela pourrait représenter le prix d'équilibre pour un produit donné.",
      gameQuestions: [
        { question: "Quelle est la solution de l'équation 5x - 15 = 0?", answer: "x = 3" },
        { question: "Dans une équation de demande p = 20 - 2q, à quel prix la quantité demandée est-elle nulle?", answer: "p = 20" }
      ],
      exercises: [
        { question: "Une entreprise produit des biens avec une fonction de coût C(q) = 50 + 10q, et vend ses produits à un prix unitaire de 30€. Déterminez la quantité que l'entreprise doit produire pour atteindre le seuil de rentabilité (c'est-à-dire quand le revenu égale le coût).", answer: "Le revenu est donné par R(q) = 30q.\nLe seuil de rentabilité est atteint lorsque R(q) = C(q), donc:\n30q = 50 + 10q\n20q = 50\nq = 2.5\nL'entreprise doit donc produire et vendre 2.5 unités pour atteindre son seuil de rentabilité." }
      ],
      gameType: "quiz"
    },
    {
      id: "equations-second-degre",
      title: "Équations du second degré",
      definition: "Une équation du second degré est de la forme ax² + bx + c = 0, où a, b et c sont des nombres réels et a ≠ 0. La résolution passe par le discriminant Δ = b² - 4ac. Si Δ > 0, il y a deux solutions réelles; si Δ = 0, il y a une solution double; si Δ < 0, il n'y a pas de solution réelle.",
      example: "Pour résoudre x² - 5x + 6 = 0, on calcule Δ = (-5)² - 4×1×6 = 25 - 24 = 1 > 0. Il y a donc deux solutions: x₁ = (5+1)/2 = 3 et x₂ = (5-1)/2 = 2. Cette équation peut modéliser un problème d'optimisation économique.",
      gameQuestions: [
        { question: "Quelles sont les solutions de l'équation x² - x - 6 = 0?", answer: "x = 3 et x = -2" },
        { question: "Si le profit d'une entreprise est donné par P(x) = -2x² + 20x - 18, quelle quantité x maximise le profit?", answer: "x = 5" }
      ],
      exercises: [
        { question: "Un fabricant vend ses produits au prix unitaire de p = 100 - 2q euros, où q est la quantité vendue en centaines d'unités. Le coût total de production est C(q) = 20q + 500. Déterminez la quantité q qui maximise le profit.", answer: "Le revenu est R(q) = p×q = (100-2q)×q = 100q - 2q².\nLe profit est P(q) = R(q) - C(q) = 100q - 2q² - 20q - 500 = -2q² + 80q - 500.\nLe profit est maximal lorsque P'(q) = 0, soit -4q + 80 = 0, ce qui donne q = 20.\nLa quantité qui maximise le profit est donc 20 centaines d'unités, soit 2000 unités." }
      ],
      gameType: "quiz"
    },
    {
      id: "inequations",
      title: "Inéquations et ensembles de solutions",
      definition: "Une inéquation est une relation d'ordre entre deux expressions. Les inéquations se résolvent en isolant l'inconnue tout en préservant le sens de l'inégalité (attention au changement de sens lorsqu'on multiplie par un nombre négatif). En économie, elles définissent souvent des contraintes de production, de budget ou de ressources.",
      example: "Pour résoudre 2x - 3 ≤ 5, on additionne 3 aux deux membres : 2x ≤ 8, puis on divise par 2 : x ≤ 4. L'ensemble des solutions est l'intervalle ]-∞, 4]. Dans un contexte économique, cela pourrait représenter la quantité maximale qu'une entreprise peut produire compte tenu de ses contraintes.",
      gameQuestions: [
        { question: "Quelle est la solution de l'inéquation 3x + 2 > 11?", answer: "x > 3" },
        { question: "Si le coût de production C(x) doit rester inférieur à 1000€ et C(x) = 50x + 200, quelle est la production maximale possible?", answer: "x < 16" }
      ],
      exercises: [
        { question: "Un investisseur dispose d'un capital de 10 000€ à répartir entre deux placements A et B. Le placement A offre un rendement de 5% et le placement B un rendement de 8%, mais comporte plus de risques. Il souhaite investir au moins 2 000€ dans A pour diversifier son portefeuille, et au moins autant dans B que dans A pour maximiser son rendement. Formulez les contraintes sous forme d'inéquations et déterminez le rendement maximal possible.", answer: "Soit x le montant investi dans A et y le montant investi dans B.\nLes contraintes sont :\nx + y ≤ 10 000 (contrainte budgétaire)\nx ≥ 2 000 (montant minimum dans A)\ny ≥ x (au moins autant dans B que dans A)\nx ≥ 0, y ≥ 0 (montants positifs)\n\nLe rendement est R = 0.05x + 0.08y, qu'on cherche à maximiser.\nPour maximiser R, il faut maximiser y tout en respectant les contraintes.\nComme y ≥ x et x + y ≤ 10 000, la solution optimale est x = 5 000 et y = 5 000.\nLe rendement maximal est donc R = 0.05×5 000 + 0.08×5 000 = 250 + 400 = 650€, soit 6.5% du capital total." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "systemes-equations",
      title: "Systèmes d'équations et applications",
      definition: "Un système d'équations est un ensemble d'équations à plusieurs inconnues qui doivent être satisfaites simultanément. Les méthodes de résolution incluent la substitution, l'élimination et la méthode de Cramer. En économie, les systèmes modélisent souvent l'équilibre de plusieurs marchés ou variables interdépendantes.",
      example: "Considérons le système {\nx + 2y = 5\n3x - y = 1\n. Par substitution, on exprime x de la première équation : x = 5 - 2y, puis on remplace dans la seconde : 3(5 - 2y) - y = 1, soit 15 - 6y - y = 1, donc -7y = -14, et y = 2. En substituant, on trouve x = 5 - 2×2 = 1. La solution est donc (1, 2).",
      gameQuestions: [
        { question: "Quelle est la solution du système d'équations { x + y = 5, x - y = 3 }?", answer: "x = 4, y = 1" },
        { question: "Dans un modèle d'équilibre de marché, si la demande est D(p) = 100 - 2p et l'offre est S(p) = 5p - 30, quel est le prix d'équilibre?", answer: "p = 20" }
      ],
      exercises: [
        { question: "Dans une économie simplifiée à deux secteurs, la production du secteur 1 (x) et celle du secteur 2 (y) sont liées par les équations suivantes, qui représentent les contraintes technologiques et la demande finale :\n2x + y = 120 (utilisation des ressources)\nx + 3y = 180 (demande finale)\nDéterminez les niveaux de production x et y qui satisfont ces contraintes.", answer: "Nous avons le système :\n2x + y = 120 (1)\nx + 3y = 180 (2)\n\nPour résoudre ce système, multiplions (1) par 3 :\n6x + 3y = 360 (3)\n\nSoustrayons (2) de (3) :\n5x = 180\nDonc x = 36\n\nEn substituant dans (1) :\n2×36 + y = 120\n72 + y = 120\ny = 48\n\nLes niveaux de production sont donc x = 36 unités pour le secteur 1 et y = 48 unités pour le secteur 2." }
      ],
      gameType: "quiz"
    }
  ]
}; 