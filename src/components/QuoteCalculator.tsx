import { useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CAR_MAKES, getModelsForMake, YEARS, ENGINE_TYPES, fetchQuote,
  type CarFormData, type WarrantyPlan,
} from "@/lib/mockApi";
import PricingResults from "./PricingResults";
import { Skeleton } from "@/components/ui/skeleton";

const QuoteCalculator = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engineType, setEngineType] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<WarrantyPlan[] | null>(null);

  const models = make ? getModelsForMake(make) : [];

  const handleMakeChange = (val: string) => {
    setMake(val);
    setModel("");
  };

  const canSubmit = make && model && year && engineType && vehicleValue && Number(vehicleValue) > 0;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);
    setResults(null);
    const data: CarFormData = {
      make, model, year, engineType, vehicleValue: Number(vehicleValue),
    };
    const plans = await fetchQuote(data);
    setLoading(false);
    setResults(plans);
  };

  return (
    <section id="quote" className="relative -mt-24 z-10 pb-16">
      <div className="container max-w-2xl">
        <Card className="border-t-4 border-t-primary shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <Shield className="h-5 w-5 text-primary" />
              Get Your Instant Quote
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Fill in your vehicle details below — it only takes 30 seconds.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Car Make</Label>
                <Select value={make} onValueChange={handleMakeChange}>
                  <SelectTrigger><SelectValue placeholder="Select make" /></SelectTrigger>
                  <SelectContent>
                    {CAR_MAKES.map((m) => (
                      <SelectItem key={m} value={m}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Car Model</Label>
                <Select value={model} onValueChange={setModel} disabled={!make}>
                  <SelectTrigger><SelectValue placeholder="Select model" /></SelectTrigger>
                  <SelectContent>
                    {models.map((m) => (
                      <SelectItem key={m} value={m}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <Label>Year</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
                  <SelectContent>
                    {YEARS.map((y) => (
                      <SelectItem key={y} value={y}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Engine Type</Label>
                <Select value={engineType} onValueChange={setEngineType}>
                  <SelectTrigger><SelectValue placeholder="Engine" /></SelectTrigger>
                  <SelectContent>
                    {ENGINE_TYPES.map((e) => (
                      <SelectItem key={e} value={e}>{e}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Vehicle Value (€)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 25000"
                  value={vehicleValue}
                  onChange={(e) => setVehicleValue(e.target.value)}
                  min={1000}
                />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={!canSubmit || loading}
              className="w-full text-base font-semibold"
              size="lg"
            >
              <Shield className="mr-2 h-4 w-4" />
              Calculate My Quote
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Results area */}
      <div className="container mt-12 max-w-5xl">
        {loading && (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4 rounded-lg border p-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        )}
        {results && <PricingResults plans={results} />}
      </div>
    </section>
  );
};

export default QuoteCalculator;
