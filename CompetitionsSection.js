import react from 'react';
import './CompetitionsSection.css';
import CompetitionsSection1 from './CompetitionsSection1.jpg';
import robotic from './robotic.jpg';
import drone from './drone.jpg';
import renewable from './renewable.jpg';
import artificial from './artificial.jpg';
import robotics2 from './robotics2.jpg';
import drone2 from './drone2.jpg';
import internet from './internet.jpg';

const CompetitionsSection = () => {
    const JuniorLevelCompetitions = [
        { title: '3D Printing Technology', image: CompetitionsSection1},
        { title: 'Robotics', image: robotic},
        { title: 'Drone Technology', image: drone },
        { title: 'Renewable Energy', image: renewable },
    ];
    const SeniorLevelCompetitions = [
        { title: 'Artificial Intelligence', image: artificial },
        { title: 'Robotics', image: robotics2 },
        { title: 'Drone Technology', image: drone2 },
        { title: 'EV Technology', image: internet },
    ];

    const CompetitionDetails = ({ title, competitions }) => (
        <div className="CompetitionLevel">
          <h2>{title}</h2>
          <div className="CompetitionDetails">
            {competitions.map((comp, index) => (
              <div className="CompetitionItem" key={index} >
                <img src={comp.image} alt={comp.title} />
                <p>{comp.title} </p>
                <button className="arrow-button">➡</button>
              </div>
            ))}
          </div>
        </div>
      );

    return ( 
        
        <section className="CompetitionsSection">
          <h1>COMPITITIONS</h1>
          <h4> Open to students for engaging and challenging technical competitions </h4>
          <CompetitionDetails title="Junior Level" competitions={JuniorLevelCompetitions} />
          <CompetitionDetails title="Senior Level" competitions={SeniorLevelCompetitions} />
        </section>
    );
};
export default CompetitionsSection;