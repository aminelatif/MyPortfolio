export default {
  id: "notion-logique",
  title: "Notion de logique",
  parts: [
    {
      id: "propositions-operations",
      title: "Propositions et opérations logiques",
      sections: [
        { title: "Définition", content: "Une proposition est une assertion qui est soit vraie, soit fausse. Les opérations logiques de base sont la négation (¬), la conjonction (∧), la disjonction (∨) et l'implication (⇒)." },
        { title: "Exemple", content: "Si p: 'Il pleut' et q: 'La route est mouillée', alors p⇒q signifie 'S'il pleut, alors la route est mouillée'." },
        { title: "Remarque", content: "La logique est le fondement du raisonnement mathématique. Maîtriser les opérations logiques est essentiel pour comprendre les démonstrations et les raisonnements complexes." }
      ],
      gameQuestions: [
        { question: "Quelle est la négation de 'Tous les nombres premiers sont impairs'?", answer: "Il existe au moins un nombre premier qui est pair." },
        { question: "Si p est vrai et q est faux, quelle est la valeur de vérité de p⇒q?", answer: "Faux" }
      ],
      exercises: [
        { question: "Déterminez la valeur de vérité de (p∨q)∧(¬p) sachant que p est faux et q est vrai.", answer: "Vrai, car (F∨V)∧(¬F) = V∧V = V" }
      ],
      gameType: "quiz"
    },
    {
      id: "quantificateurs",
      title: "Quantificateurs et raisonnements",
      sections: [
        { title: "Définition", content: "Les quantificateurs universel (∀) et existentiel (∃) permettent d'exprimer des propositions sur des ensembles. Un raisonnement valide respecte les règles de la logique formelle." },
        { title: "Exemple", content: "La proposition '∀x∈ℝ, x²≥0' signifie 'Pour tout nombre réel x, le carré de x est positif ou nul'." },
        { title: "Remarque", content: "L'utilisation correcte des quantificateurs est indispensable pour formuler des théorèmes et des propriétés mathématiques de façon rigoureuse." }
      ],
      gameQuestions: [
        { question: "Quelle est la négation de '∃x∈ℕ tel que x²=2'?", answer: "∀x∈ℕ, x²≠2" },
        { question: "Quel raisonnement utilise-t-on pour démontrer qu'une propriété est vraie pour tout entier n≥n₀?", answer: "La récurrence" }
      ],
      exercises: [
        { question: "Écrivez la proposition suivante avec des quantificateurs: 'La somme de deux nombres pairs est paire'.", answer: "∀x,y∈ℤ, si x et y sont pairs alors x+y est pair" }
      ],
      gameType: "quiz"
    },
    {
      id: "methodes-demonstration",
      title: "Méthodes de démonstration",
      sections: [
        { title: "Définition", content: "Les principales méthodes de démonstration sont la preuve directe, la preuve par contraposition, la preuve par l'absurde et la preuve par récurrence." },
        { title: "Exemple", content: "Pour démontrer que 'si n² est pair, alors n est pair', on peut utiliser la contraposition: 'si n est impair, alors n² est impair'." },
        { title: "Remarque", content: "La maîtrise des différentes méthodes de démonstration permet d'adapter la stratégie de preuve à la nature du problème mathématique rencontré." }
      ],
      gameQuestions: [
        { question: "Dans quelle méthode de démonstration suppose-t-on que la conclusion est fausse pour arriver à une contradiction?", answer: "La démonstration par l'absurde" },
        { question: "Quelle méthode utilise-t-on pour démontrer qu'une propriété P(n) est vraie pour tout entier n≥n₀?", answer: "La démonstration par récurrence" }
      ],
      exercises: [
        { question: "Démontrez par contraposition que si n² est impair, alors n est impair.", answer: "Contraposition: si n est pair, alors n² est pair. En effet, si n=2k, alors n²=4k², qui est pair. Donc par contraposition, si n² est impair, alors n est impair." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 