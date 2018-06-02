/* write your script here */
let database,

    searchBar,

    searchButton,

    autoSuggestions,

    display;


database = [{

  country: "France",

  invention: "Syncronization Gear",

  inventor: "Anthony Fokker",

  uses: "This invention allowed for the Machine guns to fire between the blades."

},
{
  country: "Germany",

  invention: "U-boats",

  inventor: "Wilhelm Bauer",

  uses: "This invention Could go under the water and attack ships without being spotted."

},
{
  country: "England",

  invention: "Tanks",

  inventor: "Lancelot de Mole",

  uses: "This invention could go into what was known as No-Mans Land safely."

}
];

searchBar = document.getElementById("search-bar");

searchButton = document.getElementById("search-button");

autoSuggestions = document.getElementById("auto-suggestions");

display = document.getElementById("display");



searchBar.addEventListener("keypress",checkKey);

searchBar.addEventListener("input",getAutoSuggestions);

searchButton.addEventListener("click",processInput);


function checkKey(e) {

  var key = e.which || e.keycode;

  if (key == 13) {

    console.log("you pressed enter!!");

    processInput();

  }

}


function processInput(){

  let cleanedInput = searchBar.value.toLowerCase().trim();

  autoSuggestions.innerHTML = "" ;

  autoSuggestions.style.display = "none" ;

  searchBar.value = "" ;

  let databaseRecord = getRecord(cleanedInput);

  console.log('cleanedInput');


  if(databaseRecord != null){

    displayRecord(databaseRecord);

  } else {

    alert('No Results');

  }

}


function getRecord(cleanedInput){

  for(let i = 0;i<database.length;i++){

    let cleanedRecordName = database[i].country.toLowerCase().trim();

    if (cleanedInput == cleanedRecordName) {
      return database[i];
    }

  }
  return null;
}

function displayRecord(databaseRecord) {

  var recordCountry = document.createElement("h2");

  recordCountry.innerHTML = databaseRecord.country;

  var recordInvention = document.createElement("h3");

  recordInvention.innerHTML = databaseRecord.invention;

  var recordInventor = document.createElement("h3");

  recordInventor.innerHTML = databaseRecord.inventor;

  var recordUses = document.createElement("p");

  recordUses.innerHTML = databaseRecord.uses;


  display.appendChild(recordCountry);

  display.appendChild(recordInvention);

  display.appendChild(recordInventor);

  display.appendChild(recordUses);

}
