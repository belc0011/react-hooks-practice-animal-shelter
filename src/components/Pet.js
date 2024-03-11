import React from "react";

function Pet( {pet, onAdoptPet, isAdopted, setIsAdopted}) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? '♀' : '♂' }
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button id={pet.id} className={!pet.isAdopted ? "ui disabled button" : "ui primary button"} >Already adopted</button>
        <button id={pet.id} className={!pet.isAdopted ? "ui primary button" : "ui disabled button"} onClick={onAdoptPet} >Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;