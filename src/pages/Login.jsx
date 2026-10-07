import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Enterprise SSO sign-in initiated. Redirecting to workspace portal...");
  };
  return <div className="login-page-wrapper">
      <PageHeader title="Client Portal Sign In" currentPage="Login" />

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
                  Welcome Back
                </h2>
                <p className="text-muted text-center mb-4">
                  Log in to access your telemetry dashboards, SLA tickets, and cloud resources.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label font-weight-bold">Email Address</label>
                    <input
    type="email"
    className="form-control"
    placeholder="name@company.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    style={{ height: "48px" }}
  />
                  </div>

                  <div className="mb-3">
                    <label className="form-label font-weight-bold">Password</label>
                    <input
    type="password"
    className="form-control"
    placeholder="••••••••"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    style={{ height: "48px" }}
  />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                      <label className="form-check-label text-muted" htmlFor="rememberMe" style={{ fontSize: "13px" }}>
                        Remember device
                      </label>
                    </div>
                    <a href="#forgot" onClick={(e) => {
    e.preventDefault();
    setMsg("Password recovery link sent to your registered email.");
  }} style={{ fontSize: "13px", color: "#3D72FC" }}>
                      Forgot Password?
                    </a>
                  </div>

                  <button type="submit" className="thm-btn w-100 text-center" style={{ padding: "12px" }}>
                    Sign In <span className="icon-right-arrow" />
                  </button>
                </form>

                {msg && <div className="alert alert-info mt-3 text-center">{msg}</div>}

                <div className="text-center mt-4 pt-3 border-top">
                  <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                    Don't have an enterprise account? <Link to="/sign-up" style={{ color: "#3D72FC", fontWeight: 600 }}>Create Account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
