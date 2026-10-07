import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
export const teamMembers = [
  {
    id: 1,
    name: "James Carter",
    role: "CEO & Founder",
    image: "/assets/images/team/team-1-1.jpg"
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    role: "Chief Technology Officer",
    image: "/assets/images/team/team-1-2.jpg"
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Head of Cybersecurity",
    image: "/assets/images/team/team-1-3.jpg"
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Lead Cloud Architect",
    image: "/assets/images/team/team-1-4.jpg"
  },
  {
    id: 5,
    name: "Daniel Craig",
    role: "Senior DevOps Engineer",
    image: "/assets/images/team/team-1-5.jpg"
  },
  {
    id: 6,
    name: "Aisha Al-Nuaimi",
    role: "Enterprise Solutions Lead",
    image: "/assets/images/team/team-1-6.jpg"
  },
  {
    id: 7,
    name: "Liam Chen",
    role: "Lead Software Engineer",
    image: "/assets/images/team/team-1-7.jpg"
  },
  {
    id: 8,
    name: "Maya Patel",
    role: "Principal UI/UX Architect",
    image: "/assets/images/team/team-1-8.jpg"
  }
];
export const Team = () => {
  return <div className="team-page-wrapper">
      <PageHeader title="Our Team Members" currentPage="Team" />

      <section className="team-page" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">MEET THE EXPERTS</span>
            </div>
            <h2 className="section-title__title">
              The Dedicated Minds Behind <span>NAPSE Digital</span>
            </h2>
          </div>

          <div className="row mt-5">
            {teamMembers.map((member) => <div key={member.id} className="col-xl-3 col-lg-6 col-md-6 mb-4">
                <div
    className="team-one__single"
    style={{
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #eee"
    }}
  >
                  <div className="team-one__img-box">
                    <img
    src={member.image}
    alt={member.name}
    style={{ width: "100%", height: "280px", objectFit: "cover" }}
  />
                  </div>
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <p style={{ color: "#3D72FC", fontSize: "13px", fontWeight: 600, margin: "0 0 5px" }}>
                      {member.role}
                    </p>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 12px" }}>
                      <Link to="/team-details">{member.name}</Link>
                    </h4>
                    <div style={{ display: "flex", justifyContent: "center", gap: "12px", color: "#666" }}>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="mailto:cst@napse.ae" aria-label="Email">
                        <i className="fa fa-envelope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
