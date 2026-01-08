import { ProductRiskPage } from "@/components/product-risk-page";

export default function SavingsPage() {
  return (
    <ProductRiskPage
      config={{
        name: "Savings",
        riskLevel: "Low",
        volatility: "Low",
        baseExpectedReturn: { min: 0.01, max: 0.02 },
        description:
          "Savings accounts prioritize capital preservation and liquidity. Returns are stable but modest.",
      }}
    />
  );
}


