import mangoLogo from "@/assets/mango-logo.avif";

const Footer = () => {
  return (
    <footer className="border-t bg-hero py-12 text-hero-foreground/70">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <img src={mangoLogo} alt="Mango Insurance" className="h-8 brightness-0 invert" />
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-hero-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-hero-foreground">Terms of Service</a>
            <a href="#" className="hover:text-hero-foreground">Contact Us</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 text-center text-xs">
          <span>Powered by <strong className="text-hero-foreground">Fortegra</strong></span>
          <span>&copy; {new Date().getFullYear()} Mango Insurance. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
