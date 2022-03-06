// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

   let missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML =`

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                    `
   
}

//validateInput(). validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate

function validateInput(testInput) {
    if (testInput ===''){
        return `Empty`;
    }else if (!isNaN(Number(testInput))){
        return `Is a Number`;
    }else {
        return `Not a Number`;
    }
   
}

//formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
  
    let faultyItems = document.getElementById('faultyItems');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    
    //Validation -all fields are required, the pilot and co-pilot names should be strings, and the fuel level & cargo mass should be numbers

    if (validateInput(pilot) === `Empty` || validateInput(copilot) === `Empty` || validateInput(fuelLevel.value)=== `Empty` || validateInput(cargoLevel.value) === `Empty`) {
        alert("All fields are required");
        list.style.visibility = 'visible';
    } else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        alert("Pilot & Copilot names need to be a text!");
    } else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
        alert("Fuel and cargo levels need to be numbers!");
       
    } 

    // If the user submits a fuel level that is too low (less than 10,000 liters)  , change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.

    //If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
        
    if(fuelLevel.value < 10000 && cargoLevel.value <= 10000){
        list.style.visibility = `visible`;
        launchStatus.style.color = 'rgb(199, 37, 78';
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch'; 
     
    } else if(fuelLevel.value < 10000 && cargoLevel.value > 10000){
        list.style.visibility = `visible`;
        launchStatus.style.color = 'rgb(199, 37, 78)'
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch'; 
    } else if(fuelLevel.value >= 10000 && cargoLevel.value > 10000){
        list.style.visibility = `visible`;
        launchStatus.style.color = `rgb(199, 37, 78`;
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';

    }else {
        list.style.visibility = `visible`;
        launchStatus.style.color = 'rgb(199, 37, 78)';
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
