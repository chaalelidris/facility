"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { PriceSimulationModal } from "@/components/modals/price-simulation-modal";
import AdditionalServicesSection from "@/components/sections/additional-services-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  AddCircle,
  Calendar1,
  MinusCirlce,
  Setting4,
  ShoppingBag,
  Heart,
  ShieldSecurity,
  Truck,
  Monitor,
  Wifi,
} from "iconsax-react";
import { ImageCarousel } from "@/components/product-image-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ProductRating } from "@/components/product-rating";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ProductSpecifications } from "@/components/product-specs";
import { Gauge, Plug, Usb } from "lucide-react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const productImages = useMemo(
    () => [
      "https://www.smithstv.co.uk/media/catalog/product/cache/f92d6453042533386142f08fb80002bd/s/a/samsung_qe32q50ae_747396_34-0100-0134.jpg",
      "https://www.smithstv.co.uk/media/catalog/product/cache/f92d6453042533386142f08fb80002bd/s/a/samsung_qe32q50ae_747393_34-0100-0134.jpg",
      "https://www.smithstv.co.uk/media/catalog/product/cache/f92d6453042533386142f08fb80002bd/s/a/samsung_qe32q50ae_747394_34-0100-0134.jpg",
    ],
    []
  );
  return (
    <>
      <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:mb-8">
        <div className="grid gap-8 lg:grid-cols-12 mt-6">
          {/* Main Product Content */}
          <div className="lg:col-span-9 grid grid-cols-1">
            <div className="coll-span-1">
              <div className=" grid gap-8 lg:grid-cols-8">
                {/* Image Gallery */}
                <div className="lg:col-span-4">
                  <ImageCarousel images={productImages} />
                </div>

                {/* Product Details */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Breadcrumb */}
                  <div>
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/electronics">
                            Électronique
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Téléviseurs</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                      Téléviseur Raylan 85&quot; UHD QLED PRO 60 Hz RT/U-CAL 85
                    </h1>
                    <div className="mt-2 text-muted-foreground">
                      Référence: TV-QLED85-2024
                    </div>

                    <ProductRating rating={4.5} reviews={142} />

                    <div className="mt-6 space-y-4">
                      <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-bold text-primary">
                          486,360 DA
                        </span>
                        <span className="text-lg line-through text-muted-foreground">
                          520,000 DA
                        </span>
                        <span className="text-green-600 font-semibold">
                          Économisez 7%
                        </span>
                      </div>

                      <div className="flex items-center gap-4 bg-secondary p-4 rounded-lg">
                        <Calendar1 className="h-6 w-6" />
                        <div>
                          <p className="font-semibold">8,106 DA/mois</p>
                          <p className="text-sm text-muted-foreground">
                            Sur 60 mois sans intérêts
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <Badge variant="outline" className="bg-green-100">
                          <Truck className="h-4 w-4 mr-2" />
                          Livraison gratuite
                        </Badge>
                        <Badge variant="outline" className="bg-blue-100">
                          <ShieldSecurity className="h-4 w-4 mr-2" />
                          Garantie 2 ans
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="coll-span-1">
              <Separator className="my-12" />
              {/* Product Tabs */}
              <Tabs defaultValue="specs">
                <div className="mt-6  overflow-x-auto scrollbar-hidden">
                  <TabsList className="bg-transparent justify-start h-fit gap-4">
                    <TabsTrigger
                      value="specs"
                      className="data-[state=active]:shadow-none p-0 "
                    >
                      Spécifications
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:shadow-none p-0 "
                    >
                      Caractéristiques
                    </TabsTrigger>
                    <TabsTrigger
                      value="warranty"
                      className="data-[state=active]:shadow-none p-0 "
                    >
                      Garantie
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="specs">
                  <ProductSpecifications
                    title="Detailed Specifications"
                    specifications={[
                      {
                        groupTitle: "Display",
                        items: [
                          {
                            key: "screen-size",
                            label: "Screen Size",
                            value: 85,
                            unit: "inches",
                            icon: (
                              <Monitor
                                className="h-5 w-5 fill-accent-foreground"
                                variant="Outline"
                              />
                            ),
                          },
                          {
                            key: "resolution",
                            label: "Resolution",
                            value: "3840 x 2160",
                          },
                          {
                            key: "refresh-rate",
                            label: "Refresh Rate",
                            value: 120,
                            unit: "Hz",
                            icon: (
                              <Gauge className="h-5 w-5 text-accent-foreground" />
                            ),
                          },
                        ],
                      },
                      {
                        groupTitle: "Connectivity",
                        items: [
                          {
                            key: "hdmi-ports",
                            label: "HDMI Ports",
                            value: 4,
                            icon: (
                              <Plug className="h-5 w-5 text-accent-foreground" />
                            ),
                          },
                          {
                            key: "usb-ports",
                            label: "USB Ports",
                            value: 2,
                            icon: (
                              <Usb className="h-5 w-5 text-accent-foreground" />
                            ),
                          },
                          {
                            key: "wireless",
                            label: "Wireless Connectivity",
                            value: "Wi-Fi 6, Bluetooth 5.2",
                            icon: (
                              <Wifi className="h-5 w-5 fill-accent-foreground" />
                            ),
                          },
                        ],
                      },
                    ]}
                  />
                </TabsContent>
                <TabsContent value="features">Features</TabsContent>
                <TabsContent value="warranty">Warranty</TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Purchase Card */}
          <div className="lg:col-span-3">
            <div className="bg-background border p-6 rounded-xl sticky top-44 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Quantité</span>
                  <div className="flex items-center gap-1 ">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8"
                    >
                      <MinusCirlce
                        className="h-6 w-6 fill-accent-foreground"
                        variant="Outline"
                      />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8"
                    >
                      <AddCircle
                        className="h-6 w-6 fill-accent-foreground"
                        variant="Outline"
                      />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full gap-2" size="lg">
                    <ShoppingBag
                      className="h-6 w-6 fill-white group-hover:fill-white"
                      variant="Outline"
                    />
                    Ajouter au panier
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Setting4
                      className="h-6 w-6 fill-black"
                      variant="Outline"
                    />
                    Price Simulation
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full gap-2"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart
                      className={cn(
                        "h-5 w-5 fill-accent-foreground",
                        isFavorite && "fill-red-500"
                      )}
                      variant={isFavorite ? "Bold" : "Outline"}
                    />
                    {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                  </Button>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Livraison sous 3-5 jours ouvrables</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldSecurity className="h-5 w-5 text-muted-foreground" />
                  <span>Retour gratuit sous 14 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdditionalServicesSection />

      <PriceSimulationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
