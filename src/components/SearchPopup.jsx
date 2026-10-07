import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
export const SearchPopup = () => {
  const { isSearchOpen, toggleSearch } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toggleSearch(false);
      navigate(`/blog?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };
  return <div className={`search-popup ${isSearchOpen ? "active" : ""}`}>
      <div
    className="color-layer"
    onClick={() => toggleSearch(false)}
    style={{ cursor: "pointer" }}
  />
      <button
    type="button"
    className="close-search"
    onClick={() => toggleSearch(false)}
    aria-label="Close search dialog"
  >
        <span className="far fa-times fa-fw" />
      </button>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
    type="search"
    name="search-field"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search Here (e.g. cloud, security, threat, audit)..."
    required
    autoFocus={isSearchOpen}
  />
          <button type="submit" aria-label="Submit search">
            <i className="fas fa-search" />
          </button>
        </div>
      </form>
    </div>;
};
