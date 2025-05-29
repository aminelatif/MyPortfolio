export default {
  id: "logarithme-decimal",
  title: "Logarithme décimal",
  parts: [
    {
      id: "definition-proprietes",
      title: "Définition et propriétés",
      sections: [
        { title: "Définition", content: "Le logarithme décimal, noté log(x), est la fonction réciproque de la fonction exponentielle de base 10 : y = log(x) si et seulement si x = 10^y. Cette fonction est définie pour x > 0 et possède des propriétés fondamentales : log(1) = 0, log(10) = 1, log(a×b) = log(a) + log(b), log(a/b) = log(a) - log(b), et log(a^n) = n×log(a)." },
        { title: "Exemple", content: "log(100) = 2 car 10² = 100. log(0.1) = -1 car 10^(-1) = 0.1. Pour calculer log(200), on peut écrire log(200) = log(2×100) = log(2) + log(100) ≈ 0.301 + 2 = 2.301." },
        { title: "Remarque", content: "Le logarithme décimal est particulièrement utile en économie pour analyser les taux de croissance et les échelles logarithmiques." }
      ],
      gameQuestions: [
        { question: "Quelle est la valeur de log(1000)?", answer: "3" },
        { question: "Si log(a) = 2 et log(b) = 3, quelle est la valeur de log(a×b)?", answer: "5" }
      ],
      exercises: [
        { question: "Une entreprise a un chiffre d'affaires qui double tous les 5 ans. (a) Exprimez le taux de croissance annuel moyen en utilisant le logarithme décimal. (b) Calculez ce taux.", answer: "(a) Si le chiffre d'affaires double en 5 ans, alors 2 = (1+r)^5, où r est le taux de croissance annuel. En prenant le logarithme décimal des deux côtés : log(2) = 5×log(1+r).\n\n(b) log(2) ≈ 0.301, donc log(1+r) = 0.301/5 ≈ 0.0602. Par conséquent, 1+r = 10^0.0602 ≈ 1.149, et r ≈ 0.149 ou 14.9%." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "Le logarithme décimal est largement utilisé en économie pour analyser les taux de croissance, les échelles logarithmiques et les élasticités. Il permet de transformer des relations multiplicatives en relations additives, facilitant ainsi l'analyse des données économiques. Les échelles logarithmiques sont particulièrement utiles pour représenter des données qui varient sur plusieurs ordres de grandeur." },
        { title: "Exemple", content: "Pour calculer le taux de croissance annuel moyen d'un PIB qui passe de 1000 à 2000 en 10 ans, on utilise log(2000/1000)/10 = log(2)/10 ≈ 0.0301, soit environ 3% par an. En finance, le logarithme est utilisé pour calculer les rendements continus des actifs financiers." },
        { title: "Remarque", content: "L'utilisation du logarithme en économie permet de mieux comprendre les relations non linéaires et les taux de croissance." }
      ],
      gameQuestions: [
        { question: "Si un investissement double en 7 ans, quel est le taux de croissance annuel moyen (en utilisant le logarithme)?", answer: "log(2)/7 ≈ 0.043 ou 4.3%" },
        { question: "Pour une élasticité-prix de -2, comment le logarithme permet-il de l'exprimer?", answer: "log(Q2/Q1) = -2×log(P2/P1)" }
      ],
      exercises: [
        { question: "Un économiste étudie l'évolution du PIB d'un pays sur 20 ans. Le PIB est passé de 1000 à 4000 unités. (a) Calculez le taux de croissance annuel moyen en utilisant le logarithme décimal. (b) Si ce taux de croissance se maintient, combien d'années faudra-t-il pour que le PIB atteigne 8000 unités?", answer: "(a) Le taux de croissance annuel moyen est log(4000/1000)/20 = log(4)/20 ≈ 0.602/20 ≈ 0.0301, soit environ 3% par an.\n\n(b) Pour atteindre 8000, il faut que 4000×(1.03)^n = 8000, donc (1.03)^n = 2. En prenant le logarithme : n×log(1.03) = log(2), donc n = log(2)/log(1.03) ≈ 0.301/0.0128 ≈ 23.5 ans." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "echelles-logarithmiques",
      title: "Échelles logarithmiques",
      sections: [
        { title: "Définition", content: "Une échelle logarithmique est une échelle de mesure où les valeurs sont représentées par leur logarithme. Cette représentation est particulièrement utile pour visualiser des données qui varient sur plusieurs ordres de grandeur. En économie, les échelles logarithmiques sont utilisées pour représenter des indices boursiers, des taux de croissance, et des distributions de revenus." },
        { title: "Exemple", content: "Sur une échelle logarithmique, une multiplication par 10 correspond à une augmentation d'une unité. Ainsi, les valeurs 1, 10, 100, 1000 sont équidistantes. Pour représenter l'évolution d'un indice boursier sur 50 ans, une échelle logarithmique permet de mieux visualiser les taux de croissance relatifs." },
        { title: "Remarque", content: "Les échelles logarithmiques sont essentielles pour l'analyse des tendances à long terme et la comparaison des taux de croissance." }
      ],
      gameQuestions: [
        { question: "Sur une échelle logarithmique, quelle est la distance entre les valeurs 1 et 100?", answer: "2 unités" },
        { question: "Pourquoi utilise-t-on souvent des échelles logarithmiques pour les indices boursiers?", answer: "Pour mieux visualiser les taux de croissance relatifs" }
      ],
      exercises: [
        { question: "Un analyste financier étudie l'évolution d'un indice boursier sur 30 ans. L'indice est passé de 100 à 1000 points. (a) Représentez cette évolution sur une échelle logarithmique. (b) Calculez le taux de croissance annuel moyen. (c) Si ce taux se maintient, quelle sera la valeur de l'indice dans 10 ans?", answer: "(a) Sur une échelle logarithmique, l'évolution de log(100) = 2 à log(1000) = 3 est représentée par une droite de pente (3-2)/30 = 1/30.\n\n(b) Le taux de croissance annuel moyen est log(1000/100)/30 = log(10)/30 ≈ 0.0333, soit environ 3.33% par an.\n\n(c) Dans 10 ans, l'indice vaudra 1000×(1.0333)^10 ≈ 1000×1.391 ≈ 1391 points." }
      ],
      gameType: "quiz"
    },
    {
      id: "modeles-economiques",
      title: "Modèles économiques et logarithmes",
      sections: [
        { title: "Définition", content: "Les logarithmes sont essentiels dans de nombreux modèles économiques, notamment pour l'analyse des élasticités, des fonctions de production, et des modèles de croissance. Ils permettent de linéariser des relations non linéaires et de faciliter l'estimation des paramètres. Les modèles log-linéaires sont particulièrement utiles pour l'analyse des séries temporelles en économie." },
        { title: "Exemple", content: "Dans un modèle de fonction de production Cobb-Douglas, log(Q) = log(A) + α×log(K) + β×log(L), où Q est la production, K le capital, et L le travail. Les coefficients α et β représentent les élasticités de la production par rapport aux facteurs. Pour une fonction de demande, log(Q) = a - b×log(P) + c×log(Y), où P est le prix et Y le revenu." },
        { title: "Remarque", content: "Les modèles log-linéaires sont fondamentaux en économétrie pour l'analyse des relations entre variables économiques." }
      ],
      gameQuestions: [
        { question: "Dans un modèle log-linéaire, que représente le coefficient de log(P) dans une fonction de demande?", answer: "L'élasticité-prix de la demande" },
        { question: "Pour une fonction de production Cobb-Douglas, que représentent les coefficients α et β?", answer: "Les élasticités de la production par rapport au capital et au travail" }
      ],
      exercises: [
        { question: "Un économiste estime une fonction de demande log-linéaire : log(Q) = 2 - 0.5×log(P) + 0.8×log(Y), où Q est la quantité demandée, P le prix, et Y le revenu. (a) Interprétez les coefficients. (b) Si le prix augmente de 10% et le revenu de 5%, quelle est la variation prévue de la demande? (c) Calculez l'élasticité-prix et l'élasticité-revenu.", answer: "(a) Les coefficients indiquent que :\n- L'élasticité-prix est -0.5 (la demande diminue de 0.5% quand le prix augmente de 1%)\n- L'élasticité-revenu est 0.8 (la demande augmente de 0.8% quand le revenu augmente de 1%)\n\n(b) La variation de la demande est :\n-0.5×log(1.1) + 0.8×log(1.05) ≈ -0.5×0.0414 + 0.8×0.0212 ≈ -0.0207 + 0.0170 ≈ -0.0037\nLa demande diminue donc d'environ 0.37%.\n\n(c) L'élasticité-prix est -0.5 et l'élasticité-revenu est 0.8, comme indiqué dans le modèle." }
      ],
      gameType: "quiz"
    }
  ]
}; 