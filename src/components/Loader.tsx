import logo from "@/assets/mlf-logo.png";
import capvtalLogo from "@/assets/hustle-white.png";

const Loader = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-gradient">
    <img
      src={logo}
      alt="Men's Legacy Foundation"
      className="h-24 sm:h-28 w-auto mb-6 animate-float-soft drop-shadow-2xl"
    />
    <div className="relative w-48 h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gold-gradient rounded-full animate-loader-slide" />
    </div>
    <p className="mt-5 text-xs tracking-[0.3em] uppercase text-gold/80 font-semibold">
      From Boy Child to a Man of Value
    </p>

    {/* Capvtal Innovations credit */}
    <div className="absolute top-8 flex flex-col items-center gap-2 group">
      
      <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-500">
        <img
          src={capvtalLogo}
          alt="Capvtal Innovations"
          className="h-4 w-auto invert brightness-75 group-hover:brightness-100 transition-all duration-500"
        />
        <div className="flex flex-col leading-none">
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/60 font-light">
            Developed by
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
            Capvtal Innovations
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Loader;