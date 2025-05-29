export default {
  id: "arithmetique",
  title: "Arithmétique dans IN",
  parts: [
    {
      id: "divisibility",
      title: "Divisibilité",
      sections: [
        { title: "Définition", content: "Un nombre $a$ est divisible par $b$ si et seulement s'il existe un entier k tel que $a = b × k.$" },
        { title: "Exemple", content: "12 est divisible par 3 car 12 = 3 × 4" },
        { title: "Remarque", content: "Tout nombre est divisible par 1 et par lui-même." }
      ],
      video:"https://www.youtube.com/embed/MIKbFraDptE?si=hn9J5t1_TYmsCPui",
      gameQuestions: [
        { question: "12 est-il divisible par 3 ?", answer: "Oui" },
        { question: "17 est-il divisible par 4 ?", answer: "Non" }
      ],
      exercises: [
        { question: "Déterminez tous les diviseurs de 24.", answer: "1, 2, 3, 4, 6, 8, 12, 24" }
      ],
      gameType: "quiz"
    },
    {
      id: "pgcd",
      title: "PGCD",
      sections: [
        { title: "Définition", content: "Le PGCD (Plus Grand Commun Diviseur) de deux nombres entiers a et b est le plus grand entier qui divise à la fois a et b." },
        { title: "Exemple", content: "PGCD(12, 18) = 6 car 6 est le plus grand nombre qui divise à la fois 12 et 18" },
        { title: "Remarque", content: "Le PGCD de deux nombres premiers entre eux est 1." }
      ],
      gameQuestions: [
        { question: "Quel est le PGCD de 24 et 36 ?", answer: "12" }
      ],
      exercises: [
        { question: "Calculez le PGCD de 48 et 72 en utilisant l'algorithme d'Euclide.", answer: "24" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 