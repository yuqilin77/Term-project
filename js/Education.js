// wait until all DOM content loaded
document.addEventListener("DOMContentLoaded", function() {
    // add Event Listener to the button that click triggers the function e
    // document.getElementById("myButton").addEventListener("click",e)

// function e (){
    //create a fetch request to return a promise
    fetch("education.json")
    // resolve the promise using the response class
    .then(response => {
        // check the status of the response
        if (response.ok){
            return response.json();
        } else {
            throw new Error ("Failed to get degree data")
        }
    })
    //  process the returned JSON data using JS
    .then(data => {
        // extract all JSON data use .stringify() function
        document.getElementById("degrees").innerHTML = JSON.stringify(data);
        // create toInsert constant to save the results of function buildContent
        const toInsert = buildContent(data);
        //replace p content with JSON data
        document.getElementById("degrees").innerHTML = (toInsert);
    })
    //if fetch failed, catch the error here
    .catch(error => {
        alert("fetch failed")
        console.error(error);
    });
    // reminds that fetch finished
    console.log("finished fetch");
// }
//buildContent need the variance has the property of "college_degrees"
const buildContent = ({ college_degrees }) => {
    let output = '';

    // iterate every object in the college_degrees
    college_degrees.forEach(degreeObj => {
    // extracts the “degree" object from the "degreeObj"
    const degree = degreeObj.degree;
    //use destructuring assignment to extract the properties of school, program/major, type and yearConferred
    const { School, Program_Major, Type, yearConferred } = degree;
    // generates the output strings
      output += `School: ${School}<br>`;
      output += `Program/Major: ${Program_Major}<br>`;
      output += `Type: ${Type}<br>`;
      output += `Year Conferred: ${yearConferred}<br><br>`;
    });
    // return the output to the call function
    return output;
  };

  document.getElementById("selectedDegree").addEventListener("change", displaySchool);

  function displaySchool(){

const selectedDegree = document.getElementById("selectedDegree").value;
const degreesResult = document. getElementById('degreesResult');

  if (selectedDegree === "Bachelor"){
    degreesResult.innerHTML = "China University of Mining and Technology";
  } else if (selectedDegree === "Master"){
    degreesResult.innerHTML = "Boston University and Tulane University"
  } else{
    degreesResult.innerHTML = "";
  }
}
});



