import { useState } from "react";
import Section from "../components/layout/Section";
import ShopHeader from "../components/shop/ShopHeader";
import ShopSection from "../components/shop/ShopSection";
import ProductsGrid from "../components/shop/ProductsGrid";
import { PRE_CONF_PRODUCTS, ONSITE_PRODUCTS } from "../data/shop";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Modal from "../components/ui/Modal";
import PreorderForm from "../components/shop/PreorderForme";
import type { Product } from "../data/shop";
import Swal from "sweetalert2";

export default function Shop() {
  const [selected, setSelected] = useState<Product | null>(null);

  function handlePreOrder(p: Product) {
    setSelected(p);
  }

  async function handleSubmit(payload: { productId: string; name: string; phone: string }) {
    if (!selected) return;

    // Example: show SweetAlert confirmation with payment prompt
    const result = await Swal.fire({
      title: `Confirm your order`,
      html: `
        <p class="mb-2">Product: <strong>${selected.title}</strong></p>
        <p class="mb-2">Price: <strong>${selected.price} TND</strong></p>
        <p class="text-gray-600">Please confirm to proceed with payment.</p>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Pay Now",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
    });

    if (result.isConfirmed) {
      // Here you would integrate Stripe/PayPal/etc
      await Swal.fire({
        title: "Payment Successful 🎉",
        text: `Thanks ${payload.name}, your pre-order is confirmed!`,
        icon: "success",
      });

      setSelected(null);
    }
  }

  return (
    <div className="bg-white">
      <Header />
      <Section className="py-10">
        <ShopHeader />

        {/* Pre-Conference */}
        <ShopSection
          id="pre"
          title="Pre-Conference — Reserve / Buy Before"
          description="Guarantee availability and sizes. Pick up your items at the registration desk."
        >
          <ProductsGrid products={PRE_CONF_PRODUCTS} mode="pre" onAction={handlePreOrder} />
        </ShopSection>

        <div className="my-10 h-px bg-gray-200" />

        {/* On-Site */}
        <ShopSection
          id="onsite"
          title="At the Conference — Available On-Site"
          description="Grab these at the venue during the event (while stocks last)."
        >
          <ProductsGrid products={ONSITE_PRODUCTS} mode="onsite" onAction={(p) => console.log("Add to cart:", p)} />
        </ShopSection>
      </Section>
      <Footer />

      {/* Modal with preorder form */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title="Pre-Order">
        {selected && <PreorderForm product={selected} onSubmit={handleSubmit} />}
      </Modal>
    </div>
  );
}
