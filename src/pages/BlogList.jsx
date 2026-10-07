import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { blogArticles } from "./Blog";
export const BlogList = () => {
  return <div className="blog-list-page">
      <PageHeader title="Blog List View" currentPage="Blog List" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {blogArticles.map((art) => <div
    key={art.id}
    style={{
      background: "#fff",
      borderRadius: "12px",
      border: "1px solid #eaeaea",
      overflow: "hidden",
      marginBottom: "40px"
    }}
  >
                  <Link to={art.link}>
                    <img
                      src={art.image}
                      alt={art.title}
                      style={{ width: "100%", maxHeight: "380px", objectFit: "cover", display: "block" }}
                    />
                  </Link>
                  <div style={{ padding: "35px" }}>
                    <div className="d-flex gap-3 text-muted mb-2" style={{ fontSize: "13px" }}>
                      <span><i className="fa fa-calendar-alt text-primary me-1" /> {art.date}</span>
                      <span><i className="fa fa-user text-primary me-1" /> {art.author}</span>
                      <span><i className="fa fa-folder text-primary me-1" /> {art.category}</span>
                    </div>

                    <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "12px 0 15px", lineHeight: 1.4 }}>
                      <Link to={art.link}>{art.title}</Link>
                    </h2>

                    <p style={{ color: "#555", lineHeight: 1.8, fontSize: "15px" }}>{art.excerpt}</p>

                    <div style={{ marginTop: "25px" }}>
                      <Link to={art.link} className="thm-btn" style={{ padding: "10px 26px", fontSize: "14px" }}>
                        Read Full Story <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>)}
            </div>

            {
    /* Sidebar */
  }
            <div className="col-lg-4">
              <div style={{ background: "#f8f9fb", padding: "30px", borderRadius: "12px", marginBottom: "30px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>Search Articles</h4>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <button className="btn btn-primary" type="button"><i className="fa fa-search" /></button>
                </div>
              </div>

              <div style={{ background: "#f8f9fb", padding: "30px", borderRadius: "12px", marginBottom: "30px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>Categories</h4>
                <ul className="list-unstyled" style={{ lineHeight: 2.4 }}>
                  <li><Link to="/blog">Cyber Security</Link></li>
                  <li><Link to="/blog">Cloud Solutions</Link></li>
                  <li><Link to="/blog">Data Protection</Link></li>
                  <li><Link to="/blog">Software Engineering</Link></li>
                  <li><Link to="/blog">Disaster Recovery</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export const BlogList2 = () => {
  return <div className="blog-list-page">
      <PageHeader title="Blog List Style 2" currentPage="Blog List 2" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row">
            {blogArticles.map((art) => <div key={art.id} className="col-lg-6 mb-4">
                <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      border: "1px solid #eaeaea",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: "100%"
    }}
  >
                  <Link to={art.link}>
                    <img src={art.image} alt={art.title} style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }} />
                  </Link>
                  <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "#3D72FC", fontSize: "12px", fontWeight: 700, textTransform: "uppercase" }}>
                      {art.category}
                    </span>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "10px 0", lineHeight: 1.4 }}>
                      <Link to={art.link}>{art.title}</Link>
                    </h3>
                    <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, flex: 1 }}>{art.excerpt}</p>
                    <div style={{ marginTop: "20px" }}>
                      <Link to={art.link} className="thm-btn" style={{ padding: "8px 20px", fontSize: "13px" }}>
                        Read Article <span className="icon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
