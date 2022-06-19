import React, {useState, useEffect} from "react";
import VillagerSelect from "../components/VillagerSelect";
import VillagerDetail from "../components/VillagerDetail";
import './AnimalContainer.css'



const AnimalCrossingContainer = () => {

    const [villagers, setVillagers] = useState([]);
    const [selectedVillager, setSelectedVillager] = useState(null)

    useEffect(() => {
      fetch('http://acnhapi.com/v1a/villagers/')
      .then(res => res.json())
      .then(villagers => setVillagers(villagers))
    }, [])

    const handleVillagerSelect = (index) => {
      setSelectedVillager(villagers[index]);
    }

    return (

        <>

            <h1 className="main-heading">Animal Crossing App</h1>
           
                
            
            <VillagerSelect allVillagers={villagers} onVillagerSelect={handleVillagerSelect}/>
            { selectedVillager ? <VillagerDetail villager={selectedVillager}/> : null }
        
           

   
        </>

    )
    
  
}


export default AnimalCrossingContainer;