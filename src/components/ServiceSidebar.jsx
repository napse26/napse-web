import { Link } from "react-router-dom";
import { serviceCategories } from "../data/servicesData";

export const ServiceSidebar = ({ category, activeTabId, onSelectTab }) => {
  if (!category) return null;

  return (
    <div className="services-details__left">
      {/* Category Tabs Panel */}
      <div className="services-details__services-list-box">
        <h3 className="services-details__services-list-title">
          {category.title}
        </h3>

        <ul className="services-details__services-list list-unstyled">
          {category.tabs.map((tab) => {
            const isActive = activeTabId === tab.id || activeTabId === tab.slug;
            return (
              <li key={tab.id} className={isActive ? "active" : ""}>
                <a
                  href={`#${tab.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onSelectTab) onSelectTab(tab.slug);
                  }}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "13px 18px",
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#ffffff" : "var(--techguru-gray)",
                    background: isActive
                      ? "linear-gradient(270deg, #5CB0E9 0%, #3D72FC 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s ease",
                    border: "none",
                    width: "100%",
                    textDecoration: "none"
                  }}
                >
                  <span>{tab.title}</span>
                  <span
                    className="icon-right-arrow-2"
                    style={{
                      fontSize: "13px",
                      color: isActive ? "#ffffff" : "rgba(197, 200, 205, 0.7)",
                      transition: "transform 0.3s ease"
                    }}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Quick Category Switcher */}
        <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px dashed rgba(231, 231, 232, 0.15)" }}>
          <label
            htmlFor="service-category-selector"
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.7)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "block",
              marginBottom: "8px",
              fontWeight: 600
            }}
          >
            Switch Category:
          </label>
          <select
            id="service-category-selector"
            aria-label="Switch Service Category"
            value={category.slug}
            onChange={(e) => {
              window.location.href = `/services/${e.target.value}`;
            }}
            style={{
              width: "100%",
              padding: "11px 14px",
              background: "rgba(255, 255, 255, 0.08)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "10px",
              fontSize: "14px",
              cursor: "pointer",
              outline: "none"
            }}
          >
            {serviceCategories.map((cat) => (
              <option key={cat.id} value={cat.slug} style={{ background: "#0D1D35", color: "#fff" }}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Need Help Box */}
      <div className="services-details__need-help">
        <div className="services-details__need-help-img">
          <img
            src="/assets/images/services/services-details-need-help-img.jpg"
            alt="Need Help"
          />
          <div className="services-details__need-help-content">
            <h3 className="services-details__need-help-title">Need Help?</h3>
            <p className="services-details__need-help-number">
              <a href="tel:971521475975">+971 52 147 5975</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
