import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient px-6 pt-24 text-white">
      <div className="text-center">
        <h1 className="mb-4 font-display text-7xl font-extrabold text-gold">404</h1>
        <p className="mb-8 text-xl text-white/70">Oops! Page not found</p>
        <a href="/" className="inline-flex rounded-full bg-gold-gradient px-6 py-3 font-semibold text-navy-dark">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
