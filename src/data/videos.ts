export interface VideoData {
  title: string;
  videoId: string;
  url: string;
  views_text: string;
  views_num: number;
  published: string;
}

export const topVideos: VideoData[] = [
  { title: "JADE Plus Tutorial: Secure Your Bitcoin with Sparrow Wallet (Step by Step)", videoId: "rlPF0AXIq0Y", url: "https://www.youtube.com/watch?v=rlPF0AXIq0Y", views_text: "2.9K", views_num: 2900, published: "hace 11 meses" },
  { title: "The bank demanded I explain the origin of my funds (real case)", videoId: "oHJFHo6t9WM", url: "https://www.youtube.com/watch?v=oHJFHo6t9WM", views_text: "2.7K", views_num: 2700, published: "hace 7 meses" },
  { title: "Install your own Lightning node on Umbrel ⚡", videoId: "M4LB7M9royw", url: "https://www.youtube.com/watch?v=M4LB7M9royw", views_text: "1K", views_num: 1000, published: "hace 9 meses" },
  { title: "Probando JADE y JADE Plus – Comparativa real, cámara, pantalla y más", videoId: "qjMsV48FI-g", url: "https://www.youtube.com/watch?v=qjMsV48FI-g", views_text: "1K", views_num: 1000, published: "hace 1 año" },
  { title: "Your Ledger Nano S No Longer Has Official Support", videoId: "fUI-mYSElvg", url: "https://www.youtube.com/watch?v=fUI-mYSElvg", views_text: "1K", views_num: 1000, published: "hace 1 año" },
  { title: "Buy BTC P2P on Mostro from your Android device", videoId: "ARr_tPIWLQU", url: "https://www.youtube.com/watch?v=ARr_tPIWLQU", views_text: "942", views_num: 942, published: "hace 8 meses" },
  { title: "This is how I manage my assets (step by step)", videoId: "ZEeopO-SOM0", url: "https://www.youtube.com/watch?v=ZEeopO-SOM0", views_text: "817", views_num: 817, published: "hace 10 meses" },
  { title: "The Bitcoin wallet used by those who value their privacy (Bull Wallet tutorial)", videoId: "__tIdyJ8hvs", url: "https://www.youtube.com/watch?v=__tIdyJ8hvs", views_text: "693", views_num: 693, published: "hace 6 meses" },
  { title: "¡No Pierdas tus Sats! Así se Mueve el BTC desde una Paper Wallet a una Hardware Wallet", videoId: "RcmAhYPt4Ec", url: "https://www.youtube.com/watch?v=RcmAhYPt4Ec", views_text: "665", views_num: 665, published: "hace 1 año" },
  { title: "Passphrase on Ledger", videoId: "rbHp9gqZ9dg", url: "https://www.youtube.com/watch?v=rbHp9gqZ9dg", views_text: "636", views_num: 636, published: "hace 1 año" },
];

export const siteConfig = {
  name: "Cripto Panas",
  tagline: "Tutoriales de Bitcoin sin tecnicismos",
  description:
    "Aprende Bitcoin desde cero: autocustodia, privacidad, hardware wallets y seguridad, explicado sin tecnicismos. Consultoría personalizada y tutoriales en video.",
  url: "https://www.criptopanas.com",
  email: "criptopanas@protonmail.com",
  telegram: "https://t.me/cripto_panas",
  x: "https://x.com/PanasCripto",
  instagram: "https://www.instagram.com/cripto_panas/",
  nostr: "https://nostree.me/npub1c99acl56yszpxlnr0944d32e8lyah20qrau77lx0tldn8224hpkqdawnw3",
  youtube: "https://www.youtube.com/@criptopanas",
  lightning: "criptopanas@coinos.io",
  npub: "npub1c99acl56yszpxlnr0944d32e8lyah20qrau77lx0tldn8224hpkqdawnw3",
};
