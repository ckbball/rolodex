import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="project image"
      //src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.project.project_name}</h2>
    <p>{props.project.description}</p>
    <a href={props.project.git_link}>Code</a>
  </div>
);
