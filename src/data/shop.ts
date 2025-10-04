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
  { id: "tote-bag-1", title: "LMS TB-275", price: 20, image: "/1.png", preorder: true, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "tote-bag-2", title: "LMS TB-303", price: 20, image: "/2.png", preorder: true, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "tote-bag-3", title: "LMS TB-452", price: 20, image: "/3.png", preorder: true, description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "Notebook", title: "LMS N-404", price: 13, image: "/11.png", preorder: true, description: "Reserve your check‑in slot and skip the queue." },
  { id: "Cup", title: "C-90", price: 30, image: "/12.png", preorder: true, description: "Premium cotton cap. Pre‑order to guarantee your size." },
]
export const ONSITE_PRODUCTS: Product[] = [
  { id: "Bracelet", title: "Bracelet", image: "/Bracelet.jpg", description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "stickers", title: "Stickers", image: "/stickers.jpeg", description: "Premium cotton tee. Pre‑order to guarantee your size." },
  { id: "mug", title: "Ceramic Mug", image: "/Cup.jpeg", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins-1", title: "P-657", image: "/4.png", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins-2", title: "P-987", image: "/5.png", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins-3", title: "P-236", image: "/6.png", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins-4", title: "P-127", image: "/7.png", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
  { id: "Pins-5", title: "P-765", image: "/8.png", description: "Premium cotton tee. Pre‑order to guarantee your size."  },
];