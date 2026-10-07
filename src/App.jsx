import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SidebarDrawer } from "./components/SidebarDrawer";
import { SearchPopup } from "./components/SearchPopup";
import { MobileNav } from "./components/MobileNav";
import { BackToTop } from "./components/BackToTop";
import { CustomCursor } from "./components/CustomCursor";
import { Home } from "./pages/Home";
import { Home2, Home3, IndexOnePage } from "./pages/HomeVariants";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServicesCarousel } from "./pages/ServicesCarousel";
import { ServiceDetails } from "./pages/ServiceDetails";
import { ThreatDetection } from "./pages/ThreatDetection";
import { EndpointSecurity } from "./pages/EndpointSecurity";
import { CloudManagedServices } from "./pages/CloudManagedServices";
import { SmartItEfficiency } from "./pages/SmartItEfficiency";
import { AdvancedTechnology } from "./pages/AdvancedTechnology";
import { BackupRecovery } from "./pages/BackupRecovery";
import { DataProtectionPrivacy } from "./pages/DataProtectionPrivacy";
import { Portfolio } from "./pages/Portfolio";
import { PortfolioDetails } from "./pages/PortfolioDetails";
import { Team } from "./pages/Team";
import { TeamCarousel } from "./pages/TeamCarousel";
import { TeamDetails } from "./pages/TeamDetails";
import { Testimonials } from "./pages/Testimonials";
import { TestimonialsCarousel } from "./pages/TestimonialsCarousel";
import { Pricing } from "./pages/Pricing";
import { FAQ } from "./pages/FAQ";
import { Gallery } from "./pages/Gallery";
import { Blog } from "./pages/Blog";
import { BlogCarousel } from "./pages/BlogCarousel";
import { BlogList, BlogList2 } from "./pages/BlogList";
import { BlogDetails } from "./pages/BlogDetails";
import { KeyTrends } from "./pages/KeyTrends";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Wishlist } from "./pages/Wishlist";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { ComingSoon, NotFound } from "./pages/NotFound";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const Layout = ({ children }) => {
  const location = useLocation();
  const isComingSoon = location.pathname === "/coming-soon" || location.pathname === "/coming-soon.html";
  if (isComingSoon) {
    return <>{children}</>;
  }
  return <div className="page-wrapper">
      <CustomCursor />
      <SidebarDrawer />
      <SearchPopup />
      <MobileNav />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </div>;
};
export const App = () => {
  return <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {
    /* Home Routes */
  }
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/index2" element={<Home2 />} />
            <Route path="/index2.html" element={<Home2 />} />
            <Route path="/index3" element={<Home3 />} />
            <Route path="/index3.html" element={<Home3 />} />
            <Route path="/index-one-page" element={<IndexOnePage />} />
            <Route path="/index-one-page.html" element={<IndexOnePage />} />
            <Route path="/index2-one-page" element={<IndexOnePage />} />
            <Route path="/index2-one-page.html" element={<IndexOnePage />} />
            <Route path="/index3-one-page" element={<IndexOnePage />} />
            <Route path="/index3-one-page.html" element={<IndexOnePage />} />

            {
    /* About */
  }
            <Route path="/about" element={<About />} />
            <Route path="/about.html" element={<About />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services.html" element={<Services />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/service-details.html" element={<ServiceDetails />} />
            <Route path="/services-details" element={<ServiceDetails />} />
            <Route path="/services-details.html" element={<ServiceDetails />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/services/:serviceId.html" element={<ServiceDetails />} />
            <Route path="/service/:serviceId" element={<ServiceDetails />} />
            <Route path="/service/:serviceId.html" element={<ServiceDetails />} />
            <Route path="/services-carousel" element={<ServicesCarousel />} />
            <Route path="/services-carousel.html" element={<ServicesCarousel />} />
            <Route path="/threat-detection-prevention" element={<ServiceDetails initialServiceId="cybersecurity-solutions" />} />
            <Route path="/threat-detection-prevention.html" element={<ServiceDetails initialServiceId="cybersecurity-solutions" />} />
            <Route path="/endpoint-device-security" element={<ServiceDetails initialServiceId="cybersecurity-solutions" />} />
            <Route path="/endpoint-device-security.html" element={<ServiceDetails initialServiceId="cybersecurity-solutions" />} />
            <Route path="/cloud-managed-services" element={<ServiceDetails initialServiceId="cloud-data-center-solutions" />} />
            <Route path="/cloud-managed-services.html" element={<ServiceDetails initialServiceId="cloud-data-center-solutions" />} />
            <Route path="/smart-it-efficiency" element={<ServiceDetails initialServiceId="it-support-maintenance" />} />
            <Route path="/smart-it-efficiency.html" element={<ServiceDetails initialServiceId="it-support-maintenance" />} />
            <Route path="/advanced-technology" element={<ServiceDetails initialServiceId="enterprise-software-licensing" />} />
            <Route path="/advanced-technology.html" element={<ServiceDetails initialServiceId="enterprise-software-licensing" />} />
            <Route path="/backup-recovery" element={<ServiceDetails initialServiceId="servers-storage-solutions" />} />
            <Route path="/backup-recovery.html" element={<ServiceDetails initialServiceId="servers-storage-solutions" />} />
            <Route path="/data-protection-privacy" element={<ServiceDetails initialServiceId="cybersecurity-solutions" />} />
            <Route path="/data-protection-privacy.html" element={<ServiceDetails initialServiceId="cybersecurity-solutions" />} />

            {
    /* Portfolio */
  }
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio.html" element={<Portfolio />} />
            <Route path="/protfolio" element={<Portfolio />} />
            <Route path="/protfolio.html" element={<Portfolio />} />
            <Route path="/portfolio-details" element={<PortfolioDetails />} />
            <Route path="/portfolio-details.html" element={<PortfolioDetails />} />

            {
    /* Team */
  }
            <Route path="/team" element={<Team />} />
            <Route path="/team.html" element={<Team />} />
            <Route path="/team-carousel" element={<TeamCarousel />} />
            <Route path="/team-carousel.html" element={<TeamCarousel />} />
            <Route path="/team-details" element={<TeamDetails />} />
            <Route path="/team-details.html" element={<TeamDetails />} />

            {
    /* Testimonials */
  }
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/testimonials.html" element={<Testimonials />} />
            <Route path="/testimonials-carousel" element={<TestimonialsCarousel />} />
            <Route path="/testimonials-carousel.html" element={<TestimonialsCarousel />} />

            {
    /* Pages */
  }
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing.html" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/faq.html" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery.html" element={<Gallery />} />

            {
    /* Blog */
  }
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog.html" element={<Blog />} />
            <Route path="/blog-carousel" element={<BlogCarousel />} />
            <Route path="/blog-carousel.html" element={<BlogCarousel />} />
            <Route path="/blog-list" element={<BlogList />} />
            <Route path="/blog-list.html" element={<BlogList />} />
            <Route path="/blog-list-2" element={<BlogList2 />} />
            <Route path="/blog-list-2.html" element={<BlogList2 />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/blog-details.html" element={<BlogDetails />} />
            <Route path="/Key-trends-shaping-the-future-of-technology" element={<KeyTrends />} />
            <Route path="/Key-trends-shaping-the-future-of-technology.html" element={<KeyTrends />} />

            {
    /* Contact */
  }
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact.html" element={<Contact />} />

            {
    /* Shop */
  }
            <Route path="/products" element={<Products />} />
            <Route path="/products.html" element={<Products />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/product-details.html" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart.html" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout.html" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/wishlist.html" element={<Wishlist />} />

            {
    /* Auth & Legal */
  }
            <Route path="/login" element={<Login />} />
            <Route path="/login.html" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-up.html" element={<SignUp />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/terms-and-conditions.html" element={<TermsAndConditions />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/coming-soon.html" element={<ComingSoon />} />

            {
    /* 404 Not Found */
  }
            <Route path="/404" element={<NotFound />} />
            <Route path="/404.html" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>;
};
