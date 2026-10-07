import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { useApp } from "../context/AppContext";
export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartSubtotal } = useApp();
  return <div className="cart-page-wrapper">
      <PageHeader title="Shopping Cart" currentPage="Cart" parentPage={{ name: "Store", link: "/products" }} />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          {cart.length === 0 ? <div className="text-center py-5">
              <div style={{ fontSize: "60px", color: "#ccc", marginBottom: "20px" }}>
                <i className="fa fa-shopping-cart" />
              </div>
              <h3 style={{ fontWeight: 700 }}>Your Cart is Empty</h3>
              <p className="text-muted mb-4">Explore our enterprise security hardware and license options.</p>
              <Link to="/products" className="thm-btn">
                Browse Products <span className="icon-right-arrow" />
              </Link>
            </div> : <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <img
    src={item.image}
    alt={item.name}
    style={{ width: "60px", height: "60px", objectFit: "contain", background: "#fafafa", borderRadius: "6px" }}
  />
                              <div>
                                <h6 style={{ margin: 0, fontWeight: 700 }}>{item.name}</h6>
                                {item.category && <span className="text-muted" style={{ fontSize: "12px" }}>{item.category}</span>}
                              </div>
                            </div>
                          </td>
                          <td style={{ fontWeight: 600 }}>${item.price}</td>
                          <td>
                            <div className="input-group" style={{ width: "110px" }}>
                              <button
    className="btn btn-sm btn-outline-secondary"
    onClick={() => updateQuantity(item.id, item.quantity - 1)}
  >
                                -
                              </button>
                              <span className="form-control form-control-sm text-center">
                                {item.quantity}
                              </span>
                              <button
    className="btn btn-sm btn-outline-secondary"
    onClick={() => updateQuantity(item.id, item.quantity + 1)}
  >
                                +
                              </button>
                            </div>
                          </td>
                          <td style={{ fontWeight: 700, color: "#3D72FC" }}>
                            ${item.price * item.quantity}
                          </td>
                          <td>
                            <button
    type="button"
    className="btn btn-sm text-danger"
    onClick={() => removeFromCart(item.id)}
    title="Remove item"
  >
                              <i className="fa fa-trash-alt" />
                            </button>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Link to="/products" className="btn btn-outline-primary">
                    <i className="fa fa-arrow-left me-1" /> Continue Shopping
                  </Link>
                </div>
              </div>

              {
    /* Order Summary */
  }
              <div className="col-lg-4">
                <div style={{ background: "#f8f9fb", padding: "30px", borderRadius: "12px", border: "1px solid #eaeaea" }}>
                  <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>Cart Summary</h4>

                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Subtotal</span>
                    <span style={{ fontWeight: 600 }}>${cartSubtotal}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Regional Shipping (UAE)</span>
                    <span className="text-success font-weight-bold">Free</span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between mb-4">
                    <strong style={{ fontSize: "18px" }}>Total Amount</strong>
                    <strong style={{ fontSize: "22px", color: "#3D72FC" }}>${cartSubtotal}</strong>
                  </div>

                  <Link to="/checkout" className="thm-btn w-100 text-center" style={{ padding: "12px" }}>
                    Proceed to Checkout <span className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>}
        </div>
      </section>
    </div>;
};
