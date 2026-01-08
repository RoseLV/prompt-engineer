"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type RiskLevel = "Low" | "Low-Medium" | "Medium" | "High";
type Volatility = "Low" | "Low-Medium" | "Medium" | "High";

export interface ProductConfig {
  name: string;
  riskLevel: RiskLevel;
  volatility: Volatility;
  baseExpectedReturn: { min: number; max: number }; // annualized range, e.g. 0.06 ~ 0.09
  description: string;
}

export function ProductRiskPage({ config }: { config: ProductConfig }) {
  const [years, setYears] = useState<number>(10);
  const [principal, setPrincipal] = useState<number>(10000);

  const { worstRate, baseRate, bestRate } = useMemo(() => {
    const { min, max } = config.baseExpectedReturn;
    const mid = (min + max) / 2;
    const volAdjust =
      config.volatility === "Low"
        ? 0.01
        : config.volatility === "Low-Medium"
        ? 0.02
        : config.volatility === "Medium"
        ? 0.04
        : 0.1; // High
    return {
      worstRate: Math.max(min - volAdjust, -0.5),
      baseRate: mid,
      bestRate: max + volAdjust,
    };
  }, [config]);

  const projection = useMemo(() => {
    const compound = (rate: number) => principal * Math.pow(1 + rate, years);
    return {
      worst: compound(worstRate),
      base: compound(baseRate),
      best: compound(bestRate),
    };
  }, [bestRate, baseRate, worstRate, principal, years]);

  const riskColor =
    config.riskLevel === "Low"
      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
      : config.riskLevel === "Low-Medium"
      ? "bg-lime-100 text-lime-700 border-lime-200"
      : config.riskLevel === "Medium"
      ? "bg-amber-100 text-amber-800 border-amber-200"
      : "bg-rose-100 text-rose-700 border-rose-200";

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">{config.name}</h1>
          <Badge variant="outline" className={cn(riskColor)}>{config.riskLevel}</Badge>
        </div>
        <p className="text-muted-foreground">{config.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Risk</CardTitle>
            <CardDescription>Overall product risk level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-lg">{config.riskLevel}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Volatility</CardTitle>
            <CardDescription>Historical price fluctuation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-lg">{config.volatility}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expected Return (annual)</CardTitle>
            <CardDescription>Base-case CAGR range</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-lg">
              {formatPercent(config.baseExpectedReturn.min)} — {formatPercent(config.baseExpectedReturn.max)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Projected Returns</CardTitle>
          <CardDescription>Adjust the time horizon and principal</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Time horizon</div>
                <div className="text-sm font-medium">{years} year{years > 1 ? "s" : ""}</div>
              </div>
              <Slider
                value={[years]}
                onValueChange={(v) => setYears(v[0])}
                min={1}
                max={30}
                step={1}
              />
              <div className="grid grid-cols-3 text-sm text-muted-foreground">
                <span>1y</span>
                <span className="text-center">15y</span>
                <span className="text-right">30y</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="principal" className="text-sm text-muted-foreground">Principal</label>
                <div className="text-sm text-muted-foreground">USD</div>
              </div>
              <Input
                id="principal"
                type="number"
                inputMode="numeric"
                min={0}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value || 0))}
              />
            </div>
          </div>

          <Separator />

          <div className="grid gap-6 md:grid-cols-3">
            <MetricBlock
              title="Worst Case"
              subtitle={`@ ${formatPercent(worstRate)} CAGR`}
              value={formatCurrency(projection.worst)}
              hint="Stress scenario considering downside volatility"
            />
            <MetricBlock
              title="Base Case"
              subtitle={`@ ${formatPercent(baseRate)} CAGR`}
              value={formatCurrency(projection.base)}
              hint="Typical market conditions"
              highlight
            />
            <MetricBlock
              title="Best Case"
              subtitle={`@ ${formatPercent(bestRate)} CAGR`}
              value={formatCurrency(projection.best)}
              hint="Favorable market tailwinds"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MetricBlock(props: {
  title: string;
  subtitle: string;
  value: string;
  hint?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-5 bg-card",
        props.highlight && "ring-2 ring-primary/20"
      )}
    >
      <div className="text-sm text-muted-foreground">{props.title}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{props.value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{props.subtitle}</div>
      {props.hint ? <div className="mt-2 text-xs text-muted-foreground">{props.hint}</div> : null}
    </div>
  );
}


