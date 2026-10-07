import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { useApp } from "../context/AppContext";
export const Checkout = () => {
  const { cart, cartSubtotal } = useApp();
  const [completed, setCompleted] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    paymentMethod: "invoice"
  });
  const handleOrder = (e) => {
    e.preventDefault();
    setCompleted(true);
  };
  return <div className="checkout-page-wrapper">
      <PageHeader title="Order Checkout" currentPage="Checkout" parentPage={{ name: "Cart", link: "/cart" }} />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          {completed ? <div className="text-center py-5">
              <div style={{ fontSize: "64px", color: "#28a745", marginBottom: "20px" }}>
                <i className="fa fa-check-circle" />
              </div>
              <h2 style={{ fontWeight: 800, marginBottom: "15px" }}>Thank You for Your Enterprise Order!</h2>
              <p style={{ maxWidth: "600px", margin: "0 auto 25px", color: "#666", fontSize: "16px" }}>
                Your procurement request has been generated under reference <strong>#NPS-ORD-{Math.floor(1e5 + Math.random() * 9e5)}</strong>.
                Our corporate billing desk in Abu Dhabi will dispatch your invoice and tracking details to <strong>{checkoutForm.email}</strong>.
              </p>
              <Link to="/" className="thm-btn">
                Return to Homepage <span className="icon-right-arrow" />
              </Link>
            </div> : <form onSubmit={handleOrder}>
              <div className="row">
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "25px" }}>
                    Billing &amp; Delivery Information
                  </h3>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label font-weight-bold">First Name *</label>
                      <input
    type="text"
    className="form-control"
    required
    value={checkoutForm.firstName}
    onChange={(e) => setCheckoutForm({ ...checkoutForm, firstName: e.target.value })}
  />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label font-weight-bold">Last Name *</label>
                      <input
    type="text"
    className="form-control"
    required
    value={checkoutForm.lastName}
    onChange={(e) => setCheckoutForm({ ...checkoutForm, lastName: e.target.value })}
  />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label font-weight-bold">Company Email *</label>
                      <input
    type="email"
    className="form-control"
    required
    value={checkoutForm.email}
    onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
  />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label font-weight-bold">Phone Number *</label>
                      <input
    type="text"
    className="form-control"
    required
    value={checkoutForm.phone}
    onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
  />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label font-weight-bold">Street Address *</label>
                      <input
    type="text"
    className="form-control"
    required
    placeholder="Office or facility address"
    value={checkoutForm.address}
    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
  />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label font-weight-bold">City / Emirate *</label>
                      <input
    type="text"
    className="form-control"
    value={checkoutForm.city}
    onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
    required
  />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label font-weight-bold">Country</label>
                      <input
    type="text"
    className="form-control"
    value={checkoutForm.country}
    readOnly
  />
                    </div>
                  </div>

                  <h4 style={{ fontSize: "18px", fontWeight: 700, margin: "30px 0 15px" }}>
                    Payment Mode
                  </h4>
                  <div className="form-check mb-2">
                    <input
    className="form-check-input"
    type="radio"
    name="paymentMethod"
    id="invoice"
    checked={checkoutForm.paymentMethod === "invoice"}
    onChange={() => setCheckoutForm({ ...checkoutForm, paymentMethod: "invoice" })}
  />
                    <label className="form-check-label" htmlFor="invoice">
                      Enterprise Corporate Invoice / Net 30 Terms
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
    className="form-check-input"
    type="radio"
    name="paymentMethod"
    id="creditcard"
    checked={checkoutForm.paymentMethod === "creditcard"}
    onChange={() => setCheckoutForm({ ...checkoutForm, paymentMethod: "creditcard" })}
  />
                    <label className="form-check-label" htmlFor="creditcard">
                      Corporate Credit Card / Wire Transfer
                    </label>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div style={{ background: "#f8f9fb", padding: "35px", borderRadius: "12px", border: "1px solid #eaeaea" }}>
                    <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>Your Order</h4>

                    <ul className="list-unstyled mb-4" style={{ lineHeight: 2.2 }}>
                      {cart.map((item) => <li key={item.id} className="d-flex justify-content-between border-bottom py-2">
                          <span>{item.name} × {item.quantity}</span>
                          <strong>${item.price * item.quantity}</strong>
                        </li>)}
                    </ul>

                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Subtotal</span>
                      <strong>${cartSubtotal}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">UAE Courier Dispatch</span>
                      <span className="text-success font-weight-bold">Free</span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-4">
                      <strong style={{ fontSize: "18px" }}>Total Due</strong>
                      <strong style={{ fontSize: "24px", color: "#3D72FC" }}>${cartSubtotal}</strong>
                    </div>

                    <button type="submit" className="thm-btn w-100 text-center" style={{ padding: "12px" }}>
                      Place Order &amp; Generate Invoice <span className="icon-right-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </form>}
        </div>
      </section>
    </div>;
};
