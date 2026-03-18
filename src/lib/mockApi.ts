export interface CarFormData {
  make: string;
  model: string;
  year: string;
  engineType: string;
  vehicleValue: number;
}

export interface WarrantyPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  popular?: boolean;
}

const CAR_MODELS: Record<string, string[]> = {
  BMW: ["3 Series", "5 Series", "X3", "X5", "1 Series"],
  Toyota: ["Corolla", "Camry", "RAV4", "Yaris", "Land Cruiser"],
  Audi: ["A3", "A4", "A6", "Q5", "Q7"],
  Mercedes: ["C-Class", "E-Class", "GLC", "GLA", "A-Class"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Polo", "T-Roc"],
  Ford: ["Focus", "Fiesta", "Kuga", "Puma", "Mustang"],
  Hyundai: ["i30", "Tucson", "Kona", "i20", "Santa Fe"],
  Kia: ["Ceed", "Sportage", "Niro", "Picanto", "Sorento"],
};

export const CAR_MAKES = Object.keys(CAR_MODELS);

export function getModelsForMake(make: string): string[] {
  return CAR_MODELS[make] || [];
}

export const YEARS = Array.from({ length: 11 }, (_, i) => String(2025 - i));

export const ENGINE_TYPES = ["Petrol", "Diesel", "Hybrid", "Electric"];

export async function fetchQuote(data: CarFormData): Promise<WarrantyPlan[]> {
  await new Promise((r) => setTimeout(r, 1500));

  const basePrice = data.vehicleValue * 0.0015;
  const engineMultiplier = data.engineType === "Electric" ? 1.3 : data.engineType === "Hybrid" ? 1.15 : 1;
  const ageMultiplier = 1 + (2025 - Number(data.year)) * 0.05;

  const base = Math.round(basePrice * engineMultiplier * ageMultiplier * 100) / 100;

  return [
    {
      id: "basic",
      name: "Basic Warranty",
      description: "Essential powertrain coverage for peace of mind",
      features: [
        "Engine & transmission coverage",
        "Electrical system protection",
        "24/7 roadside assistance",
        "Up to €5,000 per claim",
      ],
      monthlyPrice: Math.round(base * 100) / 100,
    },
    {
      id: "premium",
      name: "Premium Warranty",
      description: "Comprehensive bumper-to-bumper protection",
      features: [
        "All Basic coverage included",
        "Air conditioning & cooling",
        "Suspension & steering",
        "Up to €15,000 per claim",
        "Courtesy car included",
      ],
      monthlyPrice: Math.round(base * 1.65 * 100) / 100,
      popular: true,
    },
    {
      id: "gap",
      name: "GAP Insurance",
      description: "Total loss protection — covers the gap between payout and value",
      features: [
        "Invoice price protection",
        "Finance shortfall cover",
        "Replacement vehicle contribution",
        "Up to €50,000 coverage",
        "Claim within 30 days",
      ],
      monthlyPrice: Math.round(base * 0.85 * 100) / 100,
    },
  ];
}
