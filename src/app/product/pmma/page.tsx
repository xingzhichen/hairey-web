import type { Metadata } from "next";
import { PmmaProduct } from "@/components/product/PmmaProduct";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "PMMA Dental",
  description:
    "Hairey monolayer and multilayer dental PMMA for temporary restorations, denture bases, and CAD/CAM dental prosthetics.",
};

export default function Page() {
  return <PmmaProduct />;
}
