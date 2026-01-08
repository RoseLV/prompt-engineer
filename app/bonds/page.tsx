import { ProductRiskPage } from "@/components/product-risk-page";

export default function BondsPage() {
  return (
    <ProductRiskPage
      config={{
        name: "Bonds",
        riskLevel: "Low-Medium",
        volatility: "Low-Medium",
        baseExpectedReturn: { min: 0.03, max: 0.05 },
        description:
          "Bonds offer fixed income streams with relatively low volatility compared to equities.",
      }}
    />
  );
}


