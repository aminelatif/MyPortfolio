export default {
  id: "matrices",
  title: "Matrices",
  parts: [
    {
      id: "definition-operations",
      title: "Définition et opérations",
      sections: [
        { title: "Définition", content: "Une matrice est un tableau rectangulaire de nombres. Les matrices sont utilisées en économie pour représenter des systèmes d'équations linéaires, des tableaux d'entrées-sorties, et des modèles d'équilibre général. Les opérations de base sur les matrices sont l'addition, la multiplication par un scalaire, et la multiplication matricielle." },
        { title: "Exemple", content: "Pour deux matrices A = [[1,2],[3,4]] et B = [[5,6],[7,8]], leur somme est A+B = [[6,8],[10,12]] et leur produit est A×B = [[19,22],[43,50]]. En économie, une matrice de coefficients techniques peut représenter les quantités d'intrants nécessaires pour produire une unité de chaque bien." },
        { title: "Remarque", content: "Les matrices sont fondamentales pour l'analyse des systèmes économiques complexes et l'étude des interdépendances entre secteurs." }
      ],
      gameQuestions: [
        { question: "Quelle est la somme des matrices [[1,2],[3,4]] et [[5,6],[7,8]]?", answer: "[[6,8],[10,12]]" },
        { question: "Quel est le produit de la matrice [[1,2],[3,4]] par le scalaire 2?", answer: "[[2,4],[6,8]]" }
      ],
      exercises: [
        { question: "Une entreprise produit deux biens A et B. La matrice de coûts unitaires est C = [[10,15],[20,25]], où la première ligne représente les coûts directs et la seconde les coûts indirects. (a) Calculez le coût total pour produire 100 unités de A et 200 unités de B. (b) Si les prix de vente sont respectivement 30 et 40, calculez le profit total.", answer: "(a) Le vecteur de production est P = [100,200]. Le coût total est C×P = [[10,15],[20,25]]×[100,200] = [10×100+15×200, 20×100+25×200] = [4000, 7000]. Le coût total est donc 4000 + 7000 = 11000.\n\n(b) Le revenu total est 100×30 + 200×40 = 11000. Le profit est donc 11000 - 11000 = 0." }
      ],
      gameType: "quiz"
    },
    {
      id: "determinant-inverse",
      title: "Déterminant et matrice inverse",
      sections: [
        { title: "Définition", content: "Le déterminant d'une matrice carrée est un nombre qui caractérise certaines propriétés de la matrice. Une matrice carrée est inversible si et seulement si son déterminant est non nul. La matrice inverse A^(-1) d'une matrice A vérifie A×A^(-1) = A^(-1)×A = I, où I est la matrice identité. En économie, les matrices inverses sont utilisées pour résoudre des systèmes d'équations et calculer des multiplicateurs." },
        { title: "Exemple", content: "Pour une matrice A = [[a,b],[c,d]], le déterminant est det(A) = ad-bc. Si det(A) ≠ 0, alors A^(-1) = (1/det(A))×[[d,-b],[-c,a]]. Dans un modèle d'équilibre général, la matrice inverse des coefficients techniques permet de calculer les effets d'une variation de la demande finale sur la production totale." },
        { title: "Remarque", content: "Le déterminant et l'inverse sont cruciaux pour l'analyse des systèmes économiques et la résolution des modèles d'équilibre." }
      ],
      gameQuestions: [
        { question: "Quel est le déterminant de la matrice [[2,3],[4,5]]?", answer: "2×5 - 3×4 = -2" },
        { question: "Une matrice est-elle inversible si son déterminant est nul?", answer: "Non" }
      ],
      exercises: [
        { question: "Dans un modèle d'équilibre général, la matrice des coefficients techniques est A = [[0.2,0.3],[0.4,0.1]]. (a) Calculez le déterminant de (I-A), où I est la matrice identité. (b) Déterminez si la matrice (I-A) est inversible. (c) Si la demande finale est [100,200], calculez la production totale nécessaire.", answer: "(a) I-A = [[0.8,-0.3],[-0.4,0.9]]. Le déterminant est 0.8×0.9 - (-0.3)×(-0.4) = 0.72 - 0.12 = 0.6.\n\n(b) Comme le déterminant est non nul (0.6), la matrice (I-A) est inversible.\n\n(c) La production totale X vérifie (I-A)X = D, où D est la demande finale. Donc X = (I-A)^(-1)×D. La matrice inverse est (1/0.6)×[[0.9,0.3],[0.4,0.8]] = [[1.5,0.5],[0.67,1.33]]. Donc X = [[1.5,0.5],[0.67,1.33]]×[100,200] = [250,233]." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "Les matrices sont des outils essentiels en économie pour l'analyse des tableaux d'entrées-sorties, la résolution de systèmes d'équations d'équilibre, et l'étude des multiplicateurs. Elles permettent de modéliser les interdépendances entre secteurs économiques et d'analyser les effets d'une variation de la demande finale sur l'ensemble de l'économie." },
        { title: "Exemple", content: "Dans un tableau d'entrées-sorties, la matrice A des coefficients techniques montre les quantités d'intrants nécessaires pour produire une unité de chaque bien. La matrice (I-A)^(-1) est la matrice des multiplicateurs, qui permet de calculer les effets totaux d'une variation de la demande finale. Pour une économie à deux secteurs, si A = [[0.2,0.3],[0.4,0.1]], alors (I-A)^(-1) = [[1.5,0.5],[0.67,1.33]]." },
        { title: "Remarque", content: "L'analyse des matrices en économie permet de comprendre les effets d'entraînement et les interdépendances sectorielles." }
      ],
      gameQuestions: [
        { question: "Dans un tableau d'entrées-sorties, que représente la matrice des coefficients techniques?", answer: "Les quantités d'intrants nécessaires pour produire une unité de chaque bien" },
        { question: "Que permet de calculer la matrice (I-A)^(-1) dans un modèle d'équilibre général?", answer: "Les effets totaux d'une variation de la demande finale" }
      ],
      exercises: [
        { question: "Une économie est composée de deux secteurs : l'agriculture et l'industrie. La matrice des coefficients techniques est A = [[0.2,0.3],[0.4,0.1]]. (a) Interprétez les coefficients de cette matrice. (b) Si la demande finale augmente de 100 unités dans le secteur agricole et de 200 unités dans le secteur industriel, calculez l'augmentation totale de la production dans chaque secteur. (c) Calculez le multiplicateur total de cette économie.", answer: "(a) Les coefficients indiquent que :\n- Pour produire 1 unité agricole, il faut 0.2 unité agricole et 0.4 unité industrielle\n- Pour produire 1 unité industrielle, il faut 0.3 unité agricole et 0.1 unité industrielle\n\n(b) La matrice (I-A)^(-1) = [[1.5,0.5],[0.67,1.33]]. L'augmentation de la production est donc :\n[[1.5,0.5],[0.67,1.33]]×[100,200] = [250,233]\n\n(c) Le multiplicateur total est la somme des éléments de la matrice (I-A)^(-1), soit 1.5 + 0.5 + 0.67 + 1.33 = 4. Cela signifie qu'une augmentation de 1 unité de la demande finale génère une augmentation totale de 4 unités de production." }
      ],
      gameType: "quiz"
    },
    {
      id: "modeles-economiques",
      title: "Modèles économiques et matrices",
      sections: [
        { title: "Définition", content: "Les matrices sont utilisées dans de nombreux modèles économiques, notamment les modèles d'équilibre général, les modèles de croissance, et les modèles de planification. Elles permettent de représenter les relations entre variables économiques et de résoudre des systèmes d'équations complexes. Les modèles matriciels sont particulièrement utiles pour l'analyse des politiques économiques et la prévision des effets des chocs exogènes." },
        { title: "Exemple", content: "Dans un modèle de croissance à deux secteurs, la matrice de transition A représente les coefficients de capital par unité de production. La solution du système X(t+1) = AX(t) + D(t) donne l'évolution de la production au fil du temps. Pour une matrice A = [[0.8,0.2],[0.3,0.7]] et une demande finale constante D = [100,200], la production d'équilibre est X = (I-A)^(-1)D = [500,1000]." },
        { title: "Remarque", content: "Les modèles matriciels sont fondamentaux pour l'analyse des politiques économiques et la planification stratégique." }
      ],
      gameQuestions: [
        { question: "Dans un modèle de croissance, que représente la matrice de transition?", answer: "Les coefficients de capital par unité de production" },
        { question: "Comment calcule-t-on la production d'équilibre dans un modèle matriciel?", answer: "X = (I-A)^(-1)D" }
      ],
      exercises: [
        { question: "Un économiste étudie un modèle de croissance à deux secteurs. La matrice de transition est A = [[0.8,0.2],[0.3,0.7]] et la demande finale est D = [100,200]. (a) Calculez la production d'équilibre. (b) Si la demande finale augmente de 10% dans chaque secteur, quelle est la nouvelle production d'équilibre? (c) Calculez le multiplicateur de cette économie.", answer: "(a) La production d'équilibre est X = (I-A)^(-1)D. I-A = [[0.2,-0.2],[-0.3,0.3]]. Le déterminant est 0.06. La matrice inverse est (1/0.06)×[[0.3,0.2],[0.3,0.2]] = [[5,3.33],[5,3.33]]. Donc X = [[5,3.33],[5,3.33]]×[100,200] = [1166.67,1166.67].\n\n(b) La nouvelle demande finale est D' = [110,220]. La nouvelle production d'équilibre est X' = [[5,3.33],[5,3.33]]×[110,220] = [1283.33,1283.33].\n\n(c) Le multiplicateur est la somme des éléments de la matrice (I-A)^(-1), soit 5 + 3.33 + 5 + 3.33 = 16.66. Cela signifie qu'une augmentation de 1 unité de la demande finale génère une augmentation totale de 16.66 unités de production." }
      ],
      gameType: "quiz"
    }
  ]
}; 