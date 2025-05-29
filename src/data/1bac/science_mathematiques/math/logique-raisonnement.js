export default {
  id: "logique-raisonnement",
  title: "Logique et raisonnement",
  parts: [
    {
      id: "notions-base",
      title: "Notions de base",
      sections: [
        { title: "Définition", content: "La logique est l'étude des principes formels et normatifs du raisonnement valide. Elle constitue un outil fondamental dans les mathématiques." },
        { title: "Exemple", content: "Si A est vrai et A implique B, alors B est vrai (Modus Ponens)." },
        { title: "Remarque", content: "La logique est à la base de toute démonstration mathématique." }
      ],
      gameQuestions: [
        { question: "Si P est vrai et P⇒Q est vrai, alors que peut-on conclure sur Q ?", answer: "Q est vrai" }
      ],
      exercises: [
        { question: "Déterminez la valeur de vérité de la proposition: 'Si 2+2=5, alors la Terre est plate.'", answer: "Vraie (une implication avec un antécédent faux est toujours vraie)" }
      ],
      gameType: "quiz"
    }
  ]
}; 