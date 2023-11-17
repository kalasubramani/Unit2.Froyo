//prompt ser for input
const inputFlavors = window.prompt(
  "enter some ice cream flavors",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//Splitup input string
const flavorsList = inputFlavors.split(",");

//create obj to hold order summary
const objFlavors = {};

//prepare order summary
getOrderSummary(flavorsList);
//displays the summary to user
displayOrderSummary(objFlavors);


/**
 * @param {array[]} an array of flavors
 * @returns {object} object of flavors and their count
 */
function getOrderSummary(flavorsList) {
  //Get each unique item in the list and add it to order summary
  for (let eachFlavor in flavorsList) {
    const oneOfTheflavor = flavorsList[eachFlavor];

    //check if the object has a particular flavor
    if (!objFlavors.hasOwnProperty(oneOfTheflavor)) {
      //if that flavor is not present in the obj, add to it and set it to zero
      objFlavors[oneOfTheflavor] = 0;
    }
    //increment flavor count
    objFlavors[oneOfTheflavor]++;
  }
  return objFlavors;
}

/**
 * @param {object} object of flavors and their count
 * @returns displays order summary to user
 */
function displayOrderSummary(objFlavors) {
  console.log("Order Summary : ");
  for (let k of Object.keys(objFlavors)) {
    // display item : quantity
    console.log(`${k} : ${objFlavors[k]}`);
  }
}
