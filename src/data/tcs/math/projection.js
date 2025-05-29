export default {
  id: "projection",
  title: "La projection dans le plan",
  parts: [
    {
      id: "projection-definition",
      title: "Définition de la projection",
      sections: [
        { title: "Définition", content: "La projection est une transformation qui associe à un point son ombre sur une droite ou un plan selon une direction donnée." },
        { title: "Exemple", content: "La projection d'un point M sur une droite D parallèlement à une direction Δ est le point P situé à l'intersection de D et de la droite passant par M et parallèle à Δ." },
        { title: "Remarque", content: "La projection est utilisée en géométrie et en physique pour simplifier les problèmes." }
      ],
      gameQuestions: [
        { question: "Qu'est-ce qu'une projection orthogonale ?", answer: "Une projection selon une direction perpendiculaire à la droite ou au plan de projection" },
        { question: "Dans une projection orthogonale, quel angle forme la direction de projection avec la droite de projection ?", answer: "90 degrés" }
      ],
      exercises: [
        { question: "Quelle est la projection orthogonale du point M(3,4) sur l'axe des abscisses ?", answer: "(3,0)" }
      ],
      gameType: "quiz"
    },
    {
      id: "projection-vectorielle",
      title: "Projection vectorielle",
      sections: [
        { title: "Définition", content: "La projection d'un vecteur u⃗ sur un vecteur v⃗ est la composante de u⃗ qui est parallèle à v⃗." },
        { title: "Exemple", content: "La projection de u⃗ sur v⃗ est donnée par la formule : proj_v⃗(u⃗) = (u⃗·v⃗)/(|v⃗|²) × v⃗" },
        { title: "Remarque", content: "La projection est utilisée en géométrie et en physique pour simplifier les problèmes." }
      ],
      gameQuestions: [
        { question: "Comment calcule-t-on la projection scalaire d'un vecteur u⃗ sur un vecteur v⃗ ?", answer: "(u⃗·v⃗)/|v⃗|" }
      ],
      exercises: [
        { question: "Calculez la projection du vecteur u⃗(3,4) sur le vecteur v⃗(1,0).", answer: "(3,0)" }
      ],
      gameType: "brainsprint"
    }
  ]
}; 