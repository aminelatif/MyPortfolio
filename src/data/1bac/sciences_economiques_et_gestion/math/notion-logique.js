export default {
  id: "notion-logique",
  title: "Notion de logique",
  parts: [
    {
      id: "definition-logique",
      title: "Définition de la logique",
      sections: [
        { title: "Définition", content: "La logique est la science du raisonnement. Elle permet de distinguer les raisonnements valides des raisonnements invalides. En économie, la logique est utilisée pour structurer les arguments, analyser les hypothèses et tirer des conclusions à partir de données." },
        { title: "Exemple", content: "Si tous les marchés sont concurrentiels et que l'entreprise maximise son profit, alors le prix est égal au coût marginal. Ce raisonnement logique permet de déduire une propriété fondamentale de l'équilibre concurrentiel." },
        { title: "Remarque", content: "La logique est essentielle pour la rigueur des analyses économiques et la validité des modèles." }
      ],
      gameQuestions: [
        { question: "Si A implique B et B implique C, que peut-on conclure ?", answer: "A implique C" },
        { question: "Quel est le contraire de l'affirmation 'Tous les consommateurs sont rationnels' ?", answer: "Il existe au moins un consommateur qui n'est pas rationnel" }
      ],
      exercises: [
        { question: "Un économiste affirme : 'Si la demande augmente, alors le prix augmente.' (a) Quelle est la contraposée de cette affirmation ? (b) Donnez un exemple économique illustrant cette logique.", answer: "(a) La contraposée est : 'Si le prix n'augmente pas, alors la demande n'augmente pas.'\n\n(b) Exemple : Sur un marché concurrentiel, si l'augmentation de la demande n'entraîne pas de hausse de prix, c'est que la demande n'a pas réellement augmenté ou que l'offre a augmenté en même temps." }
      ],
      gameType: "quiz"
    },
    {
      id: "connecteurs-logiques",
      title: "Connecteurs logiques",
      sections: [
        { title: "Définition", content: "Les connecteurs logiques sont des mots ou symboles qui relient des propositions : et (∧), ou (∨), non (¬), si...alors (⇒), si et seulement si (⇔). En économie, ils servent à formuler des hypothèses et des conditions dans les modèles." },
        { title: "Exemple", content: "Si la demande augmente ET le prix baisse, alors la quantité échangée augmente. Si la demande augmente OU le prix baisse, alors la quantité échangée peut augmenter." },
        { title: "Remarque", content: "L'utilisation correcte des connecteurs logiques est indispensable pour la cohérence des raisonnements économiques." }
      ],
      gameQuestions: [
        { question: "Quel est le symbole logique pour 'ou' ?", answer: "∨" },
        { question: "Que signifie l'expression 'si et seulement si' ?", answer: "⇔" }
      ],
      exercises: [
        { question: "Formulez une hypothèse économique utilisant les connecteurs logiques 'et' et 'ou'.", answer: "Si la demande augmente ET le revenu augmente, alors la consommation augmente. Si le prix baisse OU le revenu augmente, alors la demande peut augmenter." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "La logique est utilisée en économie pour structurer les modèles, vérifier la cohérence des hypothèses et analyser les conséquences des politiques économiques. Elle permet de détecter les erreurs de raisonnement et d'améliorer la rigueur des analyses." },
        { title: "Exemple", content: "Dans un modèle d'équilibre général, la cohérence logique des hypothèses garantit la validité des conclusions. L'analyse des politiques publiques repose sur des raisonnements logiques pour anticiper les effets attendus." },
        { title: "Remarque", content: "L'application de la logique en économie est essentielle pour la robustesse des modèles et la pertinence des recommandations." }
      ],
      gameQuestions: [
        { question: "Pourquoi la logique est-elle importante en économie ?", answer: "Pour garantir la cohérence et la validité des analyses" },
        { question: "Donnez un exemple d'erreur logique courante en économie.", answer: "Confondre corrélation et causalité" }
      ],
      exercises: [
        { question: "Un économiste affirme : 'Si la politique monétaire est expansionniste, alors l'inflation augmente.' (a) Quelle est la négation de cette affirmation ? (b) Donnez un exemple où cette affirmation pourrait être fausse.", answer: "(a) La négation est : 'La politique monétaire est expansionniste et l'inflation n'augmente pas.'\n\n(b) Exemple : Si la politique monétaire est expansionniste mais que la demande globale reste faible, l'inflation peut ne pas augmenter." }
      ],
      gameType: "quiz"
    }
  ]
}; 