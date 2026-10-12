// ─────────────────────────────────────────────────────────────
//  Photos du site
//  Pour remplacer une photo : déposez le nouveau fichier dans
//  src/assets/photos/ sous le même nom, ou modifiez la ligne `import`.
//  Pensez à adapter les descriptions (fr / en) : elles sont lues
//  par les lecteurs d'écran et par Google.
// ─────────────────────────────────────────────────────────────
import type { ImageMetadata } from 'astro';

import chaletHiverFacade from '../assets/photos/chalet-hiver-facade.jpg';
import chaletHiverPanneaux from '../assets/photos/chalet-hiver-panneaux.jpg';
import chaletHiverLarge from '../assets/photos/chalet-hiver-large.jpg';
import fenetreVueMontagne from '../assets/photos/fenetre-vue-montagne.jpg';
import chaletHiverSapins from '../assets/photos/chalet-hiver-sapins.jpg';
import terrasseHiver from '../assets/photos/terrasse-hiver.jpg';
import sapinEnneigeVallee from '../assets/photos/sapin-enneige-vallee.jpg';
import decorationBonhommeNeige from '../assets/photos/decoration-bonhomme-neige.jpg';
import montagneEnneigeeVue from '../assets/photos/montagne-enneigee-vue.jpg';
import pereNoelFacade from '../assets/photos/pere-noel-facade.jpg';
import coucherSoleilSommet from '../assets/photos/coucher-soleil-sommet.jpg';
import chaletEteJardin from '../assets/photos/chalet-ete-jardin.jpg';
import terrasseEte from '../assets/photos/terrasse-ete.jpg';
import facadeBalconEte from '../assets/photos/facade-balcon-ete.jpg';
import vueEteForet from '../assets/photos/vue-ete-foret.jpg';
import jardinLilas from '../assets/photos/jardin-lilas.jpg';
import salonVueEnsemble from '../assets/photos/salon-vue-ensemble.jpg';
import salonFauteuils from '../assets/photos/salon-fauteuils.jpg';
import salonTv from '../assets/photos/salon-tv.jpg';
import coinRepas from '../assets/photos/coin-repas.jpg';
import cuisine from '../assets/photos/cuisine.jpg';
import chambre1 from '../assets/photos/chambre-1.jpg';
import chambre2 from '../assets/photos/chambre-2.jpg';
import detailLampe from '../assets/photos/detail-lampe.jpg';
import massifNuages from '../assets/photos/massif-nuages.jpg';
import cimesCrepuscule from '../assets/photos/cimes-crepuscule.jpg';
import enseigneLeMadrier from '../assets/photos/enseigne-le-madrier.jpg';

export interface Photo {
  src: ImageMetadata;
  fr: string;
  en: string;
}

export const photos = {
  chaletHiverFacade: {
    src: chaletHiverFacade,
    fr: 'Le chalet Le Madrier sous la neige : façade en bois sculpté et toit enneigé sous un ciel bleu',
    en: 'Chalet Le Madrier in the snow: carved wooden façade and snow-covered roof under a blue sky',
  },
  chaletHiverPanneaux: {
    src: chaletHiverPanneaux,
    fr: 'Le chalet en hiver, avec au premier plan les panneaux de randonnée vers Vers-l’Eglise et Les Diablerets',
    en: 'The chalet in winter, with hiking signposts to Vers-l’Eglise and Les Diablerets in the foreground',
  },
  chaletHiverLarge: {
    src: chaletHiverLarge,
    fr: 'Vue d’ensemble du chalet enneigé, avec les sommets en arrière-plan',
    en: 'Wide view of the snow-covered chalet with the peaks behind it',
  },
  fenetreVueMontagne: {
    src: fenetreVueMontagne,
    fr: 'Les montagnes enneigées vues à travers une fenêtre en bois du chalet',
    en: 'Snowy mountains seen through one of the chalet’s wooden windows',
  },
  chaletHiverSapins: {
    src: chaletHiverSapins,
    fr: 'Le chalet et ses sapins couverts de neige',
    en: 'The chalet and its fir trees covered in snow',
  },
  terrasseHiver: {
    src: terrasseHiver,
    fr: 'La terrasse du chalet en hiver, avec ses fauteuils en bois et la vue sur la vallée enneigée',
    en: 'The chalet terrace in winter, with wooden armchairs and a view of the snowy valley',
  },
  sapinEnneigeVallee: {
    src: sapinEnneigeVallee,
    fr: 'Sapin chargé de neige devant la vallée et les forêts givrées',
    en: 'A fir tree heavy with snow in front of the valley and frosted forests',
  },
  decorationBonhommeNeige: {
    src: decorationBonhommeNeige,
    fr: 'Deux figurines en feutrine, un lutin et un bonhomme de neige, posées dans la neige',
    en: 'Two felt figurines, a gnome and a snowman, set in the snow',
  },
  montagneEnneigeeVue: {
    src: montagneEnneigeeVue,
    fr: 'Versant de montagne enneigé et forêt de sapins vus depuis le chalet',
    en: 'A snowy mountainside and fir forest seen from the chalet',
  },
  pereNoelFacade: {
    src: pereNoelFacade,
    fr: 'Décoration de Noël : un Père Noël grimpe sur la façade en bois du chalet',
    en: 'Christmas decoration: a Father Christmas figure climbing the chalet’s wooden façade',
  },
  coucherSoleilSommet: {
    src: coucherSoleilSommet,
    fr: 'Sommet enneigé sous un ciel rose au coucher du soleil',
    en: 'A snowy peak under a pink sky at sunset',
  },
  chaletEteJardin: {
    src: chaletEteJardin,
    fr: 'Le chalet en été, entouré de verdure et de jeunes sapins',
    en: 'The chalet in summer, surrounded by greenery and young fir trees',
  },
  terrasseEte: {
    src: terrasseEte,
    fr: 'La terrasse du chalet en été, avec tables et chaises sur la pelouse et vue sur les sommets',
    en: 'The chalet terrace in summer, with tables and chairs on the lawn and a view of the peaks',
  },
  facadeBalconEte: {
    src: facadeBalconEte,
    fr: 'Façade du chalet en été : balcon en bois sculpté et fenêtres à petits carreaux',
    en: 'The chalet façade in summer: carved wooden balcony and small-paned windows',
  },
  vueEteForet: {
    src: vueEteForet,
    fr: 'Vue depuis le jardin sur un vieux chalet au toit de bardeaux et la forêt de sapins',
    en: 'View from the garden over an old shingle-roofed chalet and the fir forest',
  },
  jardinLilas: {
    src: jardinLilas,
    fr: 'Le jardin au printemps, avec un lilas en fleurs et une chaise longue',
    en: 'The garden in spring, with a lilac in bloom and a deckchair',
  },
  salonVueEnsemble: {
    src: salonVueEnsemble,
    fr: 'Le salon mansardé de l’appartement, tout en boiseries, avec table basse, fauteuils et bibliothèque',
    en: 'The apartment’s wood-panelled attic living room, with coffee table, armchairs and bookshelves',
  },
  salonFauteuils: {
    src: salonFauteuils,
    fr: 'Coin salon avec trois fauteuils couverts de plaids blancs autour d’une table basse en bois',
    en: 'Sitting area with three armchairs draped in white throws around a wooden coffee table',
  },
  salonTv: {
    src: salonTv,
    fr: 'Le salon avec télévision, table basse en bois et lampes d’ambiance',
    en: 'The living room with television, wooden coffee table and soft lamps',
  },
  coinRepas: {
    src: coinRepas,
    fr: 'Le coin à manger : table en bois et quatre chaises près de la fenêtre',
    en: 'The dining corner: wooden table and four chairs by the window',
  },
  cuisine: {
    src: cuisine,
    fr: 'La cuisine : cuisinière avec four, évier, réfrigérateur et bouilloire, sous les boiseries',
    en: 'The kitchen: cooker with oven, sink, fridge and kettle, under the wood panelling',
  },
  chambre1: {
    src: chambre1,
    fr: 'Chambre à deux lits avec parure blanche, petite table et fenêtre',
    en: 'Bedroom with two beds in white linen, a small table and a window',
  },
  chambre2: {
    src: chambre2,
    fr: 'Seconde chambre à deux lits, avec linge de lit aux motifs de montagne',
    en: 'Second bedroom with two beds and mountain-patterned bed linen',
  },
  detailLampe: {
    src: detailLampe,
    fr: 'Détail de décoration : lampe à l’abat-jour brodé d’un chalet et rideaux aux motifs alpins',
    en: 'Decorative detail: a lamp with a chalet embroidered on its shade, and Alpine-patterned curtains',
  },
  massifNuages: {
    src: massifNuages,
    fr: 'Massif enneigé émergeant des nuages au-dessus des forêts',
    en: 'A snowy massif rising out of the clouds above the forests',
  },
  cimesCrepuscule: {
    src: cimesCrepuscule,
    fr: 'Les sommets enneigés rosis par la lumière du soir',
    en: 'Snowy summits turned pink by the evening light',
  },
  enseigneLeMadrier: {
    src: enseigneLeMadrier,
    fr: 'Enseigne en bois sculpté portant l’inscription « Le Madrier »',
    en: 'Carved wooden sign reading “Le Madrier”',
  },
} satisfies Record<string, Photo>;

// Galeries (l'ordre des lignes est l'ordre d'affichage)
export const galleries = {
  apartment: [
    photos.salonVueEnsemble,
    photos.salonFauteuils,
    photos.salonTv,
    photos.coinRepas,
    photos.cuisine,
    photos.chambre1,
    photos.chambre2,
    photos.detailLampe,
  ],
  summer: [
    photos.terrasseEte,
    photos.chaletEteJardin,
    photos.facadeBalconEte,
    photos.jardinLilas,
    photos.vueEteForet,
  ],
  winter: [
    photos.chaletHiverFacade,
    photos.chaletHiverPanneaux,
    photos.chaletHiverLarge,
    photos.chaletHiverSapins,
    photos.terrasseHiver,
    photos.fenetreVueMontagne,
    photos.sapinEnneigeVallee,
    photos.montagneEnneigeeVue,
    photos.massifNuages,
    photos.coucherSoleilSommet,
    photos.cimesCrepuscule,
    photos.pereNoelFacade,
    photos.decorationBonhommeNeige,
    photos.enseigneLeMadrier,
  ],
} satisfies Record<string, Photo[]>;
