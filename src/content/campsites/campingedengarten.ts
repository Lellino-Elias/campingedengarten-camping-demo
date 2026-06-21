import type { CampsiteConfig } from "../types";

/**
 * Camping Edengarten — Matrei in Osttirol (Familie Steiner).
 * Quelle: leads/campingedengarten/raw/digest. BILDARM: auf der Festplatte liegen nur ZWEI
 * herkunftssichere Eigenfotos (Platzansicht + Tauerntal-Impression). Alle übrigen
 * Manifest-Bilder stammen von FREMDEN Plätzen (camping.info „ähnliche Plätze") oder sind
 * Lagekarten → verworfen. Das einzige verbleibende Eigenfoto (Tauerntal-Impression) liegt
 * unter der Mindestauflösung (520x323, tooSmall) → für ein Full-Bleed-Breather zu klein und
 * darum ebenfalls verworfen (keine größere herkunftssichere Alternative vorhanden; das Hero
 * doppelt zu verwenden wäre ein Duplikat). Darum bewusst schlanker Aufbau: starkes Hero, die
 * bildlastigen Sektionen (Breather/Pillars/CampingFeatures/Galerie) blenden sich ehrlich aus.
 */
const IMG = "/campsites/campingedengarten";

const campingedengarten: CampsiteConfig = {
  name: "Camping Edengarten",
  shortName: "Edengarten",
  slug: "campingedengarten",
  ort: "Matrei in Osttirol",
  region: "Osttirol",
  brandKind: "Camping",
  regionLong: "Nationalpark Hohe Tauern · Osttirol · Österreich",

  // KEIN theme-Feld (Original-Palette). Hero immer zentriert.
  heroVariant: "center",

  claim: "Auf 1000 m zwischen Großglockner und Großvenediger",
  claimEmphasis: "Großglockner und Großvenediger",
  emailDetail: "eure Lage auf 1000 Metern mitten im Nationalpark Hohe Tauern",
  intro:
    "Mitten im Nationalpark Hohe Tauern, auf 1000 Metern zwischen Großglockner und Großvenediger: dein zentral und doch ruhig gelegener Ausgangspunkt fürs Wandern — südlich der Tauern auch im Frühjahr und Herbst mild.",

  statement: {
    text: "Auf 1000 Metern Seehöhe beginnt für dich das wohl schönste Wanderparadies Österreichs.",
    emphasis: "1000 Metern Seehöhe",
  },

  // Keine herkunftssicheren Pillar-Fotos vorhanden → leer (Sektion blendet sich aus).
  pillars: [],

  usps: [
    "Zentral & ruhig gelegen",
    "Nationalpark Hohe Tauern",
    "Mehrfach ADAC-ausgezeichnet",
    "Hunde willkommen",
    "Kinderspielplatz",
    "Einzelwaschkabinen",
  ],

  trust: {
    heading: "Wo die höchsten Berge Österreichs den Horizont füllen",
    headingEmphasis: "höchsten Berge Österreichs",
    intro:
      "Mehrfach im ADAC-Campingführer ausgezeichnet, zentral und doch ruhig: Der Edengarten liegt auf 1000 Metern südlich der Hohen Tauern — eine Lage, die Frühjahr und Herbst besonders mild macht. Familie Steiner freut sich auf dich.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-edengarten.webp`, alt: "Empfangsgebäude und Spielbereich des Camping Edengarten mit Bergblick auf die Hohen Tauern in Matrei in Osttirol" },
  },

  // Einziges Eigenfoto (Tauerntal) unter Mindestauflösung → kein Breather (Sektion blendet sich aus).

  // Keine herkunftssicheren Platz-/Sanitärfotos übrig → Features leer (Sektion aus).
  camping: {
    heading: "Camping am Edengarten",
    intro: "Gepflegte Plätze auf 1000 Metern Seehöhe, südlich der Hohen Tauern — ruhig gelegen und doch zentral.",
    features: [],
  },

  anreise: {
    heading: "Über die Felbertauernstraße nach Matrei",
    modes: [
      { title: "Mit dem Auto", text: "Vom Norden über München und Kitzbühel auf die Felbertauernstraße — direkt nach Matrei." },
      { title: "Aus dem Süden", text: "Über Bozen und das Pustertal oder über den Plöckenpass nach Lienz und weiter nach Matrei." },
      { title: "Mit der Bahn", text: "Mit der Bundesbahn bis Lienz, von dort mit dem Bus weiter nach Matrei und Umgebung." },
      { title: "Per Flugzeug", text: "Nächste Flughäfen: Klagenfurt rund 150 km, Innsbruck und Salzburg je rund 200 km." },
    ],
  },

  // Unter 4 herkunftssicheren Fotos → Galerie blendet sich aus (ehrliche Degradierung).
  galerie: {
    heading: "Eindrücke rund um Matrei",
    headingEmphasis: "Matrei",
    intro: "Die Bergwelt des Nationalparks Hohe Tauern rund um den Platz.",
    tag: "Nationalpark Hohe Tauern",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Matrei",
    headingEmphasis: "in Matrei",
    intro: "Wähle Zeitraum und Personen — Familie Steiner meldet sich persönlich mit deiner Verfügbarkeit und den aktuellen Preisen.",
    pricesArePlaceholder: true,
    priceNote: "Richtpreise — die Website nennt keine Preise (bitte mit dem Platz bestätigen).",
    highlight: { title: "Mitten im Nationalpark", text: "Auf 1000 Metern zwischen Großglockner und Großvenediger." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 7 },
    ],
  },

  kontakt: {
    coords: { lat: 46.995521, lng: 12.539557 },
    tel: "+43 4875 5111",
    telHref: "tel:+4348755111",
    mail: "info@campingedengarten.at",
    adresse: "Edenweg 15a · 9971 Matrei in Osttirol · Osttirol",
  },

  languages: ["DE", "EN", "IT"],

  nav: [
    { label: "Start", href: "#top" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campingedengarten;
