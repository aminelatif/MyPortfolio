export default {
  id: "produit-scalaire",
  title: "Le produit scalaire",
  parts: [
    {
      id: "definition-produit-scalaire",
      title: "Définition du produit scalaire",
      sections: [
        { title: "Définition", content: "Le produit scalaire de deux vecteurs u⃗ et v⃗ est une opération qui associe à ces vecteurs un nombre réel. Il peut être défini par u⃗·v⃗ = |u⃗|×|v⃗|×cos(θ), où θ est l'angle entre les deux vecteurs." },
        { title: "Exemple", content: "Si u⃗ et v⃗ sont perpendiculaires, alors u⃗·v⃗ = 0, car cos(90°) = 0." },
        { title: "Remarque", content: "Le produit scalaire est nul si les vecteurs sont orthogonaux." }
      ],
      gameQuestions: [
        { question: "Que vaut le produit scalaire de deux vecteurs unitaires formant un angle de 60° ?", answer: "0.5" },
        { question: "Si u⃗·v⃗ = 0 et u⃗ ≠ 0⃗ et v⃗ ≠ 0⃗, quelle relation existe entre u⃗ et v⃗ ?", answer: "Ils sont perpendiculaires" }
      ],
      exercises: [
        { question: "Calculez le produit scalaire des vecteurs u⃗(3,4) et v⃗(1,2).", answer: "11" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-produit-scalaire",
      title: "Propriétés du produit scalaire",
      sections: [
        { title: "Définition", content: "Le produit scalaire possède des propriétés importantes : commutativité, bilinéarité, et positivité." },
        { title: "Exemple", content: "Commutativité : u⃗·v⃗ = v⃗·u⃗\nBilinéarité : (λu⃗)·v⃗ = λ(u⃗·v⃗)" },
        { title: "Remarque", content: "La bilinéarité permet de distribuer le produit scalaire sur une somme de vecteurs." }
      ],
      gameQuestions: [
        { question: "Quelle propriété du produit scalaire est exprimée par (u⃗ + v⃗)·w⃗ = u⃗·w⃗ + v⃗·w⃗ ?", answer: "Bilinéarité" }
      ],
      exercises: [
        { question: "Démontrez que |u⃗ + v⃗|² = |u⃗|² + |v⃗|² + 2(u⃗·v⃗).", answer: "En développant (u⃗ + v⃗)·(u⃗ + v⃗)" }
      ],
      gameType: "brainsprint"
    },
    {
      id: "applications-produit-scalaire",
      title: "Applications du produit scalaire",
      sections: [
        { title: "Définition", content: "Le produit scalaire est utile pour de nombreuses applications en géométrie et en physique." },
        { title: "Exemple", content: "Le produit scalaire permet de calculer la projection d'un vecteur sur un autre, de vérifier l'orthogonalité, et de calculer des angles entre vecteurs." },
        { title: "Remarque", content: "Le produit scalaire est utilisé pour déterminer si deux vecteurs sont perpendiculaires." }
      ],
      gameQuestions: [
        { question: "Comment calculer l'angle entre deux vecteurs non nuls u⃗ et v⃗ à l'aide du produit scalaire ?", answer: "cos(θ) = (u⃗·v⃗)/(|u⃗|×|v⃗|)" }
      ],
      exercises: [
        { question: "Calculez l'angle entre les vecteurs u⃗(1,1) et v⃗(1,-1).", answer: "90°" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 