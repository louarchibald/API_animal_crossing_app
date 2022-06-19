import React from "react";
import './VillagerSelect.css'

const VillagerSelect = ({allVillagers, onVillagerSelect}) => {

    const handleVillagerSelect = (event) => {
        const chosenVillager = event.target.value;
        onVillagerSelect(chosenVillager);
      
    }

    const villagerOptions = allVillagers.map((villager, index) => {
      return <option key={index} value={index}>{villager.name["name-USen"]}</option>
    })

    

    return (

        <select className="drop-down" onChange={handleVillagerSelect}>
            <option selected disabled value="">Please Select a Villager</option>
            {villagerOptions}
        </select>

        
    )
    
  
}

export default VillagerSelect;