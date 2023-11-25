import "./Breadcrumb.css";
export const Breadcrumb = () => {
  return (
    <div className="main-container-breadcrmb">
      <p className="main-heading-breadcrumb">
        How To Create a Breadcrumb Navigation
      </p>
      <div className="dreadcrumb-main-wrapper">
        <a href="#Home" className="dreadcrumb-home-links">
          Home
        </a>
        <p>/</p>
        <a href="#Home" className="dreadcrumb-links">
          Pictures
        </a>
        <p>/</p>
        <a href="#Home" className="dreadcrumb-links">
          Blogs
        </a>
        <p>/</p>
        <a href="#Home" className="dreadcrumb-italy-links">
          Italy
        </a>
      </div>
    </div>
  );
};
