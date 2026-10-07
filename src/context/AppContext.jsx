import { createContext, useContext, useState, useEffect } from "react";
const defaultCart = [
  {
    id: "prod-1",
    name: "Business Firewall Router Pro",
    price: 299,
    image: "/assets/images/shop/shop-product-1-1.png",
    quantity: 1,
    category: "Hardware"
  },
  {
    id: "prod-2",
    name: "Cloud Security Gateway",
    price: 189,
    image: "/assets/images/shop/shop-product-1-2.png",
    quantity: 2,
    category: "Security"
  }
];
const defaultWishlist = [
  {
    id: "prod-3",
    name: "Enterprise Endpoint Shield",
    price: 149,
    image: "/assets/images/shop/shop-product-1-3.png",
    inStock: true
  }
];
const AppContext = createContext(void 0);
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("napse_cart");
      return saved ? JSON.parse(saved) : defaultCart;
    } catch {
      return defaultCart;
    }
  });
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("napse_wishlist");
      return saved ? JSON.parse(saved) : defaultWishlist;
    } catch {
      return defaultWishlist;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("napse_cart", JSON.stringify(cart));
    } catch (e) {
      console.warn("LocalStorage error", e);
    }
  }, [cart]);
  useEffect(() => {
    try {
      localStorage.setItem("napse_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.warn("LocalStorage error", e);
    }
  }, [wishlist]);
  const toggleSidebar = (open) => {
    setIsSidebarOpen((prev) => typeof open === "boolean" ? open : !prev);
  };
  const toggleSearch = (open) => {
    setIsSearchOpen((prev) => {
      const next = typeof open === "boolean" ? open : !prev;
      if (next) {
        document.body.classList.add("search-active");
      } else {
        document.body.classList.remove("search-active");
      }
      return next;
    });
  };
  const toggleMobileNav = (open) => {
    setIsMobileNavOpen((prev) => {
      const next = typeof open === "boolean" ? open : !prev;
      if (next) {
        document.body.classList.add("locked");
      } else {
        document.body.classList.remove("locked");
      }
      return next;
    });
  };
  const addToCart = (item, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map(
          (i) => i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };
  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(
      (prev) => prev.map((i) => i.id === id ? { ...i, quantity: qty } : i)
    );
  };
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };
  const isInWishlist = (id) => wishlist.some((i) => i.id === id);
  const wishlistCount = wishlist.length;
  return <AppContext.Provider
    value={{
      isSidebarOpen,
      toggleSidebar,
      isSearchOpen,
      toggleSearch,
      isMobileNavOpen,
      toggleMobileNav,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartSubtotal,
      wishlist,
      toggleWishlist,
      isInWishlist,
      wishlistCount
    }}
  >
      {children}
    </AppContext.Provider>;
};
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
