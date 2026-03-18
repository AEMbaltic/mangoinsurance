import { Zap, ShieldCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Lightning Fast Start",
    desc: "You can start offering your extended warranty in just a few days. No investment, convenient platform and fast customer service guaranteed.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    desc: "The insurance services we provide are secured by an insurer FORTEGRA with an AM Best Financial Strength Rating A- (Excellent). This guarantees the continuity of operations and the security of clients' interests.",
  },
  {
    icon: Users,
    title: "Team of Experts",
    desc: "The company was founded and employed by real insurance market experts who have developed many successful products.",
  },
];

const bulletPoints = [
  "Fortegra Europe Insurance Company SE (FEIC) offers a wide range of consumer insurance products: from automotive to consumer electronics, furniture or other types of insurance or warranty extension.",
  "With an AM Best A- (Excellent) credit rating, the company is a subsidiary of the US corporation Fortegra Financial Corporation. The corporation's total assets exceed $2.5 billion. Fortegra Financial Corporation is part of the Tiptree Financial family of companies traded on the NASDAQ (TIPT) exchange.",
  "Fortegra Europe Insurance Company SE conducts business throughout Europe under the EU Freedom of Services Directive.",
];

const AboutFortegra = () => {
  return (
    <section className="bg-hero py-20 text-hero-foreground">
      <div className="container">
        {/* 3 pillars */}
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hero-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Fortegra Europe details */}
        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center gap-2 text-center">
            <svg viewBox="0 0 200 100" className="h-24 w-auto text-hero-foreground" fill="currentColor">
              <path d="M60 70 L80 30 L100 70 M85 70 L100 40 L115 70 M100 70 L120 30 L140 70" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
            <span className="text-2xl font-light tracking-[0.3em] text-hero-foreground">FORTEGRA</span>
            <span className="text-sm tracking-[0.25em] text-hero-foreground/60">EUROPE</span>
          </div>
          <ul className="space-y-4">
            {bulletPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-hero-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutFortegra;
