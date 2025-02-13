import React from 'react';
import TechZonesSection from './TechZonesSection.css';
import teckybot from './teckybot.jpg';
import Tech from './3dTech.jpg';
import ArVr from './ArVr.jpg';

const TeckZonesSection = () => {
  const zones = [
    {
      title: 'TECKYBOT ZONE',
      description: 'Experience the vision of Teckybot and explore our innovative products. The Teckybot Zone is where technology and creativity come together, offering a glimpse into the future with our latest advancements and solutions for everyone.',
      imageSrc: teckybot ,
    },
    {
        title: '3DTech Zone',
        description: 'Discover the fascinating world of 3D printing at the 3D Zone. Here, youll find 3D printers and a variety of 3D printed objects that showcase applications across different domains. See how 3D printing is transforming industries and sparking new possibilities.',
        imageSrc: Tech ,
    },
    {
      title: 'AR/VR ZONE',
      description: 'Step into the future with our AR/VR Zone, where you can experience the incredible potential of augmented reality and virtual reality. Explore how AR and VR technologies will revolutionize everyday life and create new opportunities for innovation and interaction.',
      imageSrc: ArVr ,
    }
  ];

  const ZoneBox = ({ title, description, imageSrc }) => (
    <div className={'zone-box '}>
      <div className="zone-content">
        <h2>
          <span className="orange">{title.split(' ')[0]}</span>{' '}
          <span className="blue">{title.split(' ')[1]}</span>
        </h2>
        <p>{description}</p>
      </div>
      <div className="zone-image">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );

  return (
    <div className="teck-zones">
      <h1>
        <span className="orange">TECK</span> <span className="blue">ZONES</span>
      </h1>
      <p className="para">
        Experience cutting-edge technology in our Teck Zones, available to everyone throughout the event (open for everyone)
      </p>
      {zones.map((zone, index) => (
        <ZoneBox key={index} title={zone.title} description={zone.description} imageSrc={zone.imageSrc} />
      ))}
    </div>
  );
};

export default TeckZonesSection;
