import { CVETS } from "@/config";

export type CvetType = keyof typeof CVETS;

export type PriceType = {
  name: string;
  description: string;
  listTextHead?: string;
  price: string;
  originalPrice?: string;
  priceLabel: string;
  popular: boolean;
  features?: string[];
  link?: string;
  btnText?: string;
  variant?: 'white' | 'gray'
};
