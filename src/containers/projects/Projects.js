import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const [repo, setRepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setRepo(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (Check if Projects section has been configured)`
          );
        });
    };
    getRepoData();
  }, []);

  if (repo && repo.length > 0) {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(`Github Object for repository number : ${i} is undefined`);
            }
            return (
              <div className="repo-card" key={v.node.id}>
                <h3>{v.node.name}</h3>
                <p>{v.node.description || "No description available."}</p>
                <a href={v.node.url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            );
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    );
  } else {
    return <Loading />;
  }
}
