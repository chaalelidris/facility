import { ProductCard } from "@/components/product-card";
import { products } from "../page";
import InputIcon from "@/components/inputs/Input-icon";
import { SearchNormal1 } from "iconsax-react";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SelectBox from "@/components/select-box";

const ShopPage = () => {
  const sortingOptions = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
  ];
  return (
    <section>
      <div className="">
        {/* Search Bar & Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:space-x-4 space-y-4 lg:space-y-0">
          <InputIcon
            iconLeft={SearchNormal1}
            placeholder="Search"
            className="flex-grow w-full lg:w-3/5"
          />
          <div className="flex items-center justify-between w-full space-x-4">
            <div>
              <SelectBox
                options={sortingOptions}
                placeholder="Sorting by"
                defaultValue="default"
                className=""
              />
            </div>
            <div className="flex flex-1">
              <Separator className="bg-secondary" />
            </div>
            <div className="text-sm text-muted-foreground flex-shrink-0">
              Results 1 to 15 - page 1
            </div>
          </div>
        </div>

        {/* Products List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
          {products.reverse().map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
          {products.reverse().map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
          {products.reverse().map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
          {products.reverse().map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
          {products.reverse().map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-between w-full gap-4 sm:flex-row sm:gap-0">
          {/* Pagination */}
          <div className="w-full sm:w-fit">
            <Pagination>
              <PaginationContent>
                {/* Previous */}
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="border rounded-full p-2 sm:pr-2" // Adjusted padding for small screens
                  />
                </PaginationItem>
                {/* Page Numbers */}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="px-3 py-1 sm:px-4 sm:py-2"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="px-3 py-1 sm:px-4 sm:py-2"
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="px-3 py-1 sm:px-4 sm:py-2"
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="px-3 py-1 sm:px-4 sm:py-2" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="px-3 py-1 sm:px-4 sm:py-2"
                  >
                    10
                  </PaginationLink>
                </PaginationItem>
                {/* Next */}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    className="border rounded-full p-2 sm:pl-2" // Adjusted padding for small screens
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {/* Separator */}
          <div className="w-full sm:flex-1">
            <Separator className="bg-secondary" />
          </div>

          {/* Results Text */}
          <div className="text-sm text-muted-foreground whitespace-nowrap">
            Results 1 to 15 - page 1
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
