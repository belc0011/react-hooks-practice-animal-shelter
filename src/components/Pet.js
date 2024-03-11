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
        {pet.isAdopted ? <button id={pet.id} className= "ui disabled button" >Already adopted</button> : null}
        {!pet.isAdopted ? <button id={pet.id} className= "ui primary button" onClick={(event) => onAdoptPet(event.target.id)} >Adopt pet</button> : null}
      </div>
    </div>
  );
}

export default Pet;