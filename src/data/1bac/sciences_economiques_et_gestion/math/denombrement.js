export default {
  id: "denombrement",
  title: "Dénombrement",
  parts: [
    {
      id: "principes-denombrement",
      title: "Principes fondamentaux du dénombrement",
      sections: [
        { title: "Définition", content: "Le dénombrement est l'étude du nombre de façons d'arranger ou de choisir des objets. Deux principes fondamentaux sont le principe multiplicatif (si une opération peut être réalisée en m façons, suivie d'une seconde opération en n façons, alors l'ensemble peut être réalisé en m×n façons) et le principe additif (si une tâche peut être réalisée soit en m façons, soit en n façons, alors le nombre total de façons est m+n)." },
        { title: "Exemple", content: "Une entreprise propose 3 modèles de téléphones et 4 forfaits différents. Par le principe multiplicatif, un client peut choisir parmi 3×4=12 combinaisons téléphone-forfait. Si un restaurant propose 5 entrées, 8 plats et 4 desserts, un client qui choisit un menu complet a 5×8×4=160 possibilités." },
        { title: "Remarque", content: "Ces principes sont fondamentaux en économie pour évaluer les possibilités de choix des consommateurs et planifier les combinaisons de produits." }
      ],
      gameQuestions: [
        { question: "Une agence de voyage propose 4 destinations et 3 types d'hébergement pour chaque destination. Combien de choix différents un client a-t-il?", answer: "12 choix" },
        { question: "Un magasin vend des ordinateurs avec 3 processeurs différents, 2 types de mémoire RAM et 2 disques durs. Combien de configurations différentes sont disponibles?", answer: "12 configurations" }
      ],
      exercises: [
        { question: "Une entreprise souhaite créer un code produit composé de 2 lettres (parmi les 26 lettres de l'alphabet) suivies de 3 chiffres (de 0 à 9). (a) Combien de codes produits différents peuvent être créés? (b) Si l'entreprise décide que les lettres et les chiffres ne peuvent pas être répétés, combien de codes restent possibles?", answer: "(a) Par le principe multiplicatif, nous avons 26 choix pour la première lettre, 26 pour la deuxième, 10 pour le premier chiffre, 10 pour le deuxième et 10 pour le troisième. Le nombre total de codes possibles est donc 26×26×10×10×10 = 676×1000 = 676 000.\n\n(b) Sans répétition, nous avons 26 choix pour la première lettre, 25 pour la deuxième, 10 pour le premier chiffre, 9 pour le deuxième et 8 pour le troisième. Le nombre total est donc 26×25×10×9×8 = 650×720 = 468 000 codes différents." }
      ],
      gameType: "quiz"
    },
    {
      id: "permutations",
      title: "Permutations et arrangements",
      sections: [
        { title: "Définition", content: "Une permutation est un arrangement ordonné de tous les éléments d'un ensemble. Le nombre de permutations de n éléments distincts est n! = n×(n-1)×...×2×1. Un arrangement est une sélection ordonnée de k éléments parmi n (avec k ≤ n). Le nombre d'arrangements est A(n,k) = n!/(n-k)! = n×(n-1)×...×(n-k+1)." },
        { title: "Exemple", content: "Dans une entreprise de 5 employés, le nombre de façons de constituer un ordre de passage pour une présentation est 5! = 5×4×3×2×1 = 120. Pour choisir 3 finalistes parmi 10 candidats et les classer (or, argent, bronze), le nombre d'arrangements est A(10,3) = 10!/(10-3)! = 10×9×8 = 720." },
        { title: "Remarque", content: "Les permutations et arrangements sont essentiels en économie pour l'analyse des ordres de priorité, des classements et des séquences de décision." }
      ],
      gameQuestions: [
        { question: "Combien y a-t-il de permutations possibles des lettres du mot 'PARIS'?", answer: "5! = 120 permutations" },
        { question: "Dans un conseil d'administration de 8 personnes, de combien de façons peut-on choisir un président, un vice-président et un trésorier?", answer: "A(8,3) = 8×7×6 = 336 façons" }
      ],
      exercises: [
        { question: "Une chaîne de production nécessite le traitement de 7 pièces distinctes. (a) Combien d'ordres de traitement sont possibles? (b) Si certaines pièces doivent être traitées dans un ordre spécifique (la pièce 1 avant la 2, et la pièce 3 avant la 4), combien d'ordres de traitement restent possibles?", answer: "(a) Il y a 7! = 5040 ordres de traitement possibles.\n\n(b) Les contraintes imposent que la pièce 1 doit être traitée avant la 2, et la pièce 3 avant la 4. On peut considérer que la pièce 1 et 2 forment un bloc (2 possibilités d'arrangement interne) et que les pièces 3 et 4 forment un autre bloc (2 possibilités). Nous avons donc 5 éléments à ordonner (les deux blocs et les pièces 5, 6, 7), soit 5! = 120 possibilités, mais pour chaque ordonnancement, le bloc 1-2 peut être arrangé de 1 façon (car 1 doit précéder 2) et le bloc 3-4 de 1 façon (car 3 doit précéder 4). Le nombre total d'ordonnancements valides est donc 5! = 120." }
      ],
      gameType: "quiz"
    },
    {
      id: "combinaisons",
      title: "Combinaisons et coefficients binomiaux",
      sections: [
        { title: "Définition", content: "Une combinaison est une sélection non ordonnée de k éléments parmi n (avec k ≤ n). Le nombre de combinaisons est C(n,k) = n!/(k!×(n-k)!) et est aussi noté (n k). Ces nombres sont appelés coefficients binomiaux car ils apparaissent dans le développement de (a+b)^n. En économie, ils sont utilisés pour calculer le nombre de portefeuilles d'actifs possibles." },
        { title: "Exemple", content: "Pour former un comité de 3 personnes parmi 7 candidats, le nombre de possibilités est C(7,3) = 7!/(3!×4!) = 35. Lors d'un tirage de loto, le nombre de combinaisons de 6 numéros parmi 49 est C(49,6) = 49!/(6!×43!) = 13 983 816." },
        { title: "Remarque", content: "Les combinaisons sont fondamentales en finance pour l'analyse des portefeuilles d'investissement et la diversification des risques." }
      ],
      gameQuestions: [
        { question: "Un investisseur souhaite choisir 4 actions parmi 10 pour constituer son portefeuille. Combien de portefeuilles différents peut-il former?", answer: "C(10,4) = 210 portefeuilles" },
        { question: "Dans le développement de (x+y)^5, quel est le coefficient de x^2y^3?", answer: "C(5,2) = 10" }
      ],
      exercises: [
        { question: "Une entreprise doit sélectionner 3 projets à financer parmi 8 propositions, puis allouer à ces projets un budget 'élevé', 'moyen' ou 'faible', chaque niveau de budget ne pouvant être attribué qu'une fois. (a) Combien de sélections différentes de 3 projets sont possibles? (b) Pour chaque sélection, combien d'allocations de budget sont possibles? (c) Combien de scénarios complets (sélection + allocation) l'entreprise doit-elle évaluer?", answer: "(a) Le nombre de façons de sélectionner 3 projets parmi 8 est C(8,3) = 8!/(3!×5!) = 56.\n\n(b) Pour chaque sélection de 3 projets, le nombre de façons d'attribuer les trois niveaux de budget est le nombre de permutations de 3 éléments, soit 3! = 6.\n\n(c) Par le principe multiplicatif, le nombre total de scénarios à évaluer est C(8,3) × 3! = 56 × 6 = 336." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie et statistiques",
      sections: [
        { title: "Définition", content: "En économie et en statistiques, les techniques de dénombrement sont essentielles pour calculer les probabilités, analyser des combinaisons d'investissements ou de produits, et évaluer le nombre de résultats possibles dans des situations de décision. Le dénombrement est également utilisé en marketing pour déterminer toutes les combinaisons possibles de caractéristiques de produits." },
        { title: "Exemple", content: "Une entreprise propose 4 produits différents dans 3 gammes de prix. Pour une étude de marché visant à analyser les préférences des consommateurs, il faut considérer 4×3=12 scénarios distincts. Si une banque propose 5 types de prêts immobiliers, 3 durées et 4 options de remboursement, elle doit gérer 5×3×4=60 produits financiers différents." },
        { title: "Remarque", content: "Le dénombrement est crucial pour l'analyse des marchés, la gestion des risques et la planification stratégique en entreprise." }
      ],
      gameQuestions: [
        { question: "Un fabricant propose 3 modèles de téléphones, chacun disponible en 4 couleurs et 2 capacités de stockage. Combien d'options différentes doit-il gérer dans son inventaire?", answer: "3×4×2 = 24 options" },
        { question: "Dans un sondage, on demande de classer 4 marques par ordre de préférence. Combien de classements différents les répondants peuvent-ils fournir?", answer: "4! = 24 classements" }
      ],
      exercises: [
        { question: "Une entreprise de conseil doit constituer 2 équipes de travail pour 2 projets différents. Elle dispose de 10 consultants, et chaque équipe doit comprendre exactement 4 personnes. (a) Combien de façons différentes de constituer ces équipes sont possibles? (b) Si 3 consultants sont spécialisés dans le projet 1 et doivent y être affectés, et 2 autres sont spécialisés dans le projet 2 et doivent y être affectés, combien de compositions d'équipes restent possibles?", answer: "(a) Nous devons d'abord choisir 4 consultants parmi 10 pour la première équipe, soit C(10,4) = 210 possibilités. Les 6 consultants restants constituent la seconde équipe, dont nous devons en sélectionner 4, soit C(6,4) = 15 possibilités. Cependant, comme l'ordre des équipes importe (équipe 1 vs équipe 2), nous avons en fait C(10,4) = 210 possibilités au total.\n\n(b) Si 3 consultants doivent être dans l'équipe 1, il faut encore choisir 1 consultant parmi les 5 consultants non spécialisés, soit C(5,1) = 5 possibilités. Si 2 consultants doivent être dans l'équipe 2, il faut encore choisir 2 consultants parmi les 5 consultants non spécialisés et non sélectionnés pour l'équipe 1, soit C(4,2) = 6 possibilités pour chaque choix de l'équipe 1. Au total, il y a 5×6 = 30 compositions d'équipes possibles." }
      ],
      gameType: "quiz"
    }
  ]
}; 