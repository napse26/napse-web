import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 14, minutes: 22, seconds: 40 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { ...prev, days: Math.max(0, prev.days - 1), hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  return <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0b111e 0%, #1f2b45 100%)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "60px 20px"
    }}
  >
      <div style={{ maxWidth: "750px" }}>
        <Link to="/">
          <img
            src="/assets/images/resources/napse-logo.png"
            width="200"
            alt="NAPSE Logo"
            style={{ marginBottom: "35px" }}
          />
        </Link>
        <span style={{ color: "var(--techguru-base)", letterSpacing: "2px", fontWeight: 700, textTransform: "uppercase" }}>
          NEW FEATURE LAUNCH
        </span>
        <h1 style={{ fontSize: "42px", fontWeight: 800, margin: "15px 0 25px" }}>
          Something Powerful Is Coming Soon
        </h1>
        <p style={{ color: "#ccc", fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
          We are deploying our next-generation automated SOC telemetry platform and client self-service portal. Stay tuned for launch announcements.
        </p>

        {
    /* Countdown */
  }
        <div className="d-flex justify-content-center gap-3 gap-md-4 mb-5 flex-wrap">
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px 25px", minWidth: "100px" }}>
            <span style={{ fontSize: "38px", fontWeight: 800, color: "var(--techguru-base)" }}>{timeLeft.days}</span>
            <div style={{ fontSize: "13px", textTransform: "uppercase", color: "#aaa", marginTop: "5px" }}>Days</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px 25px", minWidth: "100px" }}>
            <span style={{ fontSize: "38px", fontWeight: 800, color: "var(--techguru-base)" }}>{timeLeft.hours}</span>
            <div style={{ fontSize: "13px", textTransform: "uppercase", color: "#aaa", marginTop: "5px" }}>Hours</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px 25px", minWidth: "100px" }}>
            <span style={{ fontSize: "38px", fontWeight: 800, color: "var(--techguru-base)" }}>{timeLeft.minutes}</span>
            <div style={{ fontSize: "13px", textTransform: "uppercase", color: "#aaa", marginTop: "5px" }}>Minutes</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px 25px", minWidth: "100px" }}>
            <span style={{ fontSize: "38px", fontWeight: 800, color: "var(--techguru-base)" }}>{timeLeft.seconds}</span>
            <div style={{ fontSize: "13px", textTransform: "uppercase", color: "#aaa", marginTop: "5px" }}>Seconds</div>
          </div>
        </div>

        <Link to="/" className="thm-btn" style={{ padding: "14px 40px" }}>
          Back to Homepage <span className="icon-right-arrow" />
        </Link>
      </div>
    </div>;
};
export const NotFound = () => {
  return <div className="error-page-wrapper">
      <section style={{ padding: "220px 0 120px", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <img
    src="/assets/images/resources/error-page-img1.png"
    alt="404 Error"
    style={{ maxWidth: "350px", marginBottom: "30px" }}
  />
            <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "15px" }}>
              Oops! Page Not Found
            </h1>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, marginBottom: "30px" }}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="thm-btn">
              Back to Home <span className="icon-right-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
