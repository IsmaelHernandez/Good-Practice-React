import React from 'react';
import CardComponent from '@/components/CardComponent';
import { person } from "@/constants";
import { useState } from 'react';

const ListPersonComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (p) => {
    setSelectedCard(p.id);
  };
  
  return (
    <div className="container mt-5">
      <div className="row">
        {person.map((p) => (
          <div key={p.id} className="d-flex justify-content-start col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <CardComponent 
              onClick={handleClick} 
              person={p}
              isSelected={selectedCard === p.id} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListPersonComponent;
