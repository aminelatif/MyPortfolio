export default {
  id: "notion-logique",
  title: "Notions de logique",
  parts: [
    {
      id: "propositions-connecteurs",
      title: "Propositions et connecteurs logiques",
      definition: "Une proposition est un énoncé qui est soit vrai, soit faux, mais pas les deux à la fois. Les connecteurs logiques permettent de combiner des propositions : la négation (¬), la conjonction (∧), la disjonction (∨), l'implication (→) et l'équivalence (↔).",
      example: "Si p : 'Il pleut' et q : 'La route est mouillée', alors p → q signifie 'S'il pleut, alors la route est mouillée'. La table de vérité de p → q montre que cette implication est fausse uniquement lorsque p est vraie et q est fausse.",
      gameQuestions: [
        { question: "Si p est une proposition vraie et q est une proposition fausse, quelle est la valeur de vérité de p ∧ q?", answer: "Faux" },
        { question: "Quelle est la négation de 'Tous les prix augmentent'?", answer: "Il existe au moins un prix qui n'augmente pas" }
      ],
      exercises: [
        { question: "Construisez la table de vérité de l'expression (p → q) ∧ (¬q → ¬p).", answer: "Pour construire la table de vérité, nous examinons toutes les combinaisons possibles de valeurs de vérité pour p et q:\n\n| p | q | p → q | ¬q | ¬p | ¬q → ¬p | (p → q) ∧ (¬q → ¬p) |\n|---|---|-------|----|----|---------|---------------------|\n| V | V |   V   |  F  |  F  |    V    |          V         |\n| V | F |   F   |  V  |  F  |    F    |          F         |\n| F | V |   V   |  F  |  V  |    V    |          V         |\n| F | F |   V   |  V  |  V  |    V    |          V         |\n\nOn peut conclure que cette expression est équivalente à p ↔ q (l'équivalence entre p et q)." }
      ],
      gameType: "quiz"
    },
    {
      id: "quantificateurs",
      title: "Quantificateurs et énoncés quantifiés",
      definition: "Les quantificateurs permettent d'exprimer des propriétés concernant des ensembles d'objets : le quantificateur universel (∀, 'pour tout') et le quantificateur existentiel (∃, 'il existe'). Un énoncé quantifié est une proposition comportant un ou plusieurs quantificateurs.",
      example: "En économie, l'énoncé '∀x (x est un bien de première nécessité → la demande pour x est inélastique)' signifie 'Pour tout bien x, si x est un bien de première nécessité, alors la demande pour x est inélastique'.",
      gameQuestions: [
        { question: "Quelle est la négation de '∀x ∈ E, P(x)'?", answer: "∃x ∈ E, ¬P(x)" },
        { question: "En économie, si l'énoncé 'Tous les marchés sont efficients' est faux, que peut-on affirmer?", answer: "Il existe au moins un marché qui n'est pas efficient" }
      ],
      exercises: [
        { question: "Exprimez à l'aide des quantificateurs l'énoncé 'Dans tout marché, il existe au moins un bien dont le prix est supérieur à 100€'. Puis donnez sa négation.", answer: "L'énoncé peut s'exprimer ainsi : ∀m (m est un marché → ∃b (b est un bien sur m ∧ prix(b) > 100€))\n\nSa négation est : ∃m (m est un marché ∧ ∀b (b est un bien sur m → prix(b) ≤ 100€))\n\nCe qui signifie : 'Il existe au moins un marché où tous les biens ont un prix inférieur ou égal à 100€'." }
      ],
      gameType: "quiz"
    },
    {
      id: "raisonnement",
      title: "Raisonnement et démonstration",
      definition: "Le raisonnement est le processus permettant de tirer des conclusions à partir de prémisses. Les principales formes de raisonnement sont le raisonnement déductif (modus ponens, modus tollens), le raisonnement par contraposée, le raisonnement par l'absurde, et le raisonnement par récurrence.",
      example: "Exemple de modus ponens : Si 'Une augmentation de la masse monétaire entraîne l'inflation' et 'La masse monétaire a augmenté', alors on peut conclure 'Il y a inflation'.",
      gameQuestions: [
        { question: "Dans un raisonnement par contraposée, que démontre-t-on pour prouver 'Si p alors q'?", answer: "Si non q alors non p" },
        { question: "Qu'est-ce que le modus tollens?", answer: "Un raisonnement de la forme 'Si p alors q, non q, donc non p'" }
      ],
      exercises: [
        { question: "Dans un modèle économique, on a les hypothèses suivantes : 1) Si les taux d'intérêt augmentent, alors l'investissement diminue. 2) Si l'investissement diminue, alors la croissance économique ralentit. Que peut-on conclure si les taux d'intérêt augmentent?", answer: "On peut appliquer le raisonnement par transitivité :\n1) Si les taux d'intérêt augmentent, alors l'investissement diminue (hypothèse 1).\n2) Si l'investissement diminue, alors la croissance économique ralentit (hypothèse 2).\nPar transitivité, on conclut : Si les taux d'intérêt augmentent, alors la croissance économique ralentit." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-economie",
      title: "Applications en économie et gestion",
      definition: "La logique est fondamentale en économie pour construire des modèles théoriques, évaluer des politiques économiques et analyser des situations de marché. Elle permet de structurer les raisonnements économiques et d'établir des relations causales entre variables.",
      example: "En microéconomie, on utilise souvent le raisonnement à la marge : 'Si le coût marginal d'un bien est supérieur à son prix, alors il est rationnel pour une entreprise de réduire sa production'. C'est un exemple d'implication logique appliqué à la prise de décision économique.",
      gameQuestions: [
        { question: "En théorie des jeux, la proposition 'Si tous les joueurs sont rationnels et maximisent leur utilité, alors ils atteindront un équilibre de Nash' est un exemple de quel type de raisonnement?", answer: "Raisonnement déductif" },
        { question: "Pourquoi la logique est-elle importante dans l'analyse des politiques économiques?", answer: "Elle permet d'établir des relations de causalité entre les mesures et leurs effets" }
      ],
      exercises: [
        { question: "Analysez le raisonnement suivant en identifiant sa structure logique et sa validité : 'Si une entreprise augmente ses prix, elle perd des parts de marché. L'entreprise X n'a pas perdu de parts de marché. Donc, l'entreprise X n'a pas augmenté ses prix.'", answer: "Ce raisonnement correspond à la structure du modus tollens :\n1) Si p (augmenter les prix) alors q (perdre des parts de marché)\n2) Non q (ne pas perdre de parts de marché)\n3) Donc non p (ne pas augmenter les prix)\n\nCette forme de raisonnement est logiquement valide. Si nous acceptons les prémisses, la conclusion s'ensuit nécessairement." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 