import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { LinkList } from "./components/link-list/link-list.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          id: 1,
          git_link: "https://github.com/ckbball/dev",
          project_name: "Dev Finder",
          hosted: "",
          description:
            "Dev Finder is a platform for aspiring software engineers to find others to build projects with building crucial team skills."
        },
        {
          id: 2,
          git_link: "https://github.com/ckbball/smurfin",
          project_name: "Smurfin Shop",
          hosted: "",
          description:
            "Smurfin Shop is a platform for gamers to sell and buy League of Legends accounts."
        },
        {
          id: 3,
          git_link: "https://github.com/ckbball/quik",
          project_name: "Quik Apps",
          hosted: "",
          description:
            "Quik Apps is an all in one platform for software engineer job finders."
        },
        {
          id: 4,
          git_link: "https://github.com/ckbball/flights-gin",
          project_name: "Flights API",
          hosted: "",
          description:
            "Flights API is a simple REST API that allows users to search for and book airline flights all around the world."
        },
        {
          id: 5,
          git_link: "https://github.com/ckbball/fs-open",
          project_name: "Social network REST API",
          hosted: "",
          description:
            "A REST API for a social network that allows users to follow other users and create and comment on posts."
        }
      ],
      links: [
        {
          id: 1,
          name: "github",
          link: "https://github.com/ckbball"
        },
        {
          id: 2,
          name: "linkedin",
          link: "https://www.linkedin.com/in/caesar-ladion/"
        }
      ]
    };
  }

  componentDidMount() {}

  handleChange = e => {};

  render() {
    const { projects, links } = this.state;
    return (
      <div className="App">
        <h1>Caesar Ladion</h1>
        <h2>Software Engineer</h2>
        <LinkList links={links} />
        <CardList projects={projects}></CardList>
      </div>
    );
  }
}

export default App;
