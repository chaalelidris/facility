"use client";

import { Item } from "@/types/item.type";
import Image from "next/image";
import { useMemo } from "react";
import Marquee from "react-fast-marquee";

interface InfiniteScrollerProps {
  items: Item[];
}

const InfiniteScroller = ({ items }: InfiniteScrollerProps) => {
  const repeatedItems = useMemo(() => [...items, ...items], [items]);

  return (
    <Marquee
      speed={50}
      gradient={false}
      className="w-full bg-secondary rounded-xl"
      pauseOnHover
    >
      {repeatedItems.map((item, index) => (
        <div key={`${item.id}-${index}`} className="mx-12 my-12">
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={100}
            height={100}
            className="object-contain bg-white rounded-xl aspect-square px-4 min-w-32"
            loading="lazy"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default InfiniteScroller;
