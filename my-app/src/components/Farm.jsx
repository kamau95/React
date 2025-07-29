{/*import React from 'react';

const farm = {
  name: "Green Valley Farm",
  location: "Nakuru, Kenya",
  owner: "Kamau Linus",
  animals: [
    { id: 1, name: "Bella", type: "Cow", age: 4, isHealthy: true },
    { id: 2, name: "Max", type: "Goat", age: 2, isHealthy: false },
    { id: 3, name: "Charlie", type: "Chicken", age: 1, isHealthy: true },
  ],
  crops: [
    { id: 1, name: "Maize", season: "Rainy", quantity: 120, isHarvested: false },
    { id: 2, name: "Tomato", season: "Dry", quantity: 40, isHarvested: true },
    { id: 3, name: "Spinach", season: "Wet", quantity: 60, isHarvested: false },
  ],
};

function Farm(){
    return(
        <>
        <FarmInfo farm={farm}/>
        <AnimalList farm={farm}/>
        <CropList farm={farm}/>
        </>
    )
};
export default Farm;

{/* a child component to render farm details*/}
{/*function FarmInfo({farm}){
    return(
        <>
        <ul>
            <li key={farm}></li>
        </ul>
        </>
    )
}*/}