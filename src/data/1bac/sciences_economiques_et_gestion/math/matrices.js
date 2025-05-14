export default {
  id: "matrices",
  title: "Matrices",
  parts: [
    {
      id: "definition-types",
      title: "Définition et types de matrices",
      definition: "Une matrice est un tableau rectangulaire de nombres disposés en lignes et colonnes. Une matrice de dimensions m×n comporte m lignes et n colonnes. Les matrices peuvent être carrées (m=n), triangulaires, diagonales, symétriques, etc. En économie, les matrices permettent de représenter et manipuler des données multidimensionnelles, comme les relations entre différents secteurs d'une économie.",
      example: "La matrice A = $\\begin{pmatrix} 3 & 2 & 1 \\\\ 4 & 5 & 6 \\end{pmatrix}$ est de dimension 2×3 (2 lignes, 3 colonnes). La matrice B = $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ est une matrice carrée d'ordre 2, qui est aussi la matrice identité. Dans un modèle économique, une matrice pourrait représenter les quantités de différentes matières premières nécessaires pour produire différents biens.",
      gameQuestions: [
        { question: "Quelles sont les dimensions de la matrice $\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\\\ 10 & 11 & 12 \\end{pmatrix}$?", answer: "4×3" },
        { question: "Qu'est-ce qu'une matrice triangulaire supérieure?", answer: "Une matrice carrée dont tous les éléments en dessous de la diagonale principale sont nuls" }
      ],
      exercises: [
        { question: "Soit la matrice A = $\\begin{pmatrix} 2 & 3 & 5 \\\\ 1 & -2 & 4 \\\\ 0 & 7 & -3 \\end{pmatrix}$. (a) Donnez sa dimension. (b) Est-elle triangulaire? (c) Est-elle symétrique? (d) Quels sont les éléments a₁₃ et a₃₁?", answer: "(a) A est une matrice carrée de dimension 3×3.\n\n(b) A n'est pas triangulaire car elle possède des éléments non nuls à la fois au-dessus et en dessous de la diagonale principale.\n\n(c) A n'est pas symétrique car a₁₂ = 3 ≠ a₂₁ = 1, par exemple.\n\n(d) L'élément a₁₃ est celui qui se trouve à la 1ère ligne et 3ème colonne, soit a₁₃ = 5. L'élément a₃₁ est celui qui se trouve à la 3ème ligne et 1ère colonne, soit a₃₁ = 0." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-matrices",
      title: "Opérations sur les matrices",
      definition: "Les principales opérations sur les matrices sont l'addition, la soustraction, la multiplication par un scalaire et la multiplication matricielle. Pour additionner ou soustraire deux matrices, elles doivent avoir les mêmes dimensions. Pour multiplier deux matrices A et B, le nombre de colonnes de A doit être égal au nombre de lignes de B. Ces opérations permettent de modéliser des changements ou des transformations dans les systèmes économiques.",
      example: "Si A = $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ et B = $\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$, alors A+B = $\\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$. Le produit AB = $\\begin{pmatrix} 1×5+2×7 & 1×6+2×8 \\\\ 3×5+4×7 & 3×6+4×8 \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$. Dans un modèle économique, la multiplication matricielle peut représenter la combinaison de processus de production.",
      gameQuestions: [
        { question: "Si A = $\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ et B = $\\begin{pmatrix} 0 & 1 \\\\ 5 & 2 \\end{pmatrix}$, calculez A + 2B.", answer: "$\\begin{pmatrix} 2+2×0 & 3+2×1 \\\\ 1+2×5 & 4+2×2 \\end{pmatrix} = \\begin{pmatrix} 2 & 5 \\\\ 11 & 8 \\end{pmatrix}$" },
        { question: "Si A = $\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ et B = $\\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$, calculez AB.", answer: "$\\begin{pmatrix} 2×1+1×2 & 2×0+1×3 \\\\ 3×1+4×2 & 3×0+4×3 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$" }
      ],
      exercises: [
        { question: "Une entreprise fabrique deux produits (P₁ et P₂) qui nécessitent trois types de matières premières (M₁, M₂, M₃). La matrice A = $\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\\\ 4 & 1 \\end{pmatrix}$ représente les unités de chaque matière première nécessaires pour fabriquer une unité de chaque produit (aᵢⱼ est le nombre d'unités de Mᵢ pour fabriquer une unité de Pⱼ). Si l'entreprise veut produire 100 unités de P₁ et 150 unités de P₂, utilisez la multiplication matricielle pour déterminer la quantité totale de chaque matière première nécessaire.", answer: "Nous devons calculer le produit de la matrice A par le vecteur de production $\\begin{pmatrix} 100 \\\\ 150 \\end{pmatrix}$ :\n\n$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\\\ 4 & 1 \\end{pmatrix} \\begin{pmatrix} 100 \\\\ 150 \\end{pmatrix} = \\begin{pmatrix} 2×100 + 3×150 \\\\ 1×100 + 2×150 \\\\ 4×100 + 1×150 \\end{pmatrix} = \\begin{pmatrix} 200 + 450 \\\\ 100 + 300 \\\\ 400 + 150 \\end{pmatrix} = \\begin{pmatrix} 650 \\\\ 400 \\\\ 550 \\end{pmatrix}$\n\nDonc, l'entreprise a besoin de 650 unités de M₁, 400 unités de M₂ et 550 unités de M₃." }
      ],
      gameType: "quiz"
    },
    {
      id: "determinant-inverse",
      title: "Déterminant et matrice inverse",
      definition: "Le déterminant d'une matrice carrée est un nombre qui fournit des informations importantes sur la matrice. Pour une matrice 2×2, le déterminant est ad-bc. Une matrice carrée A est inversible si et seulement si son déterminant est non nul. L'inverse de A, notée A⁻¹, est la matrice telle que A·A⁻¹ = A⁻¹·A = I (matrice identité). En économie, les matrices inverses sont utilisées pour résoudre des systèmes d'équations linéaires, comme dans les modèles d'entrées-sorties.",
      example: "Pour la matrice A = $\\begin{pmatrix} 3 & 1 \\\\ 2 & 2 \\end{pmatrix}$, le déterminant est det(A) = 3×2 - 1×2 = 6 - 2 = 4. Comme det(A) ≠ 0, A est inversible. Son inverse est A⁻¹ = $\\frac{1}{det(A)} \\begin{pmatrix} 2 & -1 \\\\ -2 & 3 \\end{pmatrix} = \\frac{1}{4} \\begin{pmatrix} 2 & -1 \\\\ -2 & 3 \\end{pmatrix} = \\begin{pmatrix} 0.5 & -0.25 \\\\ -0.5 & 0.75 \\end{pmatrix}$",
      gameQuestions: [
        { question: "Quel est le déterminant de la matrice $\\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$?", answer: "4×3 - 2×1 = 12 - 2 = 10" },
        { question: "Une matrice dont le déterminant est égal à zéro est-elle inversible?", answer: "Non, une telle matrice n'est pas inversible" }
      ],
      exercises: [
        { question: "Considérez la matrice A = $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$. (a) Calculez son déterminant. (b) Si possible, trouvez sa matrice inverse A⁻¹. (c) Vérifiez que A·A⁻¹ = I.", answer: "(a) det(A) = 2×3 - 1×5 = 6 - 5 = 1\n\n(b) Comme det(A) = 1 ≠ 0, A est inversible.\nA⁻¹ = $\\frac{1}{det(A)} \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$\n\n(c) Vérifions que A·A⁻¹ = I :\nA·A⁻¹ = $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} = \\begin{pmatrix} 2×3 + 1×(-5) & 2×(-1) + 1×2 \\\\ 5×3 + 3×(-5) & 5×(-1) + 3×2 \\end{pmatrix} = \\begin{pmatrix} 6 - 5 & -2 + 2 \\\\ 15 - 15 & -5 + 6 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I$" }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      definition: "Les matrices sont largement utilisées en économie, notamment dans les modèles d'entrées-sorties de Leontief, l'analyse des chaînes de Markov pour les parts de marché, les modèles d'équilibre général, et la résolution de systèmes d'équations linéaires. Elles permettent de représenter les interdépendances complexes entre les différents secteurs d'une économie ou les différentes variables économiques.",
      example: "Dans un modèle d'entrées-sorties avec 3 secteurs (agriculture, industrie, services), une matrice A = $\\begin{pmatrix} 0.2 & 0.1 & 0.0 \\\\ 0.3 & 0.4 & 0.2 \\\\ 0.1 & 0.2 & 0.3 \\end{pmatrix}$ pourrait représenter les coefficients techniques, où aᵢⱼ est la quantité produite par le secteur i nécessaire pour produire une unité dans le secteur j. Si la demande finale est d = $\\begin{pmatrix} 100 \\\\ 200 \\\\ 300 \\end{pmatrix}$, alors la production totale x nécessaire pour satisfaire cette demande est donnée par x = (I-A)⁻¹d.",
      gameQuestions: [
        { question: "Dans un modèle à deux secteurs, si la matrice des coefficients techniques est A = $\\begin{pmatrix} 0.2 & 0.3 \\\\ 0.4 & 0.1 \\end{pmatrix}$, que représente l'élément a₁₂ = 0.3?", answer: "La quantité produite par le secteur 1 nécessaire pour produire une unité dans le secteur 2" },
        { question: "Dans un modèle d'entrées-sorties, pourquoi la matrice (I-A) doit-elle être inversible?", answer: "Pour pouvoir calculer la production totale nécessaire pour satisfaire la demande finale" }
      ],
      exercises: [
        { question: "Considérez une économie simplifiée à deux secteurs (1 : Agriculture, 2 : Industrie) avec la matrice des coefficients techniques A = $\\begin{pmatrix} 0.2 & 0.3 \\\\ 0.4 & 0.5 \\end{pmatrix}$. (a) Calculez la matrice (I-A). (b) Déterminez si cette matrice est inversible en calculant son déterminant. (c) Si la demande finale est d = $\\begin{pmatrix} 100 \\\\ 150 \\end{pmatrix}$, calculez la production totale nécessaire x = (I-A)⁻¹d.", answer: "(a) I-A = $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} - \\begin{pmatrix} 0.2 & 0.3 \\\\ 0.4 & 0.5 \\end{pmatrix} = \\begin{pmatrix} 0.8 & -0.3 \\\\ -0.4 & 0.5 \\end{pmatrix}$\n\n(b) det(I-A) = 0.8×0.5 - (-0.3)×(-0.4) = 0.4 - 0.12 = 0.28 ≠ 0, donc (I-A) est inversible.\n\n(c) (I-A)⁻¹ = $\\frac{1}{det(I-A)} \\begin{pmatrix} 0.5 & 0.3 \\\\ 0.4 & 0.8 \\end{pmatrix} = \\frac{1}{0.28} \\begin{pmatrix} 0.5 & 0.3 \\\\ 0.4 & 0.8 \\end{pmatrix} ≈ \\begin{pmatrix} 1.79 & 1.07 \\\\ 1.43 & 2.86 \\end{pmatrix}$\n\nLa production totale nécessaire est :\nx = (I-A)⁻¹d = $\\begin{pmatrix} 1.79 & 1.07 \\\\ 1.43 & 2.86 \\end{pmatrix} \\begin{pmatrix} 100 \\\\ 150 \\end{pmatrix} = \\begin{pmatrix} 1.79×100 + 1.07×150 \\\\ 1.43×100 + 2.86×150 \\end{pmatrix} = \\begin{pmatrix} 179 + 160.5 \\\\ 143 + 429 \\end{pmatrix} = \\begin{pmatrix} 339.5 \\\\ 572 \\end{pmatrix}$\n\nLe secteur 1 (Agriculture) doit produire environ 339.5 unités et le secteur 2 (Industrie) environ 572 unités pour satisfaire la demande finale." }
      ],
      gameType: "quiz"
    }
  ]
}; 