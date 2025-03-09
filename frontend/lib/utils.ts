import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define type for the navigation item
interface NavItem {
  href: string;
  iconSrc: string;
  alt: string;
  label: string;
}

// Navigation items array with proper typing
export const navItems: NavItem[] = [
  { href: "/", iconSrc: "/icons/home.svg", alt: "home", label: "Dashboard" },
  {
    href: "#",
    iconSrc: "/icons/wallet.svg",
    alt: "market",
    label: "P2P Marketplace",
  },
  { href: "#", iconSrc: "/icons/assets.svg", alt: "assets", label: "Assets" },
  {
    href: "#",
    iconSrc: "/icons/coins.svg",
    alt: "invest",
    label: "Investments",
  },
];

export const baseUrl =
  process.env.NODE_ENV == "production"
    ? "https://lockup.ai/"
    : "http://localhost:3000/";

