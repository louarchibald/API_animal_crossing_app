import React, {useState, useEffect} from "react";
import VillagerSelect from "../components/VillagerSelect";

const AnimalCrossingContainer = () => {

    const [villagers, setVillagers] = useState([]);

    useEffect(() => {
      fetch('http://acnhapi.com/v1a/villagers/')
      .then(res => res.json())
      .then(data => setVillagers(data))
    }, [])

    return (

        <>
        <h1>Animal Crossing App!!!!!!!</h1>
        <VillagerSelect />
        </>

    )
    
  
}


export default AnimalCrossingContainer;