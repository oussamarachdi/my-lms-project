export type Product = {
  id: string;
  title: string;
  price?: number; // in TND
  image?: string;
  description?: string;
  stock?: number;
  preorder?: boolean; // true → must be bought/reserved before
};

export const PRE_CONF_PRODUCTS: Product[] = [
  { id: "tote-bag", title: "Official LMS Tote Bag", price: 20, image: "/tote bag.jpeg", preorder: true, stock: 5, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "Notebook", title: "LMS NoteBook", price: 13, image: "/NoteBook.jpeg", preorder: true,stock: 4, description: "Reserve your check‑in slot and skip the queue." },
  { id: "water-bottle", title: "water-bottle", price: 30, image: "/water-bottle.jpeg", preorder: true,stock: 3, description: "Premium cotton cap. Pre‑order to guarantee your size." },
]
export const ONSITE_PRODUCTS: Product[] = [
  { id: "Bracelet", title: "Bracelet", image: "/Bracelet.jpg", description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "stickers", title: "Stickers", image: "/stickers.jpeg", description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "mug", title: "Ceramic Mug", image: "/Cup.jpeg", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins", title: "AIESEC Pins", image: "/Pins.jpeg", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
];