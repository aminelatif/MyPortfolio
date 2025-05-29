export default {
  id: "groupes",
  title: "Groupes",
  parts: [
    {
      id: "definition-groupe",
      title: "Définition d'un groupe",
      sections: [
        { title: "Définition", content: "Un groupe est un ensemble muni d'une loi de composition interne qui vérifie les propriétés d'associativité, d'élément neutre et d'élément symétrique." },
        { title: "Exemple", content: "(ℤ,+) est un groupe car l'addition est associative, 0 est l'élément neutre et tout entier a a un opposé -a." },
        { title: "Remarque", content: "La notion de groupe est fondamentale en algèbre et en mathématiques en général." }
      ],
      gameQuestions: [
        { question: "Quel est l'élément neutre du groupe (ℝ*,×) ?", answer: "1" }
      ],
      exercises: [
        { question: "Montrez que (ℤ, ×) n'est pas un groupe.", answer: "Car 0 n'a pas d'inverse pour la multiplication" }
      ],
      gameType: "quiz"
    }
  ]
}; 