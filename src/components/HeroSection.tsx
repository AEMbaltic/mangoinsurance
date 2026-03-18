import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-hero pb-32 pt-20 text-hero-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero/70" />
      <div className="container relative text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Total Protection for Your Vehicle
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-hero-foreground/70">
          Extended warranties &amp; GAP insurance — peace of mind starts here.
          Get an instant quote in seconds.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
