import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const blogArticles = [
  {
    id: "key-trends",
    title: "Key Trends Shaping the Future of Enterprise Technology",
    date: "24 Sep, 2025",
    author: "Pushpendra Singh",
    commentsCount: 3,
    category: "Cyber Security",
    image: "/assets/images/blog/blog-page-1-1.jpg",
    excerpt: "Explore how AI-powered security monitoring, zero-trust infrastructure, and hybrid cloud migrations are redefining business resiliency.",
    link: "/Key-trends-shaping-the-future-of-technology"
  },
  {
    id: "cloud-resilience",
    title: "Migrating Legacy Enterprise Monoliths to Modern Cloud",
    date: "18 Sep, 2025",
    author: "Elena Rostova",
    commentsCount: 5,
    category: "Cloud Solutions",
    image: "/assets/images/blog/blog-page-1-2.jpg",
    excerpt: "Step-by-step best practices for decoupling database layers, setting up multi-region failovers, and containing consumption costs.",
    link: "/blog-details"
  },
  {
    id: "data-privacy-uae",
    title: "Compliance & Data Protection in the UAE & GCC Region",
    date: "12 Sep, 2025",
    author: "Sophia Reynolds",
    commentsCount: 2,
    category: "Data Governance",
    image: "/assets/images/blog/blog-page-1-3.jpg",
    excerpt: "A comprehensive technical overview of UAE Data Protection regulations, encryption standards, and auditing protocols.",
    link: "/blog-details"
  },
  {
    id: "endpoint-edr",
    title: "Why Traditional Antivirus Fails Against Zero-Day Attacks",
    date: "05 Sep, 2025",
    author: "Marcus Vance",
    commentsCount: 4,
    category: "Endpoint Security",
    image: "/assets/images/blog/blog-page-1-4.jpg",
    excerpt: "Understanding behavioral anomaly detection and how Endpoint Detection and Response (EDR) neutralizes in-memory exploits.",
    link: "/blog-details"
  },
  {
    id: "smart-automation",
    title: "Accelerating Business Velocity with Workflow Automation",
    date: "28 Aug, 2025",
    author: "Daniel Craig",
    commentsCount: 1,
    category: "Automation",
    image: "/assets/images/blog/blog-page-1-5.jpg",
    excerpt: "How integrating enterprise webhooks and automated scripts eliminates manual handoffs and human entry errors.",
    link: "/blog-details"
  },
  {
    id: "disaster-rto",
    title: "Calculating RTO and RPO for Mission-Critical Financial Data",
    date: "19 Aug, 2025",
    author: "James Carter",
    commentsCount: 6,
    category: "Disaster Recovery",
    image: "/assets/images/blog/blog-page-1-6.jpg",
    excerpt: "Practical guidelines on architecting immutable, air-gapped backups that withstand sophisticated ransomware campaigns.",
    link: "/blog-details"
  }
];
export const Blog = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [search, setSearch] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Cyber Security", "Cloud Solutions", "Data Governance", "Endpoint Security", "Automation", "Disaster Recovery"];
  const filtered = blogArticles.filter((art) => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase()) || art.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="blog-page-wrapper">
      <PageHeader title="Latest Tech Insights" currentPage="Blog" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          {
    /* Filter and Search Bar */
  }
          <div className="row mb-5 align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <div className="d-flex gap-2 flex-wrap">
                {categories.map((c) => <button
    key={c}
    type="button"
    onClick={() => setSelectedCategory(c)}
    className={`btn btn-sm ${selectedCategory === c ? "btn-primary" : "btn-outline-secondary"}`}
    style={{ borderRadius: "20px", padding: "6px 16px", fontWeight: 600 }}
  >
                    {c}
                  </button>)}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="input-group">
                <input
    type="text"
    className="form-control"
    placeholder="Search articles..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
                {search && <button className="btn btn-outline-secondary" onClick={() => setSearch("")}>
                    Clear
                  </button>}
              </div>
            </div>
          </div>

          <div className="row">
            {filtered.length > 0 ? filtered.map((article) => <div key={article.id} className="col-xl-4 col-lg-6 col-md-6 mb-4">
                  <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #eaeaea",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
                    <div style={{ position: "relative" }}>
                      <img
    src={article.image}
    alt={article.title}
    style={{ width: "100%", height: "220px", objectFit: "cover" }}
  />
                      <span
    style={{
      position: "absolute",
      top: "15px",
      left: "15px",
      background: "var(--techguru-base)",
      color: "#0B192C",
      fontSize: "11px",
      fontWeight: 700,
      padding: "4px 10px",
      borderRadius: "4px",
      textTransform: "uppercase"
    }}
  >
                        {article.category}
                      </span>
                    </div>

                    <div style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ fontSize: "13px", color: "#888", marginBottom: "10px" }}>
                        <span><i className="fa fa-calendar-alt me-1" /> {article.date}</span>
                        <span className="ms-3"><i className="fa fa-user me-1" /> {article.author}</span>
                      </div>

                      <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px" }}>
                        <Link to={article.link}>{article.title}</Link>
                      </h3>

                      <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, flex: 1 }}>
                        {article.excerpt}
                      </p>

                      <div style={{ marginTop: "20px" }}>
                        <Link
    to={article.link}
    className="thm-btn"
    style={{ padding: "8px 20px", fontSize: "13px" }}
  >
                          Read Article <span className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>) : <div className="col-12 text-center py-5">
                <h4>No articles matched your criteria.</h4>
                <p className="text-muted">Try clearing your filters or searching for another topic.</p>
                <button
    className="btn btn-primary mt-2"
    onClick={() => {
      setSelectedCategory("All");
      setSearch("");
    }}
  >
                  Reset Filters
                </button>
              </div>}
          </div>
        </div>
      </section>
    </div>;
};
