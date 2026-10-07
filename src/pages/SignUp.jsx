import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", password: "" });
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Account creation requested. An onboarding specialist will verify your corporate domain.");
  };
  return <div className="signup-page-wrapper">
      <PageHeader title="Create Client Account" currentPage="Sign Up" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div
    style={{
      background: "#fff",
      border: "1px solid #eaeaea",
      borderRadius: "16px",
      padding: "50px 40px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
    }}
  >
                <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "10px", textAlign: "center" }}>
                  Register for Client Portal
                </h2>
                <p className="text-muted text-center mb-4">
                  Access 24/7 SIEM monitoring dashboards, procurement pricing, and SLA tracking.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label font-weight-bold">Full Name</label>
                    <input
    type="text"
    className="form-control"
    placeholder="e.g. Pushpendra Singh"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    required
    style={{ height: "48px" }}
  />
                  </div>

                  <div className="mb-3">
                    <label className="form-label font-weight-bold">Work Email Address</label>
                    <input
    type="email"
    className="form-control"
    placeholder="name@company.com"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    required
    style={{ height: "48px" }}
  />
                  </div>

                  <div className="mb-3">
                    <label className="form-label font-weight-bold">Company / Organization</label>
                    <input
    type="text"
    className="form-control"
    placeholder="Company Legal Name"
    value={formData.company}
    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
    required
    style={{ height: "48px" }}
  />
                  </div>

                  <div className="mb-4">
                    <label className="form-label font-weight-bold">Password</label>
                    <input
    type="password"
    className="form-control"
    placeholder="At least 8 characters"
    value={formData.password}
    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    required
    style={{ height: "48px" }}
  />
                  </div>

                  <button type="submit" className="thm-btn w-100 text-center" style={{ padding: "12px" }}>
                    Create Account <span className="icon-right-arrow" />
                  </button>
                </form>

                {msg && <div className="alert alert-success mt-3 text-center">{msg}</div>}

                <div className="text-center mt-4 pt-3 border-top">
                  <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                    Already have an account? <Link to="/login" style={{ color: "#3D72FC", fontWeight: 600 }}>Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
