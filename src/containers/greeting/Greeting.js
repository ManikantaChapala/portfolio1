import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href="/assets/images/resume.pdf" // Correct path for local file
                  download="Resume.pdf"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Profile Image"
              src="/assets/images/myimage.png" // Ensure correct path
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
