import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";
import { useReveal } from "@/hooks/useReveal";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  // Re-run on route change so newly-mounted .reveal nodes get observed.
  useReveal(location.pathname);
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
