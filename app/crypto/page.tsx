import { ProductRiskPage } from "@/components/product-risk-page";

export default function CryptoPage() {
  return (
    <ProductRiskPage
      config={{
        name: "Crypto",
        riskLevel: "High",
        volatility: "High",
        baseExpectedReturn: { min: 0.15, max: 0.4 },
        description:
          "Crypto assets are highly volatile with the potential for significant gains or losses.",
      }}
    />
  );
}


