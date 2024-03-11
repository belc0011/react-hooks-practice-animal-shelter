import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet, isAdopted, setIsAdopted}) {
  return <div className="ui cards">
    {pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} isAdopted={isAdopted} setIsAdopted={setIsAdopted}/>;
    })}
  </div>;
}

export default PetBrowser;