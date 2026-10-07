import { PageHeader } from "../components/PageHeader";
export const TermsAndConditions = () => {
  return <div className="terms-page-wrapper">
      <PageHeader title="Terms &amp; Conditions" currentPage="Terms &amp; Conditions" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ background: "#fff", border: "1px solid #eaeaea", borderRadius: "16px", padding: "50px" }}>
                <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "20px" }}>
                  1. Agreement to Terms
                </h2>
                <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "25px" }}>
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and NAPSE Digital ("Company", "we", "us", or "our"), concerning your access to and use of our IT services, security consultancy, software applications, and managed infrastructure.
                </p>

                <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "20px" }}>
                  2. Service Level Agreements (SLAs)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "25px" }}>
                  Specific enterprise support tiers, infrastructure availability commitments, incident triage response windows, and maintenance schedules are established within dedicated Client Master Services Agreements (MSAs). High-severity security events are prioritized under sub-15-minute response protocols.
                </p>

                <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "20px" }}>
                  3. Data Sovereignty &amp; Privacy
                </h2>
                <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "25px" }}>
                  All client data managed or archived through NAPSE cloud services adheres strictly to the United Arab Emirates Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection. Client records remain the sole proprietary property of the client.
                </p>

                <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "20px" }}>
                  4. Intellectual Property
                </h2>
                <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "25px" }}>
                  Unless otherwise indicated in custom software work orders, all source code, databases, website designs, audio, video, text, and graphics delivered as custom work product become the intellectual property of the commissioning client upon full payment.
                </p>

                <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "20px" }}>
                  5. Contact &amp; Governance
                </h2>
                <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
                  For inquiries regarding terms, corporate compliance, or data protection policies, please contact our legal counsel at <a href="mailto:cst@napse.ae" style={{ color: "#3D72FC" }}>cst@napse.ae</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
