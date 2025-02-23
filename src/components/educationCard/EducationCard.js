import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const { isDark } = useContext(StyleContext);

  if (!school) return null;

  return (
    <div className={`timeline-container ${isDark ? "dark-mode-container" : ""}`}>
      <Fade left duration={1000}>
        <div className={`timeline-item ${isDark ? "dark-mode-item" : ""}`}>
          <div className="timeline-content">
            <h5 className="education-text-school">{school.schoolName}</h5>
            <h5 className="education-text-subHeader">{school.subHeader}</h5>
            <p className="education-text-duration">{school.duration}</p>
            <p className="education-text-desc">{school.desc}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}