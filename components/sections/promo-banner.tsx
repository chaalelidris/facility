import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

interface PromoBannerProps {
  imageUrl: string;
}
const PromoBanner = ({ imageUrl }: PromoBannerProps) => {
  return (
    <div className="max-w-full mx-auto bg-foreground overflow-hidden">
      <div className="flex items-center justify-around py-8">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="relative text-3xl md:text-4xl text-secondary text-center lg:text-start z-10">
            GET YOUR <span className="font-bold">SPECIAL</span>
            <br />
            SALE UP TO <span className="font-bold">50%</span>
          </h1>
          <div className="relative">
            <div className="size-56 absolute -left-10 inset-y-0 my-auto object-cover bg-primary blur-[100px] z-0" />
            <Link
              href="/shop"
              className="relative inline-flex items-center gap-1 group z-10"
            >
              <span className="bg-primary text-white px-6 py-3 rounded-full group-hover:bg-primary/90">
                Shop Now
              </span>
              <div className="bg-primary text-white flex items-center justify-center p-3 rounded-full group-hover:bg-primary/90">
                <ArrowRight2 className="size-5 fill-white" variant="Outline" />
              </div>
            </Link>
          </div>
        </div>

        <div className="h-48 sm:h-[400px] flex justify-center lg:justify-start">
          <div className="relative">
            <div className="size-80 absolute -left-20 inset-y-0 my-auto object-cover bg-primary blur-[100px] z-0" />
            <Image
              src={imageUrl}
              width={531}
              height={405}
              alt="Featured TV"
              className="object-contain w-auto h-full relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
