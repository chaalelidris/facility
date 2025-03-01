import FiltersSidebar from "@/components/layout/shop/filters-sidebar";
import AdditionalServicesSection from "@/components/sections/additional-services-section";
import PromoBanner from "@/components/sections/promo-banner";
import { useMemo } from "react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tvImageUrl = useMemo(() => "/images/products/tv.png", []);
  return (
    <div>
      {/* Promo Banner Section 2 */}
      <section className="py-8">
        <PromoBanner imageUrl={tvImageUrl} />
      </section>
      <div className="flex flex-col sm:flex-row gap-6 max-w-8xl mx-auto py-8 px-4 lg:px-8">
        {/* Filters Sidebar (Fixed on the left) */}
        <aside className="min-w-64">
          <FiltersSidebar />
        </aside>
        {/* Main Content Area (Product Listings, etc.) */}
        <div className="flex-1">{children}</div>
      </div>
      {/* Additional Services Section */}
      <AdditionalServicesSection />
    </div>
  );
}
