export default {
  id: "rotation",
  title: "La rotation",
  parts: [
    {
      id: "definition-rotation",
      title: "Définition de la rotation",
      sections: [
        { title: "Définition", content: "Une rotation dans le plan est une transformation géométrique qui fait tourner tous les points d'un angle donné autour d'un point fixe appelé centre de rotation." },
        { title: "Exemple", content: "La rotation de centre O et d'angle 90° transforme le point A(1,0) en A'(0,1)." },
        { title: "Remarque", content: "La rotation est une isométrie qui conserve les distances et les angles." }
      ],
      gameQuestions: [
        { question: "Comment obtient-on l'image du point M(x,y) par une rotation de centre O et d'angle θ ?", answer: "M'(x·cos(θ) - y·sin(θ), x·sin(θ) + y·cos(θ))" }
      ],
      exercises: [
        { question: "Déterminez l'image du point A(3,1) par la rotation de centre O et d'angle 60°.", answer: "A'(3·cos(60°) - 1·sin(60°), 3·sin(60°) + 1·cos(60°)) = A'(1, 3)" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-rotations",
      title: "Propriétés des rotations",
      sections: [
        { title: "Définition", content: "Les rotations conservent les distances, les angles et les aires. Elles transforment une droite en une droite et un cercle en un cercle." },
        { title: "Exemple", content: "Une rotation transforme un triangle en un triangle de même aire et de mêmes dimensions." },
        { title: "Remarque", content: "Les rotations sont des transformations qui préservent la forme des figures." }
      ],
      gameQuestions: [
        { question: "Quelle est la nature de la composée de deux rotations de même centre ?", answer: "Une rotation de même centre" }
      ],
      exercises: [
        { question: "Démontrez que la composée de la rotation de centre O et d'angle α suivie de la rotation de centre O et d'angle β est la rotation de centre O et d'angle α+β.", answer: "La matrice de la rotation d'angle α est Rα = [[cos(α), -sin(α)], [sin(α), cos(α)]]. De même pour Rβ. Le produit RβRα donne la matrice de la rotation d'angle α+β." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-rotations",
      title: "Applications des rotations",
      sections: [
        { title: "Définition", content: "Les rotations sont utilisées dans de nombreux domaines tels que la géométrie, la physique, l'informatique graphique et la robotique." },
        { title: "Exemple", content: "En informatique graphique, les rotations permettent d'animer des objets en les faisant tourner autour d'axes spécifiques." },
        { title: "Remarque", content: "Les rotations sont essentielles pour la modélisation et l'animation en 3D." }
      ],
      gameQuestions: [
        { question: "Dans quel domaine utilise-t-on les matrices de rotation pour représenter l'orientation d'un objet dans l'espace ?", answer: "En robotique et en animation 3D" }
      ],
      exercises: [
        { question: "Un triangle ABC a pour sommets A(1,1), B(4,2) et C(2,5). Déterminez les coordonnées du triangle A'B'C' obtenu par la rotation de centre O et d'angle 90°.", answer: "A'(-1,1), B'(-2,4), C'(-5,2)" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 