import { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
export const SidebarDrawer = () => {
  const { isSidebarOpen, toggleSidebar } = useApp();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    type: "idle",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    setStatus({ type: "idle", message: "" });
    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "Sidebar Quick Quote"
        })
      });
      const data = await res.json();
      setStatus({
        type: "success",
        message: data.message || "Thank you! Your quote request has been sent successfully."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "success",
        message: "Thank you! Your request has been received."
      });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };
  return <div className={`xs-sidebar-group info-group info-sidebar ${isSidebarOpen ? "isActive" : ""}`}>
      <div
    className="xs-overlay xs-bg-black"
    onClick={() => toggleSidebar(false)}
    style={{ cursor: "pointer" }}
  />
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a
    href="#close"
    className="close-side-widget"
    onClick={(e) => {
      e.preventDefault();
      toggleSidebar(false);
    }}
  >
              X
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <div className="logo-box">
                    <Link to="/" onClick={() => toggleSidebar(false)}>
                      <img
                        src="/assets/images/resources/napse-logo.png"
                        width="170"
                        alt="NAPSE Logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="content-box">
                  <h4>About Us</h4>
                  <p>
                    Driven by innovation and trust, we deliver tailored IT solutions that turn
                    technology into your competitive advantage.
                  </p>
                </div>
                <div className="form-inner">
                  <h4>Get a free quote</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
    type="text"
    name="name"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    placeholder="Name"
    required
  />
                    </div>
                    <div className="form-group">
                      <input
    type="email"
    name="email"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    placeholder="Email"
    required
  />
                    </div>
                    <div className="form-group">
                      <textarea
    name="message"
    value={formData.message}
    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    placeholder="Message..."
    rows={3}
  />
                    </div>
                    <div className="form-group message-btn">
                      <button type="submit" className="thm-btn form-inner__btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Now"}
                        <span className="icon-right-arrow" />
                      </button>
                    </div>
                  </form>
                  {status.type === "success" && <div
    className="result mt-3"
    style={{
      padding: "10px 14px",
      background: "#d4edda",
      color: "#155724",
      border: "1px solid #c3e6cb",
      borderRadius: "4px",
      fontSize: "13px"
    }}
  >
                      {status.message}
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
