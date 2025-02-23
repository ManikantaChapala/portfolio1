import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
  
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    
    // Ensure the filename has .pdf extension
    link.download = name ? `${name}.pdf` : 'certificate.pdf'; // Default filename
  
    // Append link to the document body
    document.body.appendChild(link);
  
    // Trigger the download
    link.click();
  
    // Clean up by removing the link
    document.body.removeChild(link);
  }
  
  
  
  
  
  console.log("Card Info:", cardInfo);
  console.log("Footer:", cardInfo.footer);

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer && Array.isArray(cardInfo.footer) ? (
          cardInfo.footer.map((v, i) => (
            <span
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => openUrlInNewTab(v.url, v.name)} // Download logic
            >
              {v.name}
            </span>
          ))
        ) : (
          <span className="no-footer">No additional links</span> // Optional fallback UI
        )}

      </div>

    </div>
  );
}
