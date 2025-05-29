// Leçon : Produit vectoriel (Sciences Expérimentales)
export default {
  id: "produit_vectoriel",
  title: "Produit vectoriel",
  parts: [
    {
      id: "definition-produit-vectoriel",
      title: "Définition du produit vectoriel",
      sections: [
        { title: "Définition", content: "Le produit vectoriel de deux vecteurs u et v dans l'espace est un vecteur perpendiculaire à u et v, noté u × v." },
        { title: "Exemple", content: "Si u = (1,0,0) et v = (0,1,0), alors u × v = (0,0,1)." },
        { title: "Remarque", content: "Le produit vectoriel est fondamental pour l'étude des moments et des rotations en sciences expérimentales." }
      ],
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
      sections: [
        { title: "Définition", content: "Le produit vectoriel est anti-commutatif et distributif par rapport à l'addition vectorielle." },
        { title: "Exemple", content: "u × v = - (v × u) et u × (v + w) = u × v + u × w." },
        { title: "Remarque", content: "Les propriétés du produit vectoriel facilitent les calculs de moments et de forces en sciences expérimentales." }
      ],
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