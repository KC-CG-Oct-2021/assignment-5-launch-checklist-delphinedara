//const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function(){

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result){
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function(){
        console.log(listedPlanets);
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;
        
        addDestinationInfo (document, name, diameter, star, distance, moons, imageUrl);

    })
  

     let list = document.getElementById("faultyItems");
     list.style.visibility = 'hidden';

     let form = document.querySelector("form")
     form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

    

    


});
