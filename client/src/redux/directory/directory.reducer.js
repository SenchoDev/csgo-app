const INITIAL_STATE = {
  sections: [
    {
      team: "Astralis",
      imageUrl: "https://i.ibb.co/jDYgbZR/astralis.png",
      color: "#EF3742",
      players: ["dev1ce", "dupreeh", "gla1ve", "Magisk", "Xyp9x"],
      id: 1,
    },
    {
      team: "Fnatic",
      imageUrl: "https://i.ibb.co/nCnxsjr/fnatic.png",
      color: "#FF5900",
      players: ["Brollan", "Golden", "JW", "KRIMZ", "flusha"],
      id: 2,
    },
    {
      team: "G2",
      imageUrl: "https://i.ibb.co/9NGMRg4/g2.png",
      color: "#000000",
      players: ["AmaNek", "huNter", "JaCkz", "kennyS", "nexa"],
      id: 3,
    },
    
    {
      team: "Na'Vi",
      imageUrl: "https://i.ibb.co/kJZktVq/na-vi.png",
      color: "#FFF200",
      teamColor: "#000000",
      players: ["Boombl4", "electronic", "flamie", "Perfecto", "s1mple"],
      id: 4,
    },
    {
      team: "Liquid",
      imageUrl: "https://i.ibb.co/qJ3XMhP/liquid.png",
      color: "#0A2B47",
      players: ["EliGe", "NAF", "nitr0", "Stewie2k", "Twistzz"],
      id: 5,
    },
    {
      team: "FaZe",
      imageUrl: "https://i.ibb.co/R7F7dJx/faze.png",
      color: "#E43D30",
      players: ["Bymas", "broky", "NiKo", "rain", "coldzera"],
      id: 6,
    },
    {
      team: "mousesports",
      imageUrl: "https://i.ibb.co/vZWT3Cn/mousesports.png",
      color: "#B11739",
      players: ["ChrisJ", "Karrigan", "ropz", "frozen", "woxic"],
      id: 6,
    },

    
    {
      team: "Furia",
      imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
      color: "#000000",
      players: ["HEN1", "arT", "yuurih", "VINI", "KSCERATO"],
      id: 1,
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
