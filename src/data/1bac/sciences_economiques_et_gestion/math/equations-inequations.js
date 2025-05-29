export default {
  id: "equations-inequations",
  title: "Équations et inéquations",
  parts: [
    {
      id: "definition-equation",
      title: "Définition d'une équation",
      sections: [
        { title: "Définition", content: "Une équation est une égalité comportant une ou plusieurs inconnues. Résoudre une équation, c'est trouver toutes les valeurs des inconnues qui vérifient cette égalité. En économie, les équations modélisent des situations d'équilibre, de coût, de revenu, etc." },
        { title: "Exemple", content: "L'équation 2x + 3 = 11 a pour solution x = 4. En économie, l'équation de l'équilibre offre-demande est D(p) = O(p), où D est la demande et O l'offre." },
        { title: "Remarque", content: "Les équations sont essentielles pour la modélisation et la résolution de problèmes économiques." }
      ],
      gameQuestions: [
        { question: "Quelle est la solution de l'équation x² - 9 = 0 ?", answer: "x = 3 ou x = -3" },
        { question: "Pour l'équation 5x = 20, quelle est la valeur de x ?", answer: "x = 4" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût C(q) = 2q + 100 et une fonction de revenu R(q) = 8q. (a) Déterminez la quantité q pour laquelle l'entreprise atteint le seuil de rentabilité. (b) Calculez ce seuil.", answer: "(a) Le seuil de rentabilité est atteint lorsque C(q) = R(q), soit 2q + 100 = 8q.\n\n(b) 8q - 2q = 100 ⇒ 6q = 100 ⇒ q = 100/6 ≈ 16,67. Le seuil de rentabilité est atteint pour q ≈ 16,67." }
      ],
      gameType: "quiz"
    },
    {
      id: "inequations",
      title: "Inéquations et systèmes",
      sections: [
        { title: "Définition", content: "Une inéquation est une expression mathématique comportant une inégalité (>, <, ≥, ≤). Résoudre une inéquation, c'est trouver toutes les valeurs qui rendent l'inégalité vraie. Les systèmes d'équations et d'inéquations permettent de modéliser des contraintes économiques." },
        { title: "Exemple", content: "L'inéquation 2x - 5 > 3 a pour solution x > 4. En économie, les contraintes budgétaires ou de production sont souvent modélisées par des inéquations." },
        { title: "Remarque", content: "Les inéquations sont utilisées pour exprimer des contraintes et des bornes dans les modèles économiques." }
      ],
      gameQuestions: [
        { question: "Quelle est la solution de l'inéquation x + 2 < 7 ?", answer: "x < 5" },
        { question: "Pour l'inéquation 3x ≥ 12, quelle est la solution ?", answer: "x ≥ 4" }
      ],
      exercises: [
        { question: "Une entreprise doit respecter la contrainte de production suivante : 2q + 3 ≤ 23. (a) Déterminez la quantité maximale q que l'entreprise peut produire. (b) Si la demande est D(q) = 5q, quelle est la demande maximale possible ?", answer: "(a) 2q + 3 ≤ 23 ⇒ 2q ≤ 20 ⇒ q ≤ 10.\n\n(b) D(10) = 5×10 = 50. La demande maximale possible est 50." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "Les équations et inéquations sont utilisées en économie pour modéliser les situations d'équilibre, les contraintes de production, les seuils de rentabilité, etc. Elles permettent de résoudre des problèmes d'optimisation et de prise de décision." },
        { title: "Exemple", content: "Pour déterminer la quantité qui maximise le profit, on résout l'équation П'(q) = 0. Pour respecter une contrainte budgétaire, on utilise une inéquation du type C(q) ≤ B, où B est le budget." },
        { title: "Remarque", content: "L'utilisation des équations et inéquations en économie est essentielle pour la planification et la gestion des ressources." }
      ],
      gameQuestions: [
        { question: "Pour maximiser le profit, quelle équation doit-on résoudre ?", answer: "П'(q) = 0" },
        { question: "Si le coût total doit être inférieur ou égal à 500, quelle inéquation modélise cette contrainte pour C(q) ?", answer: "C(q) ≤ 500" }
      ],
      exercises: [
        { question: "Une entreprise souhaite maximiser son profit sous la contrainte suivante : 3q + 2 ≤ 50. (a) Déterminez la quantité maximale q. (b) Si le profit est П(q) = 10q - 5q², calculez le profit maximal réalisable sous cette contrainte.", answer: "(a) 3q + 2 ≤ 50 ⇒ 3q ≤ 48 ⇒ q ≤ 16.\n\n(b) Le profit maximal sous la contrainte est П(16) = 10×16 - 5×16² = 160 - 1280 = -1120 (ici, la contrainte ne permet pas d'obtenir un profit positif, il faudrait vérifier pour d'autres valeurs de q)." }
      ],
      gameType: "quiz"
    }
  ]
}; 