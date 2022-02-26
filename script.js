// Write your JavaScript code here!
window.addEventListener("load", function(){
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    listedPlanets = "https://handlers.education.launchcode.org/static/planets.json";

    // Fetching Planetary Data
    this.fetch(listedPlanets).then(function(result) {
        //listedPlanets=results;
        result.json().then(function(json) {
            let listedPlanetsResponse = document.getElementById("missionTarget");
            //console.log(listedPlanets);
            let missionDestination = Math.floor(Math.random()*json.length -1);
           listedPlanetsResponse.innerHTML = `
           <h1>Mission Destination</h1>
           <ol>
              <li>Name: ${json[missionDestination].name}</li>
              <li>Diameter: ${json[missionDestination].diameter}</li>
              <li>Star: ${json[missionDestination].star}</li>
              <li>Distance from Earth: ${json[missionDestination].distance}</li>
              <li>Number of Moons: ${json[missionDestination].moons}</li>
           </ol>
           <img src="${json[missionDestination].image}"> `;
        });
     });


//Submitting pilot, co-pilot, fuel level, & cargo mass
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    let faultyItems = document.getElementById('faultyItems');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');



    // Validate user enters something for every field

    if (pilotName.value.trim() === ""|| copilotName.value.trim() === "" || fuelLevel.value.trim() === "" || cargoMass.value.trim() === "") {
        alert("All fields are required!");
        event.preventDefault();
    }

    //Validate user enters text for names and numbers for fuel and cargo levels

    if (isNaN (pilotName.value)|| isNaN(copilotName.value)) {
        pilotStatus.innerHTML =`Pilot ${pilotName.value} is ready`;
        copilotStatus.innerHTML =`Pilot ${copilotName.value} is ready`;
    }
    else {
        alert ("Pilot & Copilot names need to be a text!");
        event.preventDefault();
    }
    if (isNaN (fuelLevel.value)|| isNaN(cargoMass.value)) {
        alert ("Fuel and cargo levels need to be numbers!");   
    }
    else {
        // If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
        
        if(fuelLevel.value < 10000){
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `Fuel level too low for the journey!`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = 'red';
            event.preventDefault();
        } else {
            faultyItems.style.visibility ='visible';
            fuelStatus,this.innerHTML = 'Fuel level enough for launch';
        }
        
        // If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
        if(cargoMass.value > 10000){  
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = `Too much cargo mass for the shuttle to take off!`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = 'red';
            event.preventDefault();
         }else{
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = `Shuttle is ready for launch.`;
         }

         //If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".

        if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) { 
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = `Shuttle is ready for launch.`;
            launchStatus.style.color = 'green';
            fuelStatus.innerHTML = `Enough fuel level for launch.`;
            cargoStatus.innerHTML = `Enough cargo mass for launch.`;
         }
    }
    

});


});
