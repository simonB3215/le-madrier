// ─────────────────────────────────────────────────────────────
//  Réglages du site — tarifs, coordonnées, formulaire, calendrier
//  Modifiez les valeurs ci-dessous, puis relancez `npm run build`.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Chalet Le Madrier',
  url: 'https://www.lemadrier.ch',

  // Coordonnées (reprises du site d'origine)
  phone: '+41 79 481 91 87',
  phoneHref: '+41794819187',
  email: 'info@lemadrier.ch',
  address: {
    street: 'Chemin de la Gottrausaz 7',
    postalCode: '1864',
    locality: 'Vers-l’Eglise',
    region: 'VD',
    country: 'CH',
  },
  geo: { lat: 46.3565636, lng: 7.1350645 },
  facebook: 'https://www.facebook.com/pages/Chalet-le-Madrier-Les-Diablerets/158436894200689',

  // Carte Google Maps (même carte que le site d'origine)
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d2753.661282841682!2d7.136356000000001!3d46.3562665!3m2!1i1024!2i768!4f13.1!2m1!1sChemin+de+la+Gottrausaz+7%2C+1864+Vers-l'Eglise!5e0!3m2!1sfr!2sch!4v1430481103004",
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Chemin+de+la+Gottrausaz+7%2C+1864+Vers-l%27Eglise',

  // Avis Google (fiche « Chalet Le Madrier » sur Google Maps).
  // La note et le nombre d'avis ne se mettent pas à jour tout seuls :
  // recopiez-les depuis Google et changez la date du relevé.
  // `items` : avis à citer sur la page d'accueil, recopiés tels quels depuis
  // Google, par exemple { author: 'Camille', date: '2022', text: '…' }.
  googleReviews: {
    rating: 5.0,
    count: 7,
    checked: '2026-10-12',
    url: 'https://www.google.com/maps?cid=13462650536738564936',
    items: [] as { author: string; date: string; text: string }[],
  },

  // Formulaire de contact : adresse d'envoi Formspree (ou service équivalent),
  // par exemple 'https://formspree.io/f/abcdwxyz'.
  // Tant que ce champ est vide, le formulaire ouvre la messagerie du visiteur
  // avec la demande déjà rédigée.
  formEndpoint: '',

  // Calendrier de réservation : collez ici l'adresse de l'iframe si vous en
  // utilisez un. Le site d'origine n'en avait pas : laissez vide pour ne rien afficher.
  bookingCalendarUrl: '',

  // Heures d'arrivée et de départ, par exemple '15:00' et '11:00'.
  // Vides = le site affiche le marqueur [À CONFIRMER].
  checkIn: '',
  checkOut: '',

  // Tarifs, par nuit, pour l'appartement entier
  currency: 'CHF',
  minNights: 2,
  capacity: 4,
  rates: [
    {
      price: 150,
      fr: 'Toute l’année',
      en: 'All year round',
    },
    {
      price: 200,
      fr: 'Fêtes de fin d’année et février',
      en: 'Christmas and New Year holidays, and February',
    },
  ],
};

export const formatPrice = (n: number) => `${site.currency} ${n}.–`;
export const lowestPrice = () => Math.min(...site.rates.map((r) => r.price));
