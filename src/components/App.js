import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(e) {
    setFilters({type: e.target.value });
  }

  function onFindPetsClick(e) {
    if (filters.type !== "all") {
      fetch(`http://localhost:3001/pets/?type=${filters.type}`)
      .then(res => res.json())
      .then(data => setPets(data))
    }
    else {
      fetch(`http://localhost:3001/pets/`)
      .then(res => res.json())
      .then(data => setPets(data))
   }
  }

  function onAdoptPet(e) {
    const adoptedPet = pets.filter(pet => {
      return pet.id === e;
    })
    const updatedPets = pets.map(pet => {
      if (pet.id === adoptedPet[0].id) {
        return {
        ...pet,
          isAdopted: true
        }
      } else {
        return pet
      }
    })
    setPets(updatedPets)
  }
console.log(pets);
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;