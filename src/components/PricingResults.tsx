import { Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { WarrantyPlan } from "@/lib/mockApi";

interface Props {
  plans: WarrantyPlan[];
}

const PricingResults = ({ plans }: Props) => {
  const handleAddToCart = (plan: WarrantyPlan) => {
    console.log("🛒 Add to Cart — Shopify Integration Ready", {
      planId: plan.id,
      planName: plan.name,
      monthlyPrice: plan.monthlyPrice,
      currency: "EUR",
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          className={`relative flex flex-col transition-shadow hover:shadow-lg ${
            plan.popular ? "border-primary ring-2 ring-primary/20" : ""
          }`}
        >
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1">
              Most Popular
            </Badge>
          )}
          <CardHeader className="text-center">
            <CardTitle className="text-lg">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-3">
              <span className="text-3xl font-bold text-foreground">€{plan.monthlyPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-trust" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => handleAddToCart(plan)}
              className="w-full font-semibold"
              variant={plan.popular ? "default" : "outline"}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PricingResults;
