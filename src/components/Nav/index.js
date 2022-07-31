import React, { useState } from "react";


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  console.log(currentCategory);

  return (
    <nav>
      <ul className="flex-row" style={{ margin: 0, padding:0  }}>
        {categories.map((category) => (
          <li
            className={`mx-2 ${
              currentCategory.name === category.name &&
              !contactSelected &&
              "navActive"
            }`}
            key={category.name}
          >
            <a
              href={"#" + category.name.toLowerCase().replace(" ", "-")}
              onClick={() => {
                console.log(category)
                setCurrentCategory(category);
                setContactSelected(false);
                {if (category.name==='Resume') {
                    window.open("https://docs.google.com/document/d/1MDFpQ8_zNLsucMpkRwwvGFgmDzkM5M3OeANrs7e0m7k/edit", "_blank")
                }}
              }}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
