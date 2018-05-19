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

  Uses:

}];

searchBar = document.getElementById("search-bar");

searchButton = document.getElementById("search-button");

autoSuggestions = document.getElementById("auto-suggestions");

display = document.getElementById("display");



searchBar.addEventListener("keypress",checkKey);

serachButton.addEventListener("click",processInput);


function checkKey(e) {

  varkey = e.which || e.keycode;

  if (key == 13) {

    console.log("you pressed enter!!");

    processInput();

  }

}


function processInput(){
  cleanInput =
}

function getRecord(cleanedInput){
  for(let i = 0;i<database.length;i++){
    let cleanedRecordName = database[i]
  }
}
