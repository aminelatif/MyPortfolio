export default {
  id: "vecteurs-espace",
  title: "Vecteurs de l'espace",
  parts: [
    {
      id: "generalites-vecteurs",
      title: "Généralités sur les vecteurs de l'espace",
      definition: "Un vecteur de l'espace est défini par une direction, un sens et une norme (longueur). Deux vecteurs sont égaux s'ils ont même direction, même sens et même norme.",
      example: "Dans l'espace, les vecteurs AB⃗ et CD⃗ sont égaux si le quadrilatère ABDC est un parallélogramme.",
      gameQuestions: [
        { question: "Que représente géométriquement la somme de deux vecteurs u⃗ et v⃗ ?", answer: "La diagonale du parallélogramme construit sur u⃗ et v⃗" }
      ],
      exercises: [
        { question: "Soit A(1,2,3), B(4,5,6) et C(2,3,4). Montrez que les vecteurs AB⃗ et AC⃗ ne sont pas colinéaires.", answer: "AB⃗(3,3,3) et AC⃗(1,1,1). AB⃗ = 3AC⃗, donc ils sont colinéaires." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-vecteurs",
      title: "Opérations sur les vecteurs",
      definition: "Dans l'espace, on peut additionner des vecteurs, les multiplier par un scalaire, et établir des relations de colinéarité. Un vecteur de l'espace possède trois composantes (x,y,z) dans un repère.",
      example: "Si u⃗(2,3,5) et v⃗(1,-1,2), alors u⃗+v⃗ = (3,2,7) et 2u⃗ = (4,6,10).",
      gameQuestions: [
        { question: "Comment calculer la norme du vecteur u⃗(x,y,z) ?", answer: "||u⃗|| = √(x² + y² + z²)" }
      ],
      exercises: [
        { question: "Calculez la norme du vecteur u⃗(3,4,12).", answer: "||u⃗|| = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13" }
      ],
      gameType: "quiz"
    },
    {
      id: "bases-reperes",
      title: "Bases et repères",
      definition: "Une base de l'espace est un triplet de vecteurs non coplanaires (i⃗, j⃗, k⃗). Un repère de l'espace est défini par un point O et une base. Tout vecteur de l'espace peut s'écrire comme combinaison linéaire des vecteurs de la base.",
      example: "Dans le repère cartésien (O, i⃗, j⃗, k⃗), le vecteur OM⃗ du point M(2,3,5) s'écrit OM⃗ = 2i⃗ + 3j⃗ + 5k⃗.",
      gameQuestions: [
        { question: "Quelles conditions doivent vérifier trois vecteurs pour former une base de l'espace ?", answer: "Ils doivent être non coplanaires (non colinéaires deux à deux et leur produit mixte est non nul)" }
      ],
      exercises: [
        { question: "Soit u⃗(1,0,2), v⃗(0,1,1) et w⃗(1,1,0). Montrez que (u⃗, v⃗, w⃗) forme une base de l'espace.", answer: "On calcule le déterminant de la matrice formée par les composantes: det([[1,0,2],[0,1,1],[1,1,0]]) = 1 ≠ 0, donc ces vecteurs forment une base." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 