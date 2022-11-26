import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__link" href="/ssr">
          Server Side Rendering Page
        </Link>
        <Link className="header__link" href="/">
          Static Site Generation Page
        </Link>
      </div>
    </header>
  );
};

export default Header;
