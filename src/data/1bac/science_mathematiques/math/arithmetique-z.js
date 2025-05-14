export default {
  id: "arithmetique-z",
  title: "Arithmétique dans ℤ",
  parts: [
    {
      id: "division-euclidienne",
      title: "Division euclidienne",
      definition: "Pour tout a ∈ ℤ et b ∈ ℕ*, il existe un unique couple (q,r) ∈ ℤ×ℕ tel que a = bq + r avec 0 ≤ r < |b|. q est le quotient et r le reste de la division euclidienne de a par b.",
      example: "La division euclidienne de 17 par 5 donne 17 = 5×3 + 2, où 3 est le quotient et 2 est le reste.",
      gameQuestions: [
        { question: "Quels sont le quotient et le reste de la division euclidienne de -23 par 7 ?", answer: "q = -4 et r = 5 car -23 = 7×(-4) + 5" }
      ],
      exercises: [
        { question: "Effectuez la division euclidienne de 157 par 13 et vérifiez votre résultat.", answer: "157 = 13×12 + 1" }
      ],
      gameType: "quiz"
    },
    {
      id: "pgcd-ppcm",
      title: "PGCD et PPCM",
      definition: "Le PGCD (plus grand commun diviseur) de deux entiers a et b est le plus grand entier qui divise à la fois a et b. Le PPCM (plus petit commun multiple) est le plus petit entier strictement positif qui est multiple à la fois de a et de b.",
      example: "PGCD(24, 36) = 12 et PPCM(24, 36) = 72. On a la relation PGCD(a,b) × PPCM(a,b) = |a×b|.",
      gameQuestions: [
        { question: "Comment calculer le PGCD de deux nombres à l'aide de l'algorithme d'Euclide ?", answer: "En effectuant des divisions euclidiennes successives jusqu'à obtenir un reste nul" }
      ],
      exercises: [
        { question: "Calculez le PGCD de 120 et 168 par l'algorithme d'Euclide, puis déduisez-en le PPCM.", answer: "PGCD(120, 168) = 24, PPCM(120, 168) = 120×168/24 = 840" }
      ],
      gameType: "quiz"
    },
    {
      id: "nombres-premiers",
      title: "Nombres premiers",
      definition: "Un nombre entier p > 1 est premier s'il n'a que deux diviseurs positifs : 1 et lui-même. Tout entier n > 1 peut s'écrire de façon unique (à l'ordre près) comme produit de facteurs premiers.",
      example: "Les nombres premiers inférieurs à 20 sont : 2, 3, 5, 7, 11, 13, 17, 19. La décomposition de 60 en facteurs premiers est 60 = 2² × 3 × 5.",
      gameQuestions: [
        { question: "Comment déterminer si un nombre n est premier ?", answer: "Vérifier qu'il n'est divisible par aucun nombre premier p tel que p² ≤ n" }
      ],
      exercises: [
        { question: "Décomposez 1260 en produit de facteurs premiers.", answer: "1260 = 2² × 3² × 5 × 7" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 