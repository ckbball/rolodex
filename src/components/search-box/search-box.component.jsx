import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ link }) => (
  <div className="link-container">
    <h2>{link.name}</h2>
    <p>{link.link}</p>
    <a href={link.link}>{link.name}</a>
  </div>
);
