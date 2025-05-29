// Leçon : La géométrie dans l'espace - Produit scalaire (Sciences Expérimentales)
export default {
  id: "produit_scalaire",
  title: "La géométrie dans l'espace - Produit scalaire",
  parts: [
    {
      id: "definition-produit-scalaire",
      title: "Définition du produit scalaire",
      sections: [
        { title: "Définition", content: "Le produit scalaire de deux vecteurs u et v est un nombre réel noté u·v, égal à |u||v|cos(θ), où θ est l'angle entre u et v." },
        { title: "Exemple", content: "Si u = (1,2,3) et v = (4,5,6), alors u·v = 1×4 + 2×5 + 3×6 = 32." },
        { title: "Remarque", content: "Le produit scalaire est fondamental pour l'étude des angles et des projections en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "Calculez le produit scalaire de u = (2,0,1) et v = (1,3,2).", answer: "4" }
      ],
      exercises: [
        { question: "Calculez le produit scalaire de u = (1,2,0) et v = (0,1,2).", answer: "2" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-produit-scalaire",
      title: "Propriétés du produit scalaire",
      sections: [
        { title: "Définition", content: "Le produit scalaire est commutatif et distributif par rapport à l'addition vectorielle." },
        { title: "Exemple", content: "u·v = v·u et u·(v + w) = u·v + u·w." },
        { title: "Remarque", content: "Les propriétés du produit scalaire facilitent les calculs vectoriels en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "Le produit scalaire est-il commutatif ?", answer: "Oui" }
      ],
      exercises: [
        { question: "Calculez (2,1,0)·((1,0,1)+(0,2,1)).", answer: "4" }
      ],
      gameType: "quiz"
    }
  ]
}; 