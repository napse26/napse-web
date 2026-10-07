import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { useApp } from "../context/AppContext";
import { productsData } from "./Products";
export const ProductDetails = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const product = productsData[0];
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("desc");
  const [notice, setNotice] = useState(null);
  const handleAdd = () => {
    addToCart(product, qty);
    setNotice(`Added ${qty} \xD7 "${product.name}" to cart!`);
    setTimeout(() => setNotice(null), 3e3);
  };
  return <div className="product-details-page">
      <PageHeader
    title={product.name}
    currentPage="Product Details"
    parentPage={{ name: "Products", link: "/products" }}
  />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          {notice && <div className="alert alert-success d-flex justify-content-between align-items-center mb-4">
              <span><i className="fa fa-check-circle me-2" /> {notice}</span>
              <Link to="/cart" className="btn btn-sm btn-success">View Cart</Link>
            </div>}

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <div
    style={{
      background: "#fafafa",
      borderRadius: "16px",
      padding: "40px",
      border: "1px solid #eaeaea"
    }}
  >
                <img
    src={product.image}
    alt={product.name}
    style={{ maxWidth: "100%", maxHeight: "350px", objectFit: "contain" }}
  />
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ paddingLeft: "20px" }}>
                <span style={{ color: "#3D72FC", fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
                  {product.category}
                </span>
                <h1 style={{ fontSize: "30px", fontWeight: 800, margin: "10px 0 15px" }}>{product.name}</h1>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <div style={{ color: "#ffb400", fontSize: "14px" }}>
                    <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
                  </div>
                  <span style={{ fontSize: "13px", color: "#888" }}>(18 Customer Reviews)</span>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <span style={{ fontSize: "36px", fontWeight: 800, color: "#1f2532" }}>${product.price}</span>
                  {product.oldPrice && <span style={{ fontSize: "18px", color: "#999", textDecoration: "line-through" }}>
                      ${product.oldPrice}
                    </span>}
                  <span className="badge bg-success">In Stock (Abu Dhabi Hub)</span>
                </div>

                <p style={{ color: "#666", lineHeight: 1.8, fontSize: "15px", marginBottom: "30px" }}>
                  {product.description} Built specifically for enterprise edge security with gigabit inspection throughput, hardware-accelerated encryption, and seamless cloud dashboard telemetry.
                </p>

                <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
                  <div className="input-group" style={{ width: "130px" }}>
                    <button
    className="btn btn-outline-secondary"
    type="button"
    onClick={() => setQty(Math.max(1, qty - 1))}
  >
                      -
                    </button>
                    <input
    type="text"
    className="form-control text-center"
    value={qty}
    readOnly
  />
                    <button
    className="btn btn-outline-secondary"
    type="button"
    onClick={() => setQty(qty + 1)}
  >
                      +
                    </button>
                  </div>

                  <button
    type="button"
    onClick={handleAdd}
    className="thm-btn"
    style={{ padding: "12px 30px" }}
  >
                    <i className="fa fa-shopping-cart me-2" /> Add to Cart
                  </button>

                  <button
    type="button"
    onClick={() => toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      inStock: true
    })}
    className="btn btn-outline-danger"
    style={{ padding: "12px 20px", borderRadius: "5px" }}
    title="Wishlist"
  >
                    <i className={isInWishlist(product.id) ? "fa fa-heart" : "far fa-heart"} />
                  </button>
                </div>

                <ul className="list-unstyled" style={{ fontSize: "14px", lineHeight: 2, color: "#666" }}>
                  <li><strong>SKU:</strong> NPS-RTR-PRO-2025</li>
                  <li><strong>Warranty:</strong> 3-Year Enterprise Replacement</li>
                  <li><strong>Delivery:</strong> Next-Day Delivery across UAE</li>
                </ul>
              </div>
            </div>
          </div>

          {
    /* Product Tabs */
  }
          <div className="mt-5 pt-4 border-top">
            <ul className="nav nav-tabs mb-4" role="tablist">
              <li className="nav-item">
                <button
    className={`nav-link ${activeTab === "desc" ? "active" : ""}`}
    onClick={() => setActiveTab("desc")}
    style={{ fontWeight: 600 }}
  >
                  Technical Description
                </button>
              </li>
              <li className="nav-item">
                <button
    className={`nav-link ${activeTab === "specs" ? "active" : ""}`}
    onClick={() => setActiveTab("specs")}
    style={{ fontWeight: 600 }}
  >
                  Specifications
                </button>
              </li>
              <li className="nav-item">
                <button
    className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
    onClick={() => setActiveTab("reviews")}
    style={{ fontWeight: 600 }}
  >
                  Customer Reviews (18)
                </button>
              </li>
            </ul>

            <div className="tab-content" style={{ padding: "20px 0" }}>
              {activeTab === "desc" && <div>
                  <p style={{ lineHeight: 1.8, color: "#555" }}>
                    Engineered to meet the demanding requirements of distributed enterprise environments,
                    this router features active threat inspection at line rates, integrated VPN tunnels with AES-256 GCM encryption,
                    and automatic failover to cellular 5G backup links.
                  </p>
                </div>}
              {activeTab === "specs" && <table className="table table-bordered" style={{ maxWidth: "600px" }}>
                  <tbody>
                    <tr>
                      <th style={{ width: "40%" }}>Throughput</th>
                      <td>2.5 Gbps Stateful Inspection</td>
                    </tr>
                    <tr>
                      <th>VPN Tunnels</th>
                      <td>Up to 500 Concurrent IPSec/WireGuard</td>
                    </tr>
                    <tr>
                      <th>Interfaces</th>
                      <td>4x 1GbE RJ45, 2x 10GbE SFP+</td>
                    </tr>
                    <tr>
                      <th>Power</th>
                      <td>Dual Redundant Hot-Swap PSUs</td>
                    </tr>
                  </tbody>
                </table>}
              {activeTab === "reviews" && <div>
                  <div className="mb-3 p-3 bg-light rounded">
                    <strong>Hamad Al-Kaabi</strong>
                    <div style={{ color: "#ffb400", fontSize: "12px" }}>
                      <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />
                    </div>
                    <p style={{ margin: "5px 0 0", color: "#666", fontSize: "14px" }}>
                      Rock solid performance. Installed in our primary branch in Abu Dhabi with zero issues.
                    </p>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </section>
    </div>;
};
