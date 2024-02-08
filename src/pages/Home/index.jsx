import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpertCard from '../../components/Card'; // Import your ExpertCard component

const ItemList = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/system_info/list/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received:', data);
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleItemClick = (pcName) => {
    // Navigate to the detail page when an item is clicked
    console.log('pcname:' + pcName)
    navigate(`/details/${pcName}`);
  };

  return (
    <div>
<      h1 style={{ textAlign: 'center' }}>PC Names</h1>
      {/* <ul>
        {items.map((item) => (
          <li key={item} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul> */}
      <div className="card-list">
        {items.map((item) => (
          <ExpertCard
            key={item}
            taskName={item}
            uuid={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
