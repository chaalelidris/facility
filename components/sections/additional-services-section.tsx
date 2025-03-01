import { Cards, Cup, Routing, TruckTick } from "iconsax-react";
import React from "react";

export default function AdditionalServicesSection() {
  return (
    <section className="mb-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center p-5 sm:py-10">
          {[
            { icon: Cards, label: "SUIVEZ-NOUS", subLabel: "SHOP" },
            { icon: Routing, label: "SUIVEZ-NOUS", subLabel: "SHOP" },
            { icon: Cup, label: "SUIVEZ-NOUS", subLabel: "SHOP" },
            { icon: TruckTick, label: "SUIVEZ-NOUS", subLabel: "SHOP" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <item.icon
                className="size-8 sm:size-16 stroke-accent-foreground"
                variant="TwoTone"
              />

              <span className="text-sm">{item.label}</span>
              <span className="text-xs text-[#6a6d76]">{item.subLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
