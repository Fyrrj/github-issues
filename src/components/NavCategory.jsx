import React, { useState } from "react";
import gitIcon from "../img/icon-github.svg";
import openIcon from "../img/icon-open-issue.svg";
import closedIcon from "../img/icon-closed-issue.svg";
import "../styles/NavCategory.css";

const NavCategory = ({ category, issuesCount, id }) => {
  const [isActive, setActive] = useState(0);

  const handleActiveCategory = (index) => {
    // setActive()
  };

  return (
    <div
      className={`navCategory ${isActive === id ? "active" : null}`}
      onClick={() => handleActiveCategory(id)}
    >
      <div className="navCategory__info">
        {category === "all" && (
          <>
            <img src={gitIcon} alt="" /> <p>All</p>
          </>
        )}
        {category === "open" && (
          <>
            <img src={openIcon} alt="" /> <p>Open</p>
          </>
        )}
        {category === "closed" && (
          <>
            <img src={closedIcon} alt="" /> <p>Closed</p>
          </>
        )}
      </div>
      <span>{issuesCount}</span>
    </div>
  );
};

export default NavCategory;
