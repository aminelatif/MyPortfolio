export default {
  id: "statistiques",
  title: "Statistiques",
  parts: [
    {
      id: "statistique-descriptive",
      title: "Statistique descriptive",
      sections: [
        { title: "Définition", content: "La statistique descriptive consiste à recueillir, présenter, analyser et interpréter des données." },
        { title: "Exemple", content: "Pour une série statistique comme les notes d'élèves {8, 12, 15, 9, 10, 14, 16, 11}, on peut calculer la moyenne, la médiane, etc." },
        { title: "Remarque", content: "La statistique descriptive ne permet pas de faire des prévisions sur l'avenir." }
      ],
      gameQuestions: [
        { question: "Quelle mesure de tendance centrale est sensible aux valeurs extrêmes ?", answer: "La moyenne" },
        { question: "Comment s'appelle la valeur qui partage une série statistique en deux groupes de même effectif ?", answer: "La médiane" }
      ],
      exercises: [
        { question: "Calculez la moyenne, la médiane et l'étendue de la série {5, 8, 8, 9, 12, 15, 15, 16}.", answer: "Moyenne = 11, Médiane = 10.5, Étendue = 11" }
      ],
      gameType: "quiz"
    },
    {
      id: "representation-graphique",
      title: "Représentation graphique des données",
      sections: [
        { title: "Définition", content: "Les données statistiques peuvent être représentées par différents types de graphiques : diagrammes en bâtons, histogrammes, diagrammes circulaires, etc." },
        { title: "Exemple", content: "Pour représenter la répartition des élèves par filière dans un lycée, on peut utiliser un diagramme circulaire où chaque secteur représente une filière proportionnellement à son effectif." },
        { title: "Remarque", content: "Le choix du graphique dépend du type de données à représenter." }
      ],
      gameQuestions: [
        { question: "Quel type de graphique est le plus approprié pour représenter l'évolution d'une grandeur au cours du temps ?", answer: "Courbe d'évolution ou diagramme en ligne" }
      ],
      exercises: [
        { question: "Un diagramme circulaire représente la répartition des 300 élèves d'un lycée. Si le secteur représentant la filière scientifique occupe 120°, combien d'élèves sont dans cette filière ?", answer: "100 élèves" }
      ],
      gameType: "brainsprint"
    },
    {
      id: "indicateurs-statistiques",
      title: "Indicateurs statistiques",
      sections: [
        { title: "Définition", content: "Les indicateurs statistiques permettent de résumer et de caractériser une série statistique : moyenne, médiane, mode, variance, écart-type, etc." },
        { title: "Exemple", content: "La variance mesure la dispersion des valeurs autour de la moyenne. Elle se calcule comme la moyenne des carrés des écarts à la moyenne." },
        { title: "Remarque", content: "L'écart-type est l'indicateur le plus utilisé pour mesurer la dispersion." }
      ],
      gameQuestions: [
        { question: "Quelle est la formule de la variance d'une série statistique {x₁, x₂, ..., xₙ} de moyenne m ?", answer: "V = (1/n)∑(xᵢ - m)²" }
      ],
      exercises: [
        { question: "Calculez l'écart-type de la série {2, 4, 6, 8, 10}.", answer: "√8 ≈ 2.83" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 