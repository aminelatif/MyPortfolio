export default {
  id: "vecteurs-espace",
  title: "Vecteurs de l'espace",
  parts: [
    {
      id: "notion-vecteur-espace",
      title: "Notion de vecteur dans l'espace",
      definition: "Dans l'espace, un vecteur est défini par trois coordonnées (x, y, z) dans un repère orthonormé. Il représente une translation et possède une direction, un sens et une norme. On note les vecteurs de l'espace par des lettres surmontées d'une flèche comme $\\vec{u}$.",
      example: "Si A(1, 2, 3) et B(4, 5, 0) sont deux points de l'espace, le vecteur $\\vec{AB}$ a pour coordonnées (4-1, 5-2, 0-3) = (3, 3, -3).",
      gameQuestions: [
        { question: "Quelles sont les coordonnées du vecteur $\\vec{AB}$ si A(2, -1, 4) et B(-3, 2, 5)?", answer: "(-5, 3, 1)" },
        { question: "Si un vecteur a pour coordonnées (2, 3, -1), quelle est sa norme?", answer: "$\\sqrt{2^2 + 3^2 + (-1)^2} = \\sqrt{14}$" }
      ],
      exercises: [
        { question: "Soient les points A(1, 2, -1), B(3, 0, 2) et C(2, -1, 3). Montrez que le triangle ABC est isocèle.", answer: "Calculons les normes des vecteurs :\n$\\|\\vec{AB}\\| = \\sqrt{(3-1)^2 + (0-2)^2 + (2-(-1))^2} = \\sqrt{4 + 4 + 9} = \\sqrt{17}$\n$\\|\\vec{BC}\\| = \\sqrt{(2-3)^2 + (-1-0)^2 + (3-2)^2} = \\sqrt{1 + 1 + 1} = \\sqrt{3}$\n$\\|\\vec{AC}\\| = \\sqrt{(2-1)^2 + (-1-2)^2 + (3-(-1))^2} = \\sqrt{1 + 9 + 16} = \\sqrt{26}$\n\nComme les trois côtés ont des longueurs différentes, le triangle n'est pas isocèle. C'est un triangle scalène." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-vecteurs",
      title: "Opérations sur les vecteurs",
      definition: "Les vecteurs de l'espace peuvent être additionnés, soustraits et multipliés par un scalaire. Si $\\vec{u}(x, y, z)$ et $\\vec{v}(x', y', z')$ sont deux vecteurs, alors $\\vec{u} + \\vec{v} = (x+x', y+y', z+z')$ et $\\lambda\\vec{u} = (\\lambda x, \\lambda y, \\lambda z)$. La norme d'un vecteur est $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.",
      example: "Si $\\vec{u}(2, -1, 3)$ et $\\vec{v}(0, 4, -2)$, alors $\\vec{u} + \\vec{v} = (2+0, -1+4, 3+(-2)) = (2, 3, 1)$ et $2\\vec{u} = (2 \\cdot 2, 2 \\cdot (-1), 2 \\cdot 3) = (4, -2, 6)$.",
      gameQuestions: [
        { question: "Si $\\vec{u}(3, -2, 1)$ et $\\vec{v}(-1, 4, 2)$, calculez $2\\vec{u} - 3\\vec{v}$.", answer: "(6, -4, 2) - (-3, 12, 6) = (9, -16, -4)" },
        { question: "Soit $\\vec{w} = \\vec{u} + \\vec{v}$ où $\\vec{u}(1, -1, 2)$ et $\\vec{v}(3, 0, -3)$. Quelle est la norme de $\\vec{w}$?", answer: "$\\vec{w} = (4, -1, -1)$, donc $\\|\\vec{w}\\| = \\sqrt{16 + 1 + 1} = \\sqrt{18} = 3\\sqrt{2}$" }
      ],
      exercises: [
        { question: "Soit un tétraèdre ABCD avec A(1, 0, 0), B(0, 1, 0), C(0, 0, 1) et D(2, 2, 2). Déterminez le vecteur $\\vec{AB} + \\vec{AC} + \\vec{AD}$ et interprétez le résultat.", answer: "$\\vec{AB} = (0-1, 1-0, 0-0) = (-1, 1, 0)$\n$\\vec{AC} = (0-1, 0-0, 1-0) = (-1, 0, 1)$\n$\\vec{AD} = (2-1, 2-0, 2-0) = (1, 2, 2)$\n\n$\\vec{AB} + \\vec{AC} + \\vec{AD} = (-1, 1, 0) + (-1, 0, 1) + (1, 2, 2) = (-1, 3, 3)$\n\nCe vecteur représente la somme des trois arêtes issues du point A du tétraèdre." }
      ],
      gameType: "quiz"
    },
    {
      id: "produit-scalaire-espace",
      title: "Produit scalaire dans l'espace",
      definition: "Le produit scalaire de deux vecteurs $\\vec{u}(x, y, z)$ et $\\vec{v}(x', y', z')$ dans l'espace est défini par $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$. C'est aussi égal à $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\vec{u},\\vec{v})$. Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul.",
      example: "Si $\\vec{u}(1, 2, 3)$ et $\\vec{v}(4, -2, 1)$, leur produit scalaire est $\\vec{u} \\cdot \\vec{v} = 1 \\times 4 + 2 \\times (-2) + 3 \\times 1 = 4 - 4 + 3 = 3$.",
      gameQuestions: [
        { question: "Si $\\vec{u}(2, 0, -1)$ et $\\vec{v}(3, 4, 6)$, calculez $\\vec{u} \\cdot \\vec{v}$.", answer: "$2 \\times 3 + 0 \\times 4 + (-1) \\times 6 = 6 + 0 - 6 = 0$. Les vecteurs sont orthogonaux." },
        { question: "Calculez l'angle entre les vecteurs $\\vec{u}(1, 1, 1)$ et $\\vec{v}(1, 0, -1)$.", answer: "$\\vec{u} \\cdot \\vec{v} = 1 \\times 1 + 1 \\times 0 + 1 \\times (-1) = 1 - 1 = 0$. Donc $\\cos(\\vec{u},\\vec{v}) = 0$, ce qui donne un angle de 90°." }
      ],
      exercises: [
        { question: "Soit un cube ABCDEFGH d'arête 1. A(0,0,0), B(1,0,0), C(1,1,0), D(0,1,0), E(0,0,1), F(1,0,1), G(1,1,1), H(0,1,1). Calculez le produit scalaire $\\vec{AC} \\cdot \\vec{EG}$ et interprétez géométriquement.", answer: "$\\vec{AC} = (1-0, 1-0, 0-0) = (1, 1, 0)$\n$\\vec{EG} = (1-0, 1-0, 1-1) = (1, 1, 0)$\n\n$\\vec{AC} \\cdot \\vec{EG} = 1 \\times 1 + 1 \\times 1 + 0 \\times 0 = 2$\n\nGéométriquement, ces vecteurs sont parallèles (même direction et même sens), ce qui explique que leur produit scalaire soit positif et égal au produit de leurs normes : $\\|\\vec{AC}\\| \\times \\|\\vec{EG}\\| = \\sqrt{2} \\times \\sqrt{2} = 2$." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "produit-vectoriel",
      title: "Produit vectoriel dans l'espace",
      definition: "Le produit vectoriel de deux vecteurs $\\vec{u}(x, y, z)$ et $\\vec{v}(x', y', z')$ est un vecteur perpendiculaire à $\\vec{u}$ et $\\vec{v}$, défini par $\\vec{u} \\times \\vec{v} = (yz' - zy', zx' - xz', xy' - yx')$. Sa norme est $\\|\\vec{u} \\times \\vec{v}\\| = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\sin(\\vec{u},\\vec{v})$.",
      example: "Si $\\vec{u}(1, 0, 0)$ et $\\vec{v}(0, 1, 0)$ sont les vecteurs unitaires selon les axes x et y, leur produit vectoriel est $\\vec{u} \\times \\vec{v} = (0, 0, 1)$, c'est-à-dire le vecteur unitaire selon l'axe z.",
      gameQuestions: [
        { question: "Calculez $\\vec{i} \\times \\vec{j}$ où $\\vec{i}(1, 0, 0)$ et $\\vec{j}(0, 1, 0)$ sont les vecteurs de base.", answer: "$\\vec{k}(0, 0, 1)$" },
        { question: "Si $\\vec{u}(2, 1, 0)$ et $\\vec{v}(0, 3, 4)$, calculez $\\vec{u} \\times \\vec{v}$.", answer: "$(1 \\times 4 - 0 \\times 3, 0 \\times 0 - 2 \\times 4, 2 \\times 3 - 1 \\times 0) = (4, -8, 6)$" }
      ],
      exercises: [
        { question: "Trois points A(1, 0, 0), B(0, 1, 0) et C(0, 0, 1) déterminent un triangle. Calculez l'aire de ce triangle à l'aide du produit vectoriel.", answer: "$\\vec{AB} = (-1, 1, 0)$ et $\\vec{AC} = (-1, 0, 1)$\n\n$\\vec{AB} \\times \\vec{AC} = (1 \\times 1 - 0 \\times 0, 0 \\times (-1) - (-1) \\times 1, (-1) \\times 0 - 1 \\times (-1)) = (1, 1, 1)$\n\n$\\|\\vec{AB} \\times \\vec{AC}\\| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$\n\nL'aire du triangle est la moitié de la norme du produit vectoriel : Aire = $\\frac{1}{2} \\times \\sqrt{3} = \\frac{\\sqrt{3}}{2}$ unités carrées." }
      ],
      gameType: "quiz"
    }
  ]
}; 