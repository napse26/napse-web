import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { useApp } from "../context/AppContext";
export const productsData = [
  {
    id: "prod-1",
    name: "Next-Gen Firewall Router Pro",
    price: 299,
    oldPrice: 349,
    category: "Hardware",
    rating: 5,
    image: "/assets/images/shop/shop-product-1-1.png",
    description: "Gigabit throughput hardware firewall with deep packet inspection and intrusion defense."
  },
  {
    id: "prod-2",
    name: "Zero-Trust Secure Access Gateway",
    price: 189,
    oldPrice: 219,
    category: "Security",
    rating: 5,
    image: "/assets/images/shop/shop-product-1-2.png",
    description: "Encrypted micro-tunnel appliance for decentralized remote workforce connectivity."
  },
  {
    id: "prod-3",
    name: "Enterprise Endpoint Shield License",
    price: 149,
    oldPrice: 179,
    category: "Software",
    rating: 4,
    image: "/assets/images/shop/shop-product-1-3.png",
    description: "Annual multi-device EDR license with automated behavioral anomaly detection."
  },
  {
    id: "prod-4",
    name: "Cloud Backup Storage Hub 5TB",
    price: 450,
    oldPrice: 520,
    category: "Storage",
    rating: 5,
    image: "/assets/images/shop/shop-product-1-4.png",
    description: "Air-gapped immutable cloud storage with automated hourly snapshot retention."
  },
  {
    id: "prod-5",
    name: "FIDO2 Hardware Security Keys (Pack of 3)",
    price: 120,
    category: "Hardware",
    rating: 5,
    image: "/assets/images/shop/shop-product-1-5.png",
    description: "NFC and USB-C biometric-compatible cryptographic physical authentication tokens."
  },
  {
    id: "prod-6",
    name: "Network Threat Probe Appliance",
    price: 580,
    oldPrice: 650,
    category: "Hardware",
    rating: 5,
    image: "/assets/images/shop/shop-product-1-6.png",
    description: "Rack-mount packet analyzer with continuous telemetry export to central SIEM."
  }
];
export const Products = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const [selectedCat, setSelectedCat] = useState("All");
  const [addedNotice, setAddedNotice] = useState(null);
  const categories = ["All", "Hardware", "Security", "Software", "Storage"];
  const filtered = selectedCat === "All" ? productsData : productsData.filter((p) => p.category === selectedCat);
  const handleAdd = (product) => {
    addToCart(product, 1);
    setAddedNotice(`Added "${product.name}" to cart!`);
    setTimeout(() => setAddedNotice(null), 3e3);
  };
  return <div className="products-page">
      <PageHeader title="Store &amp; Hardware Products" currentPage="Products" />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          {addedNotice && <div
    className="alert alert-success d-flex justify-content-between align-items-center mb-4"
    style={{ borderRadius: "8px" }}
  >
              <span>
                <i className="fa fa-check-circle me-2" /> {addedNotice}
              </span>
              <Link to="/cart" className="btn btn-sm btn-success">
                View Cart
              </Link>
            </div>}

          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
            <div>
              <span className="section-title__tagline">CERTIFIED IT EQUIPMENT</span>
              <h2 className="section-title__title" style={{ fontSize: "28px" }}>
                Hardware &amp; Enterprise Security Licenses
              </h2>
            </div>
            <div className="btn-group" role="group">
              {categories.map((c) => <button
    key={c}
    type="button"
    onClick={() => setSelectedCat(c)}
    className={`btn btn-sm ${selectedCat === c ? "btn-primary" : "btn-outline-secondary"}`}
    style={{ borderRadius: "20px", margin: "2px", padding: "6px 16px", fontWeight: 600 }}
  >
                  {c}
                </button>)}
            </div>
          </div>

          <div className="row">
            {filtered.map((p) => <div key={p.id} className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      border: "1px solid #eaeaea",
      padding: "25px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }}
  >
                  <button
    type="button"
    onClick={() => toggleWishlist({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      inStock: true
    })}
    style={{
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "none",
      border: "none",
      fontSize: "20px",
      color: isInWishlist(p.id) ? "#dc3545" : "#ccc",
      cursor: "pointer",
      zIndex: 2
    }}
    title="Add to wishlist"
    aria-label="Toggle wishlist"
  >
                    <i className={isInWishlist(p.id) ? "fa fa-heart" : "far fa-heart"} />
                  </button>

                  <div style={{ textAlign: "center", padding: "20px 0", background: "#fafafa", borderRadius: "8px" }}>
                    <img
    src={p.image}
    alt={p.name}
    style={{ maxHeight: "200px", maxWidth: "100%", objectFit: "contain" }}
  />
                  </div>

                  <div style={{ marginTop: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "12px", color: "#3D72FC", fontWeight: 700, textTransform: "uppercase" }}>
                      {p.category}
                    </span>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "8px 0" }}>
                      <Link to="/product-details">{p.name}</Link>
                    </h4>
                    <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6, flex: 1 }}>
                      {p.description}
                    </p>

                    <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
                      <div>
                        <span style={{ fontSize: "22px", fontWeight: 800, color: "#1f2532" }}>
                          ${p.price}
                        </span>
                        {p.oldPrice && <span style={{ fontSize: "14px", color: "#999", textDecoration: "line-through", marginLeft: "8px" }}>
                            ${p.oldPrice}
                          </span>}
                      </div>
                      <button
    type="button"
    onClick={() => handleAdd(p)}
    className="thm-btn"
    style={{ padding: "8px 18px", fontSize: "13px" }}
  >
                        <i className="fa fa-cart-plus me-1" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
