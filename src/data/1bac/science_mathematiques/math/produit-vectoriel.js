export default {
  id: "produit-vectoriel",
  title: "Produit vectoriel",
  parts: [
    {
      id: "definition-proprietes",
      title: "Définition et propriétés",
      definition: "Le produit vectoriel de deux vecteurs u⃗ et v⃗ est un vecteur noté u⃗ × v⃗, orthogonal à u⃗ et v⃗, de norme ||u⃗ × v⃗|| = ||u⃗|| · ||v⃗|| · sin(θ) où θ est l'angle entre u⃗ et v⃗, et de sens donné par la règle de la main droite.",
      example: "Si u⃗(1, 0, 0) et v⃗(0, 1, 0) sont les vecteurs unitaires selon les axes x et y, alors u⃗ × v⃗ = (0, 0, 1) est le vecteur unitaire selon l'axe z.",
      gameQuestions: [
        { question: "Que vaut la norme du produit vectoriel de deux vecteurs orthogonaux de norme 1 ?", answer: "1" }
      ],
      exercises: [
        { question: "Calculez le produit vectoriel des vecteurs u⃗(2, 1, -1) et v⃗(0, 2, 3).", answer: "u⃗ × v⃗ = (1·3 - (-1)·2, (-1)·0 - 2·3, 2·2 - 1·0) = (5, -6, 4)" }
      ],
      gameType: "quiz"
    },
    {
      id: "calcul-produit-vectoriel",
      title: "Calcul du produit vectoriel",
      definition: "Si u⃗(x₁, y₁, z₁) et v⃗(x₂, y₂, z₂), alors u⃗ × v⃗ = (y₁z₂ - z₁y₂, z₁x₂ - x₁z₂, x₁y₂ - y₁x₂). On peut utiliser le déterminant : u⃗ × v⃗ = det(i⃗, j⃗, k⃗, x₁, y₁, z₁, x₂, y₂, z₂).",
      example: "Le produit vectoriel de u⃗(1, 2, 3) et v⃗(4, 5, 6) est u⃗ × v⃗ = (2·6 - 3·5, 3·4 - 1·6, 1·5 - 2·4) = (-3, 6, -3).",
      gameQuestions: [
        { question: "Comment calculer l'aire d'un parallélogramme construit sur deux vecteurs u⃗ et v⃗ ?", answer: "Aire = ||u⃗ × v⃗||" }
      ],
      exercises: [
        { question: "Calculez l'aire du triangle ABC où A(1, 0, 0), B(0, 1, 0) et C(0, 0, 1).", answer: "Aire = (1/2) · ||AB⃗ × AC⃗|| = (1/2) · ||(-1, 1, 0) × (-1, 0, 1)|| = (1/2) · ||(1, 1, 1)|| = (1/2) · √3 = √3/2" }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-geometriques",
      title: "Applications géométriques",
      definition: "Le produit vectoriel est utilisé pour calculer des aires, déterminer l'équation d'un plan, vérifier que trois points sont alignés, et définir des repères orthonormés directs.",
      example: "L'équation du plan passant par un point A et de vecteurs directeurs u⃗ et v⃗ peut s'écrire sous la forme (u⃗ × v⃗)(M - A) = 0.",
      gameQuestions: [
        { question: "Comment calculer le volume d'un parallélépipède construit sur trois vecteurs u⃗, v⃗ et w⃗ ?", answer: "Volume = |(u⃗ × v⃗) · w⃗|" }
      ],
      exercises: [
        { question: "Trois points A(1,2,3), B(2,4,5) et C(3,6,7) sont-ils alignés ? Justifiez.", answer: "On calcule les vecteurs AB⃗(1,2,2) et AC⃗(2,4,4). On a AC⃗ = 2AB⃗, donc les vecteurs sont colinéaires et les trois points sont alignés." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 