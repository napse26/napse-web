import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { serviceCategories } from "../data/servicesData";
export const Header = () => {
  const { toggleSidebar, toggleSearch, toggleMobileNav, cartCount } = useApp();
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isActive = (path) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "/index.html")) return true;
    return location.pathname.startsWith(path);
  };
  const navLinks = (
    <ul className="main-menu__list">
      <li className={location.pathname === "/" || location.pathname === "/index.html" ? "current" : ""}>
        <Link to="/">Home</Link>
      </li>
      <li className={location.pathname.includes("/about") ? "current" : ""}>
        <Link to="/about">About Us</Link>
      </li>
      <li className={`dropdown ${location.pathname.includes("/service") ? "current" : ""}`}>
        <Link to="/services">
          Services
        </Link>
        <ul
          className="shadow-box services-two-col-dropdown"
          style={{
            minWidth: "620px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4px",
            padding: "18px",
            borderRadius: "14px",
            background: "#0B192C"
          }}
        >
          {serviceCategories.map((cat) => (
            <li key={cat.id} style={{ width: "100%", margin: 0 }}>
              <Link
                to={`/services/${cat.slug}`}
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  color: "#cbd5e1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#0B192C",
                  transition: "all 0.2s ease"
                }}
              >
                <span>{cat.title}</span>
                <span className="icon-right-arrow-2" style={{ fontSize: "11px", opacity: 0.6, flexShrink: 0, marginLeft: "6px" }} />
              </Link>
            </li>
          ))}
          <li
            style={{
              gridColumn: "1 / -1",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              marginTop: "8px",
              paddingTop: "10px",
              width: "100%"
            }}
          >
            <Link
              to="/services"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--techguru-base)",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "6px"
              }}
            >
              <span>Explore All IT Services</span>
              <span className="icon-right-arrow" style={{ fontSize: "12px" }} />
            </Link>
          </li>
        </ul>
      </li>
      <li className={location.pathname.includes("/portfolio") ? "current" : ""}>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className={location.pathname.includes("/blog") || location.pathname.includes("/Key-trends") ? "current" : ""}>
        <Link to="/blog-list">Blog</Link>
      </li>
      <li className={location.pathname.includes("/contact") ? "current" : ""}>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
  return <>
      <header className="main-header-two">
        <div className="main-menu-two__top">
          <div className="main-menu-two__top-inner">
            <p className="main-menu-two__top-text">NAPSE Digital – Your Trusted Partner in IT Innovation.</p>
            <ul className="list-unstyled main-menu-two__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-pin" />
                </div>
                <div className="text">
                  <p>Abu Dhabi <br />United Arab Emirates</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-search-mail" />
                </div>
                <div className="text">
                  <p><a href="mailto:cst@napse.ae">cst@napse.ae</a></p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-phone-call" />
                </div>
                <div className="text">
                  <p><a href="tel:971521475975">+971 52 147 5975</a></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
              <div className="main-menu-two__left">
                <div className="main-menu-two__logo">
                  <Link to="/">
                    <img
                      src="/assets/images/resources/napse-logo.png"
                      width="170"
                      alt="NAPSE Logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="main-menu-two__main-menu-box">
                <a
    href="#mobile-menu"
    className="mobile-nav__toggler"
    onClick={(e) => {
      e.preventDefault();
      toggleMobileNav(true);
    }}
    aria-label="Toggle mobile menu"
  >
                  <i className="fa fa-bars" />
                </a>
                {navLinks}
              </div>

              <div className="main-menu-two__right">
                <div className="main-menu-two__search-box">
                  <a
    href="#search"
    className="main-menu-two__search searcher-toggler-box icon-search-interface-symbol"
    onClick={(e) => {
      e.preventDefault();
      toggleSearch(true);
    }}
    aria-label="Open search dialog"
  />
                </div>

                <div className="main-menu-two__btn-box">
                  <Link to="/contact" className="thm-btn">
                    Get in Touch<span className="icon-right-arrow" />
                  </Link>
                </div>

                <div className="main-menu-two__nav-sidebar-icon">
                  <a
    className="navSidebar-button"
    href="#sidebar"
    onClick={(e) => {
      e.preventDefault();
      toggleSidebar(true);
    }}
    aria-label="Open sidebar panel"
  >
                    <span className="icon-dots-menu-one" />
                    <span className="icon-dots-menu-two" />
                    <span className="icon-dots-menu-three" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {
    /* Sticky clone header */
  }
      <div className={`stricky-header stricked-menu main-menu main-menu-two ${isSticky ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
              <div className="main-menu-two__left">
                <div className="main-menu-two__logo">
                  <Link to="/">
                    <img
                      src="/assets/images/resources/napse-logo.png"
                      width="150"
                      alt="NAPSE Logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="main-menu-two__main-menu-box">
                <a
    href="#mobile-menu"
    className="mobile-nav__toggler"
    onClick={(e) => {
      e.preventDefault();
      toggleMobileNav(true);
    }}
    aria-label="Toggle mobile menu"
  >
                  <i className="fa fa-bars" />
                </a>
                {navLinks}
              </div>

              <div className="main-menu-two__right">
                <div className="main-menu-two__search-box">
                  <a
    href="#search"
    className="main-menu-two__search searcher-toggler-box icon-search-interface-symbol"
    onClick={(e) => {
      e.preventDefault();
      toggleSearch(true);
    }}
    aria-label="Open search dialog"
  />
                </div>

                <div className="main-menu-two__btn-box">
                  <Link to="/contact" className="thm-btn">
                    Get in Touch<span className="icon-right-arrow" />
                  </Link>
                </div>

                <div className="main-menu-two__nav-sidebar-icon">
                  <a
    className="navSidebar-button"
    href="#sidebar"
    onClick={(e) => {
      e.preventDefault();
      toggleSidebar(true);
    }}
    aria-label="Open sidebar panel"
  >
                    <span className="icon-dots-menu-one" />
                    <span className="icon-dots-menu-two" />
                    <span className="icon-dots-menu-three" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
