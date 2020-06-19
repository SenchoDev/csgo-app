const INITIAL_STATE = {
  sections: [
    {
      team: "Astralis",
      imageUrl: "https://i.ibb.co/jDYgbZR/astralis.png",
      color: "#EF3742",
      players: ["dev1ce", "dupreeh", "gla1ve", "Magisk", "Xyp9x"],
      id: 1,
      teamsData: [
        {
          name: "dev1ce",
          img: "https://i.ibb.co/nnDrbC6/dev1ice.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie EC2-B",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshair_outlinethickness 1;cl_crosshaircolor 2;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          name: "dupreeh",
          img: "https://i.ibb.co/YdXj7bH/Dupreeh-CS-GO.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Logitech G903",
            keyboard: "Logitech g513",
            headset: "Logitech G433",
            mousepad: "Zowie G-SR-SE",
          },
          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshair_outlinethickness 1;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -2;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          name: "gla1ve",
          img: "https://i.ibb.co/w72F4Mv/gla1ive.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie EC1-A",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -2;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          name: "Magisk",
          img: "https://i.ibb.co/NCxnkx8/magisk.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie EC2-A",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },

          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshaircolor 0;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 1;cl_crosshairstyle 4;cl_crosshairthickness 0",
        },
        {
          name: "Xyp9x",
          img: "https://i.ibb.co/gyTYmbT/xyp9x.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie FK2",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap 0;cl_crosshairsize 5;cl_crosshairstyle 4;cl_crosshairthickness 0.5",
        },
      ],
    },
    {
      team: "Fnatic",
      imageUrl: "https://i.ibb.co/nCnxsjr/fnatic.png",
      color: "#FF5900",
      players: ["Brollan", "Golden", "JW", "KRIMZ", "flusha"],
      id: 2,
      teamsData: [
        {
          name: "Brollan",
          img: "https://i.ibb.co/8PF6PZx/brollan.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Razer DeathAdder Elite",
            keyboard: "Corsair K70",
            headset: "Corsair Void",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -2;cl_crosshairsize 2;cl_crosshairstyle 4;cl_crosshairthickness 0",
        },
        {
          name: "flusha",
          img: "https://i.ibb.co/9vxWc7q/flusha.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Logitech G903",
            keyboard: "Logitech G810",
            headset: "Logitech G433",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 5;cl_crosshairdot 0;cl_crosshairgap -3;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          name: "Golden",
          img: "https://i.ibb.co/8KWNrvn/golden.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie EC2-B",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud II",
            mousepad: "XTRFY GP2",
          },
          crosshair:
            "cl_crosshair_drawoutline 0; cl_crosshaircolor 1; cl_crosshairdot 0; cl_crosshairgap -2.5; cl_crosshairsize 4; cl_crosshairstyle 4; cl_crosshairthickness 0",
        },
        {
          name: "JW",
          img: "https://i.ibb.co/YQ2h17D/jw.png",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2540",
            mouse: "Zowie EC2-A",
            keyboard: "Xtrfy K2",
            headset: "SteelSeries Arctis 5",
            mousepad: "Steelseries QCK Heavy",
          },

          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 4;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          name: "KRIMZ",
          img: "https://i.ibb.co/tqk743G/krimz.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2540",
            mouse: "Zowie EC1-B",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud Alpha",
            mousepad: "	Fnatic Gear Focus Pro",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -3;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
      ],
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
      id: 7,
    },
    {
      team: "Furia",
      imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
      color: "#000000",
      players: ["HEN1", "arT", "yuurih", "VINI", "KSCERATO"],
      id: 8,
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
