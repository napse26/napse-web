import { Link } from "react-router-dom";
export const PageHeader = ({
  title,
  currentPage,
  parentPage,
  bgImage = "/assets/images/backgrounds/page-header-bg.jpg"
}) => {
  return <section className="page-header">
      <div
    className="page-header__bg"
    style={{ backgroundImage: `url(${bgImage})` }}
  />
      <div className="container">
        <div className="page-header__inner">
          <h2>{title}</h2>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>-</span>
              </li>
              {parentPage && <>
                  <li>
                    <Link to={parentPage.link}>{parentPage.name}</Link>
                  </li>
                  <li>
                    <span>-</span>
                  </li>
                </>}
              <li>{currentPage}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
