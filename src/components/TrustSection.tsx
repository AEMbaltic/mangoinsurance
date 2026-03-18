import { Shield, Lock, Headphones, FileCheck } from "lucide-react";

const signals = [
  { icon: Shield, label: "Licensed & Regulated" },
  { icon: Lock, label: "Secure Checkout" },
  { icon: Headphones, label: "24/7 Claims Support" },
  { icon: FileCheck, label: "Hassle-Free Claims" },
];

const steps = [
  { num: "1", title: "Get a Quote", desc: "Enter your vehicle details for an instant price." },
  { num: "2", title: "Choose Your Plan", desc: "Pick the warranty or GAP cover that fits your needs." },
  { num: "3", title: "Drive Protected", desc: "Enjoy worry-free driving from day one." },
];

const TrustSection = () => {
  return (
    <section className="bg-section-alt py-20">
      <div className="container">
        {/* Trust signals */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {signals.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-foreground">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {s.num}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
