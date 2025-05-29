export default {
  id: "calcul-vectoriel",
  title: "Calcul vectoriel dans le plan",
  parts: [
    {
      id: "vecteurs-definition",
      title: "Définition d'un vecteur",
      sections: [
        { title: "Définition", content: "Un vecteur est une entité mathématique caractérisée par une direction, un sens et une norme (longueur)." },
        { title: "Exemple", content: "Un vecteur AB⃗ est représenté par deux points A (origine) et B (extrémité)." },
        { title: "Remarque", content: "Le calcul vectoriel est fondamental pour la physique et l'ingénierie." }
      ],
      gameQuestions: [
        { question: "Quelles sont les caractéristiques principales d'un vecteur ?", answer: "Direction, sens et norme" },
        { question: "Comment calcule-t-on les coordonnées du vecteur AB⃗ ?", answer: "xB - xA et yB - yA" }
      ],
      exercises: [
        { question: "Calculez les coordonnées du vecteur AB⃗ si A(1,2) et B(4,6).", answer: "(3,4)" }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-vecteurs",
      title: "Opérations sur les vecteurs",
      sections: [
        { title: "Définition", content: "Les opérations principales sur les vecteurs sont l'addition, la soustraction, et la multiplication par un scalaire." },
        { title: "Exemple", content: "Si u⃗(2,3) et v⃗(1,4), alors u⃗ + v⃗ = (3,7) et 2u⃗ = (4,6)." },
        { title: "Remarque", content: "Le calcul vectoriel est fondamental pour la physique et l'ingénierie." }
      ],
      gameQuestions: [
        { question: "Calculez u⃗ - v⃗ si u⃗(4,5) et v⃗(1,2).", answer: "(3,3)" }
      ],
      exercises: [
        { question: "Si u⃗(3,2) et v⃗(-1,4), calculez 2u⃗ + 3v⃗.", answer: "(3,18)" }
      ],
      gameType: "brainsprint"
    }
  ]
}; 