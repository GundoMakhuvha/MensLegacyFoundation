import logo from "@/assets/mlf-logo.png";

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
  </div>
);

export default Loader;