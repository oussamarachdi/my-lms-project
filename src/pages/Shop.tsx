import Section from "../components/layout/Section";
import ShopHeader from "../components/shop/ShopHeader";
import ShopSection from "../components/shop/ShopSection";
import ProductsGrid from "../components/shop/ProductsGrid";
import { PRE_CONF_PRODUCTS, ONSITE_PRODUCTS } from "../data/shop";
import Header from "../components/layout/Header";
import  Footer from "../components/layout/Footer";

export default function Shop() {
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
          <ProductsGrid
            products={PRE_CONF_PRODUCTS}
            mode="pre"
            onAction={(p) => console.log("Pre-order / Reserve:", p)}
          />
        </ShopSection>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-200" />

        {/* At the Conference */}
        <ShopSection
          id="onsite"
          title="At the Conference — Available On-Site"
          description="Grab these at the venue during the event (while stocks last)."
        >
          <ProductsGrid
            products={ONSITE_PRODUCTS}
            mode="onsite"
            onAction={(p) => console.log("Add to cart:", p)}
          />
        </ShopSection>
      </Section>
      <Footer />
    </div>
  );
}
