import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const BlogDetails = () => {
  const [commentForm, setCommentForm] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([
    {
      name: "Ahmed Al-Zaabi",
      date: "20 Sep, 2025 at 10:30 am",
      text: "Remarkable insight on multi-region database failovers. We recently encountered this exact challenge with our regional microservices."
    },
    {
      name: "Claire Dupont",
      date: "22 Sep, 2025 at 2:15 pm",
      text: "Excellent breakdown of zero-trust architecture. Clean, actionable recommendations for engineering directors."
    }
  ]);
  const [submitted, setSubmitted] = useState(false);
  const handleComment = (e) => {
    e.preventDefault();
    if (commentForm.name && commentForm.message) {
      setComments((prev) => [
        ...prev,
        {
          name: commentForm.name,
          date: "Just now",
          text: commentForm.message
        }
      ]);
      setCommentForm({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5e3);
    }
  };
  return <div className="blog-details-page">
      <PageHeader
    title="Blog Post Details"
    currentPage="Blog Details"
    parentPage={{ name: "Blog", link: "/blog" }}
  />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details__content">
                <img
    src="/assets/images/blog/blog-details-img-1.jpg"
    alt="Blog Hero"
    style={{ width: "100%", maxHeight: "420px", objectFit: "cover", borderRadius: "12px" }}
  />

                <div className="d-flex gap-3 text-muted my-3" style={{ fontSize: "13px" }}>
                  <span><i className="fa fa-calendar-alt text-primary me-1" /> 24 Sep, 2025</span>
                  <span><i className="fa fa-user text-primary me-1" /> Pushpendra Singh</span>
                  <span><i className="fa fa-folder text-primary me-1" /> Cyber Security</span>
                </div>

                <h1 style={{ fontSize: "30px", fontWeight: 800, margin: "20px 0", lineHeight: 1.4 }}>
                  Architecting Resilient Enterprise Infrastructure in the Era of Autonomous Threats
                </h1>

                <p style={{ color: "#555", lineHeight: 1.8, fontSize: "16px", marginBottom: "20px" }}>
                  As organizations accelerate their digital transformation initiatives, modern IT networks have expanded far beyond the traditional physical enterprise perimeter. Between distributed hybrid workforces, multi-cloud dependencies, and specialized SaaS integrations, legacy defense perimeters no longer suffice.
                </p>

                <p style={{ color: "#555", lineHeight: 1.8, fontSize: "16px", marginBottom: "25px" }}>
                  Modern attackers leverage automated scanning bots and AI-augmented phishing campaigns capable of discovering misconfigured cloud buckets or unpatched endpoint libraries within minutes of exposure. To remain resilient, engineering leadership must adopt a zero-trust model where every packet, identity, and process is verified continuously.
                </p>

                <blockquote
    style={{
      borderLeft: "4px solid var(--techguru-base)",
      padding: "20px 30px",
      background: "#f8f9fb",
      borderRadius: "0 8px 8px 0",
      fontStyle: "italic",
      fontSize: "17px",
      color: "#333",
      margin: "35px 0"
    }}
  >
                  "Security is no longer a peripheral gatekeeper; it is an architectural foundation that directly governs business continuity, customer trust, and market resilience."
                </blockquote>

                <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "25px 0 15px" }}>
                  Core Pillars of Next-Gen Architecture
                </h3>
                <ul style={{ lineHeight: 2, color: "#555", fontSize: "15px" }}>
                  <li>Continuous Telemetry with Automated Behavioral Anomaly Detection</li>
                  <li>Decoupled Infrastructure as Code (IaC) with Immutable Auditing</li>
                  <li>Multi-Factor Authentication paired with Hardware FIDO2 Tokens</li>
                  <li>Air-Gapped, Ransomware-Proof Cloud Backups with Sub-Hour Recovery Testing</li>
                </ul>

                <hr style={{ margin: "40px 0" }} />

                {
    /* Comments Section */
  }
                <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "25px" }}>
                  Comments ({comments.length})
                </h3>

                <div className="comments-list mb-5">
                  {comments.map((c, i) => <div
    key={i}
    style={{
      padding: "20px",
      background: "#f8f9fa",
      borderRadius: "8px",
      marginBottom: "15px"
    }}
  >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong style={{ fontSize: "16px" }}>{c.name}</strong>
                        <span style={{ fontSize: "12px", color: "#888" }}>{c.date}</span>
                      </div>
                      <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: 1.6 }}>{c.text}</p>
                    </div>)}
                </div>

                {
    /* Leave a Comment */
  }
                <div style={{ background: "#fff", border: "1px solid #eaeaea", padding: "30px", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>Leave a Comment</h4>
                  <form onSubmit={handleComment}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
    type="text"
    className="form-control"
    placeholder="Your Name *"
    value={commentForm.name}
    onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
    required
  />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
    type="email"
    className="form-control"
    placeholder="Your Email *"
    value={commentForm.email}
    onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
    required
  />
                      </div>
                      <div className="col-12 mb-3">
                        <textarea
    className="form-control"
    rows={4}
    placeholder="Your Comment..."
    value={commentForm.message}
    onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
    required
  />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="thm-btn">
                          Post Comment <span className="icon-right-arrow" />
                        </button>
                      </div>
                    </div>
                  </form>
                  {submitted && <div className="alert alert-success mt-3">
                      Thank you! Your comment has been posted.
                    </div>}
                </div>
              </div>
            </div>

            {
    /* Sidebar */
  }
            <div className="col-lg-4">
              <div style={{ background: "#f8f9fb", padding: "30px", borderRadius: "12px", marginBottom: "30px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "15px" }}>About Author</h4>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>
                  Pushpendra Singh is the Founder &amp; Managing Director of NAPSE Digital, advising regional enterprises on cybersecurity defense and cloud transformation.
                </p>
              </div>

              <div style={{ background: "#f8f9fb", padding: "30px", borderRadius: "12px", marginBottom: "30px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>Need IT Consulting?</h4>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Our senior engineering leads can audit your environment and provide actionable architecture roadmaps.
                </p>
                <Link to="/contact" className="thm-btn w-100 text-center mt-3" style={{ padding: "10px" }}>
                  Contact Engineers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
