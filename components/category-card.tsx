import { cn } from "@/lib/utils";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  label: string;
  imageUrl: string;
  href?: string;
}

const CategoryCard = ({ label, imageUrl, href = "" }: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center justify-center rounded-xl bg-secondary/70 hover:bg-secondary hover:scale-105 transition-all duration-300 hover:cursor-pointer h-40 relative overflow-hidden"
      )}
    >
      <p className="absolute top-6 left-6 text-lg font-semibold text-gray-700">
        {label}
      </p>
      <div className="absolute -right-4 -bottom-4 h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={label}
            width={200}
            height={100}
            loading="lazy"
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 bg-primary p-2 rounded-full group-hover:bg-primary/90">
        <ArrowRight className="h-4 w-4 fill-white" variant="Outline" />
      </div>
    </Link>
  );
};

export default CategoryCard;
