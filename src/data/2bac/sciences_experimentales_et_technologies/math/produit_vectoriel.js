// Leçon : Produit vectoriel (Sciences Expérimentales)
export default {
  id: "produit_vectoriel",
  title: "Produit vectoriel",
  parts: [
    {
      id: "definition-produit-vectoriel",
      title: "Définition du produit vectoriel",
      definition: "Le produit vectoriel de deux vecteurs u et v dans l'espace est un vecteur perpendiculaire à u et v, noté u × v.",
      example: "Si u = (1,0,0) et v = (0,1,0), alors u × v = (0,0,1).",
      gameQuestions: [
        { question: "Calculez le produit vectoriel de u = (2,0,0) et v = (0,3,0).", answer: "(0,0,6)" }
      ],
      exercises: [
        { question: "Trouvez le produit vectoriel de (1,2,0) et (0,1,2).", answer: "(4,-2,1)" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-produit-vectoriel",
      title: "Propriétés du produit vectoriel",
      definition: "Le produit vectoriel est anti-commutatif et distributif par rapport à l'addition vectorielle.",
      example: "u × v = - (v × u) et u × (v + w) = u × v + u × w.",
      gameQuestions: [
        { question: "Le produit vectoriel est-il commutatif ?", answer: "Non" }
      ],
      exercises: [
        { question: "Calculez (1,0,0) × (0,1,0).", answer: "(0,0,1)" }
      ],
      gameType: "quiz"
    }
  ]
}; 