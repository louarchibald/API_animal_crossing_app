import React from "react";
import './VillagerDetail.css'
import VillagerSelect from "./VillagerSelect";


const VillagerDetail = ({villager}) => {

    console.log({villager})


  return (
    <div className="detail-container">
    <h2 className="villager-name">{villager.name["name-USen"]}</h2>
    <img className="image" src={villager["image_uri"]} alt={villager.name} />
    <p><b>Species: </b>{villager.species}</p>
    <p><b>Personality: </b>{villager.personality}</p>
    <p><b>Saying: &#128172; </b>{villager.saying}</p>
    <p><b>Birthday: &#127874;  </b>{villager["birthday-string"]}</p>
    
    </div>

  )
}

export default VillagerDetail;