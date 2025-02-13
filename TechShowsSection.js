import React from "react";
import TeckShowsSection from './TechShowsSection.css';
import drone3 from './drone3.jpg';
import robotic3 from './robotic3.jpg';
import ai from './ai.jpg';

const TechShowsSection = () => {
    const shows = [
        { title: 'DRONE SHOW', image: drone3},
        { title: 'ROBOTICS SHOW', image: robotic3 },
        { title: 'AI SHOW', image: ai },
    ]
    return ( 
        <section className={TeckShowsSection.teckShowsSection}>
        <h2 className={TeckShowsSection.title}>TECK SHOWS</h2>
        <p className={TeckShowsSection.description}>
          Join us for Teck Shows, open to all, running for 30 to 60 minutes each show (open for everyone)
        </p>
        <div className="ShowsDetails">
          {shows.map((show, index) => (
          <div key={index} className={TeckShowsSection.showItem}>
          <img src={show.image} alt={show.title} />
          <h4 className={TeckShowsSection.showTitle}>{show.title}</h4>
          </div>
      ))}
        </div>
        </section>
  );
};
 
export default TechShowsSection;