import React from "react";
import ProjectCard from "../Cards/ProjectCard";

import Image1 from "./images/Home-Cover-1.jpg";
// import Image2 from "./images/Home-Cover-2.jpg";
// import Image3 from "./images/Home-Cover-3.jpg";
// import Image4 from "./images/Home-Cover-4.jpg";
// import Image5 from "./images/Home-Cover-5.jpg";
// import Image6 from "./images/Home-Cover-6.jpg";

class Projects extends React.Component {
  state = {
    GitHub: "",
  };

  componentDidMount() {
    fetch("https://api.github.com/users/Abiey2579/repos")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else { 
          this.setState({ GitHub: data });
        }
      })
      .catch((rejected) => {
        alert(rejected);
      });
  }

  render() {
    return (
      <div className="Projects container mb-5">
        <div className="row">
          {this.state.GitHub === ""
            ? ""
            : this.state.GitHub.map((CardItems) => (
                <div className="col-md-4 mb-5" key={CardItems.id}>
                  <ProjectCard
                    CardImage={Image1}
                    CardTitle={CardItems.name}
                    CardDescription={CardItems.description}
                    CardFollow={CardItems.html_url}
                    CardBugBased={CardItems.license}
                  />
                </div>
              ))}
          {console.log(this.state.GitHub)}
        </div>
      </div>
    );
  }
}

export default Projects;
