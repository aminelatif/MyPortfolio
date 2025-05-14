export default {
  id: "transformations",
  title: "Transformations du plan",
  parts: [
    {
      id: "translations",
      title: "Translations",
      definition: "Une translation est une transformation géométrique qui déplace tous les points du plan dans la même direction et de la même distance, selon un vecteur donné.",
      example: "La translation de vecteur v⃗(3,2) transforme le point A(1,1) en A'(4,3).",
      gameQuestions: [
        { question: "Quelle est l'image du point M(5,3) par la translation de vecteur u⃗(2,-1) ?", answer: "M'(7,2)" },
        { question: "Quelle propriété géométrique est conservée par une translation ?", answer: "Distances, angles, aires" }
      ],
      exercises: [
        { question: "Déterminez le vecteur de la translation qui transforme A(1,2) en A'(4,7).", answer: "v⃗(3,5)" }
      ],
      gameType: "quiz"
    },
    {
      id: "rotations",
      title: "Rotations",
      definition: "Une rotation est une transformation géométrique qui fait tourner tous les points du plan d'un angle donné autour d'un point fixe appelé centre de rotation.",
      example: "La rotation de centre O et d'angle 90° transforme le point A(1,0) en A'(0,1).",
      gameQuestions: [
        { question: "Quelle est l'image du point M(2,0) par la rotation de centre O et d'angle 180° ?", answer: "M'(-2,0)" }
      ],
      exercises: [
        { question: "Déterminezl'image du triangle ABC de sommets A(1,0), B(2,0) et C(1,1) par la rotation de centre O et d'angle 90°.", answer: "A'(0,1), B'(0,2), C'(-1,1)" }
      ],
      gameType: "brainsprint"
    },
    {
      id: "symetries",
      title: "Symétries",
      definition: "Une symétrie est une transformation géométrique qui reflète des points par rapport à un axe (symétrie axiale) ou à un point (symétrie centrale).",
      example: "La symétrie par rapport à l'axe des ordonnées transforme le point A(3,2) en A'(-3,2).",
      gameQuestions: [
        { question: "Quelle est l'image du point M(5,-3) par la symétrie par rapport à l'origine ?", answer: "M'(-5,3)" }
      ],
      exercises: [
        { question: "Déterminez l'image du rectangle ABCD de sommets A(1,1), B(4,1), C(4,3) et D(1,3) par la symétrie par rapport à l'axe des abscisses.", answer: "A'(1,-1), B'(4,-1), C'(4,-3), D'(1,-3)" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 