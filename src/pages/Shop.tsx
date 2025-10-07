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

  const quantity = payload.nb || 1;
  const unitPrice = typeof selected.price === "number" ? selected.price : 0;
  const subtotal = unitPrice * quantity;

  const { isConfirmed, value: preorder } = await Swal.fire({
    title: `Confirm your order`,
    html: `
      <p class="mb-2">Product: <strong>${selected.title}</strong></p>
      <p class="mb-2">Price: <strong>${unitPrice} TND</strong></p>
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

    // ⭐️ This shows a spinner on the confirm button during the async work
    showLoaderOnConfirm: true,

    // Keep the modal open while loading, and disable outside clicks
    allowOutsideClick: () => !Swal.isLoading(),

    // ⭐️ All your async work goes here. Throw to show a red inline error.
    preConfirm: async () => {
      try {
        // 1) Simulate payment gateway (replace with Stripe/PayPal SDK call)
        await new Promise((r) => setTimeout(r, 800)); // fake processing delay

        // 2) Call your backend to create the preorder
        const body = {
          productId: payload.productId || selected.id,
          productTitle: selected.title,
          price: unitPrice,
          name: payload.name,
          phone: payload.phone,
          nb: quantity,
        };

        const resp = await fetch("https://lms-backend-ihyi.onrender.com/api/preorder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        // Try to parse JSON even on non-2xx to extract error message
        let data: any = null;
        try {
          data = await resp.json();
        } catch {
          /* ignore json parse errors */
        }

        if (!resp.ok || !data?.ok) {
          const serverMsg = data?.error || `Request failed (${resp.status})`;
          throw new Error(serverMsg);
        }

        // Return value is available as result.value after the modal resolves
        return data; // e.g., { ok: true, id: "..." }
      } catch (e: any) {
        // This shows a red validation message under the confirm button
        Swal.showValidationMessage(e?.message || "Failed to create preorder. Please try again.");
        // Re-throwing is not necessary; returning void keeps the modal open.
      }
    },
  });

  // If user confirmed and preConfirm returned data successfully
  if (isConfirmed && preorder) {
    await Swal.fire({
      title: "Payment Successful 🎉",
      html: `Thanks ${payload.name}, your pre-order (<strong>${quantity} × ${selected.title}</strong>) is confirmed.<br/>Total: <strong>${subtotal} TND</strong><br/>Order id: <strong>${preorder.id}</strong>`,
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
