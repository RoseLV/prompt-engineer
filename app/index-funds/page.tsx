import { ProductRiskPage } from "@/components/product-risk-page";

export default function IndexFundsPage() {
  return (
    <ProductRiskPage
      config={{
        name: "Index Funds",
        riskLevel: "Medium",
        volatility: "Medium",
        baseExpectedReturn: { min: 0.06, max: 0.09 },
        description:
          "Index funds track a market index, balancing risk and return with broad diversification.",
      }}
    />
  );
}


