
export default function ShopHeader() {
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">AIESEC Shop</h1>
        <p className="mt-1 text-gray-600 max-w-prose">
          Order exclusive merch and resources. Some items <strong>must be reserved before the conference</strong>, others are available <strong>on site</strong>.
        </p>
      </div>
    </div>
  );
}