import React from "react";
import NavCategory from "./NavCategory";
import styled from "styled-components";

import "../styles/Sidebar.css";

const Osxbtn = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <Osxbtn color="#ff594f" />
        <Osxbtn color="#ffbc1b" />
        <Osxbtn color="#00cd46" />
      </header>
      <nav className="sidebar__nav">
        <NavCategory category="all" issuesCount={12} id={0} />
        <NavCategory category="open" issuesCount={4} id={1} />
        <NavCategory category="closed" issuesCount={8} id={2} />
      </nav>
    </div>
  );
};

export default Sidebar;
