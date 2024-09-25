import React from 'react'
import CardComponent from '../CardComponent'
import { person } from "@/constants";
import { useState } from 'react';

const ListPersonComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (p) => {
    setSelectedCard(p.id);
  };
  
  return (
    <div className="d-flex flex-row justify-content-center gap-2 mb-3 mt-5">
     {person.map((p) => (
      <CardComponent 
        onClick={handleClick} 
        key={p.id} 
        person={p}
        isSelected={selectedCard === p.id} 
      />
    ))} 
  </div>
  )
}

export default ListPersonComponent