const TEAMS_DATA = {
  astralis: {
    team: "Astralis",
    imageUrl: "https://i.ibb.co/jDYgbZR/astralis.png",
    color: "#EF3742",
    players: ["dev1ce", "dupreeh", "gla1ve", "Magisk", "Xyp9x"],
    id: 1,
  },
  fnatic: {
    team: "Fnatic",
    imageUrl: "https://i.ibb.co/nCnxsjr/fnatic.png",
    color: "#FF5900",
    players: ["Brollan", "Golden", "JW", "KRIMZ", "flusha"],
    id: 2,
  },
  g2: {
    team: "G2",
    imageUrl: "https://i.ibb.co/9NGMRg4/g2.png",
    color: "#000000",
    players: ["AmaNek", "huNter", "JaCkz", "kennyS", "nexa"],
    id: 3,
  },
  navi: {
    team: "Na'Vi",
    imageUrl: "https://i.ibb.co/kJZktVq/na-vi.png",
    color: "#FFF200",
    teamColor: "#000000",
    players: ["Boombl4", "electronic", "flamie", "Perfecto", "s1mple"],
    id: 4,
  },
  liquid: {
    team: "Liquid",
    imageUrl: "https://i.ibb.co/qJ3XMhP/liquid.png",
    color: "#0A2B47",
    players: ["EliGe", "NAF", "nitr0", "Stewie2k", "Twistzz"],
    id: 5,
  },
  faze: {
    team: "FaZe",
    imageUrl: "https://i.ibb.co/R7F7dJx/faze.png",
    color: "#E43D30",
    players: ["Bymas", "broky", "NiKo", "rain", "coldzera"],
    id: 6,
  },
  mousesports: {
    team: "mousesports",
    imageUrl: "https://i.ibb.co/vZWT3Cn/mousesports.png",
    color: "#B11739",
    players: ["ChrisJ", "Karrigan", "ropz", "frozen", "woxic"],
    id: 7,
  },
  furia: {
    team: "Furia",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#000000",
    players: ["HEN1", "arT", "yuurih", "VINI", "KSCERATO"],
    id: 8,
  },
  big: {
    team: "BIG",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#000000",
    players: ["tabseN", "tiziaN", "syrsoN", "XANTARES", "k1to"],
    id: 9,
  },
  vitality: {
    team: "Vitality",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#F6CA33",
    players: ["shox", "RpK", "apEX", "ZywOo", "misutaaa"],
    id: 10,
  },
  nip: {
    team: "NiP",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#A88B65",
    players: ["twist", "REZ", "hampus", "nawwwk", "Plopski"],
    id: 11,
  },
  eg: {
    team: "EG",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#0C1220",
    players: ["stanislaw", "tarik", "Brehze", "Ethan", "CeRq"],
    id: 12,
  },
  madlions: {
    team: "Mad Lions",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#E1C365",
    players: ["Acilion", "Bubzkji", "acoR", "sjuush", "roeJ"],
    id: 13,
  },
  ence: {
    team: "ENCE",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#812529",
    players: ["suNny", "sergej", "Jamppi", "Aerial", "allu"],
    id: 14,
  },
  thieves: {
    team: "100 Thieves",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#812529",
    players: ["jks", "AZR", "jkaem", "Gratisfaction", "Liazz"],
    id: 15,
  },
  geng: {
    team: "Gen.G",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#000000",
    players: ["BnTeT", "daps", "autimatic", "koosta", "s0m"],
    id: 16,
  },
  spirit: {
    team: "Spirit",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#BDF935",
    players: ["chopper", "mir", "sdy", "iDISBALANCE", "magixx"],
    id: 17,
  },
  mibr: {
    team: "MIBR",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#000000",
    players: ["FalleN", "kNgV", "fer", "TACO", "trk"],
    id: 18,
  },
  cloud9: {
    team: "Cloud9",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#2F97DE",
    players: ["Sonic", "jT", "floppy", "motm", "oSee"],
    id: 19,
  },
  complexity: {
    team: "Complexity",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#002B5C",
    players: ["RUSH", "k0nfig", "poizon", "oBo", "blameF"],
    id: 20,
  },
  og: {
    team: "OG",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#002554",
    players: ["NBK-", "valde", "Aleksib", "ISSAA", "mantuu"],
    id: 21,
  },
  heretics: {
    team: "Heretics",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#137070",
    players: ["kioShiMa-", "xms", "Maka", "Lucky", "Nivera"],
    id: 22,
  },
  forze: {
    team: "forZe",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#E41F1C",
    players: ["facecrack", "almazer", "FL1T", "xsepower", "Jerry"],
    id: 23,
  },
  heroic: {
    team: "Heroic",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#EC1F27",
    players: ["cadiaN", "bORUP", "niko", "stavn", "TeSeS"],
    id: 24,
  },
  north: {
    team: "North",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#082135",
    players: ["cajunb", "MSL", "aizy", "gade", "Kristou"],
    id: 25,
  },
  godsent: {
    team: "GODSENT",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#FFCC25",
    players: ["Maden", "Farlig", "kRYSTAL", "STYKO", "zehN"],
    id: 26,
  },
  virtuspro: {
    team: "Virtus.pro",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#F05E07",
    players: ["AdreN", "SANJI", "qikert", "Jame", "YEKINDAR"],
    id: 27,
  },
  winstrike: {
    team: "Winstrike",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#CF0058",
    players: ["bondik", "Hobbit", "KrizzeN", "Lack1", "El1an"],
    id: 28,
  },
  hardlegion: {
    team: "Hard Legion",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#FF861C",
    players: ["kinqie", "svyat", "Krad", "Forester", "rAge"],
    id: 29,
  },
  nemiga: {
    team: "Nemiga",
    imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
    color: "#E02728",
    players: ["mds", "Jyo", "speed4k", "boX", "lollipop21k"],
    id: 30,
  },
};

export default SHOP_DATA;
