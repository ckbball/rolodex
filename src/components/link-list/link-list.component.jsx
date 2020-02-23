import React from "react";
import "./link-list.styles.css";

import { SearchBox } from "../search-box/search-box.component";

export const LinkList = props => (
  <div className="link-list">
    {props.links.map(link => (
      <SearchBox key={link.id} link={link} />
    ))}
  </div>
);
