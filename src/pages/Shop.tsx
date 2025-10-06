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

  async function handleSubmit(payload: { productId: string; name: string; phone: string; nb?: number }) {
    if (!selected) return;

    // Example: show SweetAlert confirmation with payment prompt
    const quantity = payload.nb || 1;
    const subtotal = (typeof selected.price === "number" ? selected.price : 0) * quantity;

    const result = await Swal.fire({
      title: `Confirm your order`,
      html: `
        <p class="mb-2">Product: <strong>${selected.title}</strong></p>
        <p class="mb-2">Price: <strong>${selected.price ?? 0} TND</strong></p>
        <p class="mb-2">Quantity: <strong>${quantity}</strong></p>
        <p class="mb-4">Total: <strong>${subtotal} TND</strong></p>
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
      // Simulate payment success then call backend to create preorder
      try {
        // Ensure all required fields are present
        const body = {
          productId: payload.productId || selected.id,
          productTitle: selected.title,
          // price must be a number for the backend check; default to 0 if missing
          price: typeof selected.price === "number" ? selected.price : 0,
          name: payload.name,
          phone: payload.phone,
          nb: payload.nb || 1,
        };

        const resp = await fetch("https://lms-backend-ihyi.onrender.com/api/preorder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await resp.json().catch(() => ({ ok: false }));
        if (!resp.ok || !data.ok) {
          const serverMsg = data?.error || `Request failed (${resp.status})`;
          throw new Error(serverMsg);
        }

        await Swal.fire({
          title: "Payment Successful 🎉",
          html: `Thanks ${payload.name}, your pre-order (<strong>${quantity} × ${selected.title}</strong>) is confirmed.<br/>Total: <strong>${subtotal} TND</strong><br/>Order id: <strong>${data.id}</strong>`,
          icon: "success",
        });
        setSelected(null);
      } catch (err) {
        console.error(err);
        const msg = err && typeof err === "object" && "message" in err ? (err as any).message : String(err);
        await Swal.fire({
          title: "Error",
          text: `${msg || "Failed to create preorder"}`,
          icon: "error",
        });
      }
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
