import { NotificationBing, Profile, ShoppingBag } from "iconsax-react";
import {
  Armchair,
  Flame,
  Mouse,
  Smartphone,
  Sparkles,
  WashingMachine,
} from "lucide-react";
import { createElement } from "react";
import { Item, Navigation } from "../types/item.type";

export const headerNavigation: Navigation[] = [
  { name: "home", label: "Home", href: "/" },
  { name: "shop", label: "Shop", href: "/shop" },
];

export const navCategories: Item[] = [
  {
    id: "1",
    label: "SMARTPHONE",
    name: "smartphone",
    href: "/products/?c=smartphone",
    icon: createElement(Smartphone, { className: "mr-2" }),
  },
  {
    id: "2",
    label: "FURNITURE",
    name: "furniture",
    href: "/products/?c=furniture",
    icon: createElement(Armchair, { className: "mr-2" }),
  },
  {
    id: "3",
    label: "HOUSEHOLD APPLIANCES",
    name: "appliances",
    href: "/products/?c=appliances",
    icon: createElement(WashingMachine, { className: "mr-2" }),
  },
  {
    id: "4",
    label: "INFORMATICS",
    name: "informatics",
    href: "/products/?c=informatics",
    icon: createElement(Mouse, { className: "mr-2" }),
  },
  {
    id: "5",
    label: "NEW PRODUCTS",
    name: "new-products",
    href: "/products/?c=new-products",
    icon: createElement(Sparkles, { className: "mr-2" }),
  },
  {
    id: "6",
    label: "TRENDING PRODUCTS",
    name: "trending-products",
    href: "/products/?c=trending-products",
    icon: createElement(Flame, { className: "mr-2" }),
  },
];

/* Header Buttons Actions */
export const notificationAction = [
  {
    name: "notifications",
    icon: createElement(NotificationBing, {
      className: "size-4 lg:size-5 stroke-muted-foreground",
    }),
  },
];

export const userActions = [
  {
    name: "profile",
    icon: createElement(Profile, {
      className: "size-4 lg:size-5 stroke-muted-foreground",
    }),
  },
  {
    name: "cart",
    icon: createElement(ShoppingBag, {
      className: "size-4 lg:size-5 stroke-muted-foreground",
    }),
  },
];

/* Home Page Constants */

export const productCategories: Item[] = [
  {
    id: "1",
    imageUrl: "/images/categories/phone.png",
    label: "Electronics",
    name: "electronics",
    href: "products/?c=electronics",
  },
  {
    id: "2",
    imageUrl: "/images/categories/clothes.png",
    label: "Clothes",
    name: "clothes",
    href: "products/?c=clothes",
  },
  {
    id: "3",
    imageUrl: "/images/categories/shoes.png",
    label: "Shoes",
    name: "shoes",
    href: "products/?c=shoes",
  },
  {
    id: "4",
    imageUrl: "/images/categories/watch.png",
    label: "Watches",
    name: "watches",
    href: "products/?c=watches",
  },
  {
    id: "5",
    imageUrl: "/images/categories/sports.png",
    label: "Sports",
    name: "sports",
    href: "products/?c=sports",
  },
  {
    id: "6",
    imageUrl: "/images/categories/sofa.png",
    label: "Home",
    name: "home",
    href: "products/?c=home",
  },
];

export const servicesCategories: Item[] = [
  {
    id: "1",
    imageUrl: "/images/services/bill.png",
    label: "Pay Bills",
    name: "pay-bills",
    href: "services/pay-bills",
  },
  {
    id: "2",
    imageUrl: "/images/services/flight.png",
    label: "Flight Booking",
    name: "flight-booking",
    href: "services/flight-booking",
  },
  {
    id: "3",
    imageUrl: "/images/services/hotel.png",
    label: "Hotel Booking",
    name: "hotel-booking",
    href: "services/hotel-booking",
  },
  {
    id: "4",
    imageUrl: "/images/services/food.png",
    label: "Food Delivery",
    name: "food-delivery",
    href: "services/food-delivery",
  },
  {
    id: "5",
    imageUrl: "/images/services/flight.png",
    label: "Flight Booking",
    name: "flight-booking",
    href: "services/flight-booking",
  },
  {
    id: "6",
    imageUrl: "/images/services/hotel.png",
    label: "Hotel Booking",
    name: "hotel-booking",
    href: "services/hotel-booking",
  },
  {
    id: "7",
    imageUrl: "/images/services/food.png",
    label: "Food Delivery",
    name: "food-delivery",
    href: "services/food-delivery",
  },
  {
    id: "8",
    imageUrl: "/images/services/insurance.png",
    label: "Insurance",
    name: "insurance",
    href: "services/insurance",
  },
];

export const brands: Item[] = [
  {
    id: "1",
    imageUrl: "/images/brands/asus-logo.svg",
    label: "Asus",
    name: "asus",
  },
  {
    id: "2",
    imageUrl: "/images/brands/lg-logo.svg",
    label: "LG",
    name: "lg",
  },
  {
    id: "3",
    imageUrl: "/images/brands/samsung-logo.svg",
    label: "Samsung",
    name: "samsung",
  },
  {
    id: "4",
    imageUrl: "/images/brands/brandt-logo.svg",
    label: "Brandt",
    name: "brandt",
  },
];
