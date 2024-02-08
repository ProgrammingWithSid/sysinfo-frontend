import React from 'react';
import './card.css'
import { useNavigate } from 'react-router-dom'; // Import Link from react-router-dom


const ExpertCard = ({ taskName, uuid }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/details/${uuid}`); // Use navigate to go to the detail page
      };

  return (
    
    <div className="prediction-card" onClick={handleCardClick}>
        <div className="card-top" ></div>
      <div className="card-content">
        <h2>{taskName}</h2>
        <p className='text-dark'>{uuid}</p>
        <div className='card-buttons'>
            <div className='edit-button'>
            

        </div>
        </div>
      </div>

      
    </div>
  );
};

export default ExpertCard;
