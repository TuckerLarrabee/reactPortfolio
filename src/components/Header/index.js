import React, { useState } from "react";
import Nav from "../Nav";

function Header() {
  const [categories] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  console.log(currentCategory);
  return (
    <header className="nav-bar">
      <h2>
        <a href="https://tuckerlarrabee.github.io/reactPortfolio/">
          <span id="myName">Tucker Larrabee</span>
        </a>
      </h2>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
    </header>
  );
}

export default Header;
