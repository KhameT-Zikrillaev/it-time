import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <span className="feature-icon">{icon}</span>
      <div className="feature-text">
        <h3>{typeof title === 'function' ? title() : title}</h3>
        <p>{typeof description === 'function' ? description() : description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
