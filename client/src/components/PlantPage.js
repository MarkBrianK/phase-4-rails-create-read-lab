import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // no need to use http://localhost:3000 here
    fetch("/plants")
      .then((r) => r.json())
      .then((plantsArray) => {
        setPlants(plantsArray);
      });
  }, []);


  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plants, newPlant];
    setPlants(updatedPlantsArray);
  }

  const displayedPlants = plants.filter(function (plant) {
    return(plant.name.toLocaleLowerCase().includes(plants.search.toLocaleLowerCase()))

  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;

