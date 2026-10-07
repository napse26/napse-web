import { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { serviceCategories } from "../data/servicesData";

export const MobileNav = () => {
  const { isMobileNavOpen, toggleMobileNav } = useApp();
  const [openSubmenu, setOpenSubmenu] = useState("services");

  const toggleSub = (menu) => {
    setOpenSubmenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    toggleMobileNav(false);
  };

  return (
    <div
      className={`mobile-nav__wrapper ${isMobileNavOpen ? "expanded" : ""}`}
      style={{ zIndex: 99999 }}
    >
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={closeMenu}
        style={{ cursor: "pointer" }}
      />
      <div
        className="mobile-nav__content"
        style={{
          backgroundColor: "#0B192C",
          boxShadow: "10px 0 40px rgba(0, 0, 0, 0.6)"
        }}
      >
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={closeMenu}
          style={{ cursor: "pointer", zIndex: 12 }}
          aria-label="Close Mobile Navigation"
        >
          <i className="fa fa-times" />
        </span>

        <div
          className="logo-box"
          style={{
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            paddingTop: "6px"
          }}
        >
          <Link to="/" onClick={closeMenu} style={{ display: "inline-block" }}>
            <img
              src="/assets/images/resources/napse-logo.png"
              width="155"
              alt="NAPSE Logo"
              style={{
                display: "block",
                maxWidth: "155px",
                height: "auto"
              }}
            />
          </Link>
        </div>

        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
            </li>

            <li className={`dropdown ${openSubmenu === "services" ? "open expanded" : ""}`}>
              <div
                onClick={() => toggleSub("services")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  height: "46px",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "500"
                }}
              >
                <span
                  style={{
                    color: openSubmenu === "services" ? "var(--techguru-base)" : "#ffffff",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  Services
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSub("services");
                  }}
                  style={{
                    background: openSubmenu === "services" ? "var(--techguru-base)" : "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    color: "#fff",
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                  aria-label="Toggle services menu"
                >
                  <i
                    className={`fa fa-chevron-${openSubmenu === "services" ? "up" : "down"}`}
                    style={{ fontSize: "12px" }}
                  />
                </button>
              </div>

              {openSubmenu === "services" && (
                <ul
                  className="sub-menu"
                  style={{
                    display: "block",
                    listStyle: "none",
                    padding: "8px 0 8px 12px",
                    margin: "6px 0 14px",
                    background: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "10px",
                    borderLeft: "3px solid var(--techguru-base)"
                  }}
                >
                  <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "2px 0" }}>
                    <Link
                      to="/services"
                      onClick={closeMenu}
                      style={{
                        color: "var(--techguru-base)",
                        fontWeight: 700,
                        fontSize: "13.5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        height: "auto",
                        padding: "8px 0"
                      }}
                    >
                      <i className="fas fa-th-large" style={{ fontSize: "12px" }} /> All Services Overview
                    </Link>
                  </li>
                  {serviceCategories.map((cat) => (
                    <li
                      key={cat.id}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        padding: "2px 0"
                      }}
                    >
                      <Link
                        to={`/services/${cat.slug}`}
                        onClick={closeMenu}
                        style={{
                          fontSize: "13.5px",
                          color: "#e2e8f0",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          height: "auto",
                          padding: "7px 0",
                          transition: "color 0.2s ease"
                        }}
                      >
                        <i className="fas fa-angle-right" style={{ color: "var(--techguru-base)", fontSize: "11px", flexShrink: 0 }} />
                        <span>{cat.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
            </li>

            <li>
              <Link to="/blog-list" onClick={closeMenu}>Blog</Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled" style={{ marginTop: "30px" }}>
          <li style={{ marginBottom: "10px" }}>
            <i className="fa fa-envelope" style={{ color: "var(--techguru-base)", marginRight: "10px" }} />
            <a href="mailto:cst@napse.ae" style={{ color: "#fff" }}>cst@napse.ae</a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <i className="fas fa-phone" style={{ color: "var(--techguru-base)", marginRight: "10px" }} />
            <a href="tel:971521475975" style={{ color: "#fff" }}>+971 52 147 5975</a>
          </li>
          <li>
            <i className="fa fa-map-marker-alt" style={{ color: "var(--techguru-base)", marginRight: "10px" }} />
            <span style={{ color: "rgba(255,255,255,0.75)" }}>Abu Dhabi, United Arab Emirates</span>
          </li>
        </ul>

        <div className="mobile-nav__top" style={{ marginTop: "24px" }}>
          <div className="mobile-nav__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-f" />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fab fa-twitter" />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin-in" />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
