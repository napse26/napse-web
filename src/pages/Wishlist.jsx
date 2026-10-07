import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { useApp } from "../context/AppContext";
export const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useApp();
  return <div className="wishlist-page-wrapper">
      <PageHeader title="Your Wishlist" currentPage="Wishlist" parentPage={{ name: "Store", link: "/products" }} />

      <section style={{ padding: "90px 0" }}>
        <div className="container">
          {wishlist.length === 0 ? <div className="text-center py-5">
              <div style={{ fontSize: "60px", color: "#ccc", marginBottom: "20px" }}>
                <i className="far fa-heart" />
              </div>
              <h3 style={{ fontWeight: 700 }}>Your Wishlist is Empty</h3>
              <p className="text-muted mb-4">Save hardware components and software licenses for later procurement.</p>
              <Link to="/products" className="thm-btn">
                Browse Products <span className="icon-right-arrow" />
              </Link>
            </div> : <div className="table-responsive">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Action</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <img
    src={item.image}
    alt={item.name}
    style={{ width: "60px", height: "60px", objectFit: "contain", background: "#fafafa", borderRadius: "6px" }}
  />
                          <h6 style={{ margin: 0, fontWeight: 700 }}>{item.name}</h6>
                        </div>
                      </td>
                      <td style={{ fontWeight: 600 }}>${item.price}</td>
                      <td>
                        <span className="badge bg-success">In Stock</span>
                      </td>
                      <td>
                        <button
    type="button"
    className="thm-btn"
    style={{ padding: "8px 18px", fontSize: "13px" }}
    onClick={() => addToCart(item, 1)}
  >
                          <i className="fa fa-cart-plus me-1" /> Add to Cart
                        </button>
                      </td>
                      <td>
                        <button
    type="button"
    className="btn btn-sm text-danger"
    onClick={() => toggleWishlist(item)}
    title="Remove from wishlist"
  >
                          <i className="fa fa-trash-alt" />
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>}
        </div>
      </section>
    </div>;
};
