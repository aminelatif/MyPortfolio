// Import TCS lessons
import arithmetique from './tcs/math/arithmetique';
import ensembles from './tcs/math/ensembles';
import calculVectoriel from './tcs/math/calcul-vectoriel';
import projection from './tcs/math/projection';
import ordre from './tcs/math/ordre';
import droite from './tcs/math/droite';
import polynomes from './tcs/math/polynomes';
import equations from './tcs/math/equations';
import trigonometrie from './tcs/math/trigonometrie';
import fonctions from './tcs/math/fonctions';
import produitScalaire from './tcs/math/produit-scalaire';
import transformations from './tcs/math/transformations';
import geometrieEspace from './tcs/math/geometrie-espace';
import statistiques from './tcs/math/statistiques';

// Import 1BAC lessons
// Sciences Expérimentales et Technologies
import limites1BacSET from './1bac/sciences_experimentales_et_technologies/math/limites';

// Science Mathématiques
import logiqueRaisonnement from './1bac/science_mathematiques/math/logique-raisonnement';
import groupes from './1bac/science_mathematiques/math/groupes';
import applications from './1bac/science_mathematiques/math/applications';
import fonctionsNumeriques from './1bac/science_mathematiques/math/fonctions-numeriques';
import suitesNumeriques from './1bac/science_mathematiques/math/suites-numeriques';
import barycentre from './1bac/science_mathematiques/math/barycentre';
import produitScalaireSM from './1bac/science_mathematiques/math/produit-scalaire';
import calculTrigonometrique from './1bac/science_mathematiques/math/calcul-trigonometrique';
import rotation from './1bac/science_mathematiques/math/rotation';
import limitesFonctions from './1bac/science_mathematiques/math/limites-fonctions';
import derivation from './1bac/science_mathematiques/math/derivation';
import etudeFonctions from './1bac/science_mathematiques/math/etude-fonctions';
import denombrement from './1bac/science_mathematiques/math/denombrement';
import arithmetiqueZ from './1bac/science_mathematiques/math/arithmetique-z';
import vecteursEspace from './1bac/science_mathematiques/math/vecteurs-espace';
import espaceAnalytique from './1bac/science_mathematiques/math/espace-analytique';
import produitVectoriel from './1bac/science_mathematiques/math/produit-vectoriel';

// Import other 1BAC tracks when available
// import limites1BacSEG from './1bac/sciences_economiques_et_gestion/math/limites';

// Import 2BAC lessons
// Sciences Expérimentales et Technologies
import integration2BacSET from './2bac/sciences_experimentales_et_technologies/math/integration';
// Import other 2BAC tracks when available
// import integration2BacEco from './2bac/economie/math/integration';

// Define tracks for each level
export const tracks = {
  '1bac': [
    {
      id: 'sciences_experimentales_et_technologies',
      title: 'Sciences Expérimentales et Technologies',
      description: 'Filière Sciences Expérimentales et Technologies'
    },
    {
      id: 'science_mathematiques',
      title: 'Science Mathématiques',
      description: 'Filière Science Mathématiques'
    },
    {
      id: 'sciences_economiques_et_gestion',
      title: 'Sciences Économiques et Gestion',
      description: 'Filière Sciences Économiques et Gestion'
    }
  ],
  '2bac': [
    {
      id: 'sciences_experimentales_et_technologies',
      title: 'Sciences Expérimentales et Technologies',
      description: 'Filière Sciences Expérimentales et Technologies'
    },
    {
      id: 'economie',
      title: 'Économie',
      description: 'Filière Économie'
    }
  ]
};

// Group lessons by level and track
export const levels = {
  tcs: {
    id: 'tcs',
    title: 'Tronc Commun',
    description: 'Cours de mathématiques du Tronc Commun',
    hasTracks: false,
    lessons: [
      arithmetique,
      ensembles,
      calculVectoriel,
      projection,
      ordre,
      droite,
      polynomes,
      equations,
      trigonometrie,
      fonctions,
      produitScalaire,
      transformations,
      geometrieEspace,
      statistiques
    ]
  },
  '1bac': {
    id: '1bac',
    title: '1ère Bac',
    description: 'Cours de mathématiques de la 1ère année du baccalauréat',
    hasTracks: true,
    tracks: {
      sciences_experimentales_et_technologies: {
        lessons: [limites1BacSET]
      },
      science_mathematiques: {
        lessons: [
          logiqueRaisonnement,
          groupes,
          applications,
          fonctionsNumeriques,
          suitesNumeriques,
          barycentre,
          produitScalaireSM,
          calculTrigonometrique,
          rotation,
          limitesFonctions,
          derivation,
          etudeFonctions,
          denombrement,
          arithmetiqueZ,
          vecteursEspace,
          espaceAnalytique,
          produitVectoriel
        ]
      },
      sciences_economiques_et_gestion: {
        lessons: []
      }
    }
  },
  '2bac': {
    id: '2bac',
    title: '2ème Bac',
    description: 'Cours de mathématiques de la 2ème année du baccalauréat',
    hasTracks: true,
    tracks: {
      sciences_experimentales_et_technologies: {
        lessons: [integration2BacSET]
      },
      economie: {
        lessons: []
      }
    }
  }
};

// Helper function to get a lesson by level, track, and lesson id
export const getLesson = (levelId, trackId, lessonId) => {
  const level = levels[levelId];
  if (!level) return null;
  
  if (level.hasTracks) {
    if (!trackId || !level.tracks[trackId]) return null;
    return level.tracks[trackId].lessons.find(lesson => lesson.id === lessonId) || null;
  } else {
    return level.lessons.find(lesson => lesson.id === lessonId) || null;
  }
};

// Helper function to get a part by level, track, lesson, and part id
export const getLessonPart = (levelId, trackId, lessonId, partId) => {
  const lesson = getLesson(levelId, trackId, lessonId);
  if (!lesson) return null;
  
  return lesson.parts.find(part => part.id === partId) || null;
};

export default {
  levels,
  tracks,
  getLesson,
  getLessonPart
}; 