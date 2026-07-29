import type { Metadata } from "next";
import { PressProduct } from "@/components/product/PressProduct";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Hairey Press",
  description:
    "Hairey lithium disilicate press ceramic with 460MPa biaxial flexural strength, lifelike translucency, and precise color reproduction.",
};

export default function Page() {
  return <PressProduct />;
}
