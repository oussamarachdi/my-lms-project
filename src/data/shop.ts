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
  { id: "tote-bag-1", title: "LMS TB-275", price: 16, image: "/1.png", preorder: true, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "tote-bag-2", title: "LMS TB-303", price: 16, image: "/2.png", preorder: true, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "tote-bag-3", title: "LMS TB-452", price: 16, image: "/3.png", preorder: true, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "tote-bag-4", title: "LMS TB-562", price: 16, image: "/14.png", preorder: true, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "Notebook", title: "LMS N-404", price: 13, image: "/11.png", preorder: true, description: "Reserve your check‑in slot and skip the queue." },
]
export const ONSITE_PRODUCTS: Product[] = [
  { id: "Bracelet", title: "Bracelet", image: "/Bracelet.jpg", description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "stickers", title: "Stickers", image: "/stickers.jpeg", description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "mug", title: "Ceramic Mug", image: "/Cup.jpeg", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins-1", title: "P-657", image: "/4.png", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins-2", title: "P-987", image: "/5.png", description: "Premium cotton tee. Pre‑order to guarantee your size."  },

];