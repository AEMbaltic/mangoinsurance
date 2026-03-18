import mangoLogo from "@/assets/mango-logo.avif";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img src={mangoLogo} alt="Mango Insurance" className="h-8" />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#products" className="transition-colors hover:text-foreground">Products</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#car-owners" className="transition-colors hover:text-foreground">For Car Owners</a>
            <a href="#business" className="transition-colors hover:text-foreground">For Business</a>
          </nav>
        </div>
        <a
          href="#quote"
          className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
