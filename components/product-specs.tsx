// components/product-specifications.tsx

import { cn } from "@/lib/utils";

interface SpecificationGroup {
  groupTitle: string;
  items: {
    key: string;
    label: string;
    value: string | number;
    unit?: string;
    icon?: React.ReactNode;
  }[];
}

interface ProductSpecificationsProps {
  specifications: SpecificationGroup[];
  title?: string;
  layout?: "grid" | "list";
}

export function ProductSpecifications({
  specifications,
  title = "Technical Specifications",
  layout = "grid",
}: ProductSpecificationsProps) {
  return (
    <div className="space-y-2">
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      {specifications.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0"
        >
          <h4 className="text-lg font-medium mb-2">{group.groupTitle}</h4>

          <div
            className={cn(
              "gap-4",
              layout === "grid"
                ? "grid grid-cols-1 md:grid-cols-2"
                : "space-y-4"
            )}
          >
            {group.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-start gap-4 p-3 even:bg-muted/20 rounded-lg"
              >
                {item.icon && (
                  <div className="flex-shrink-0 text-primary">{item.icon}</div>
                )}
                <div className="flex-1">
                  <dt className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-base">
                    {item.value}
                    {item.unit && (
                      <span className="text-sm text-muted-foreground ml-1">
                        {item.unit}
                      </span>
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
