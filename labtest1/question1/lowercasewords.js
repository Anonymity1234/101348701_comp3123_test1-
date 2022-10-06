// The const mixedArray variable is declared and assigned an array of mixed data types.
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];


// declares a function named lowerCaseWords that takes in a single parameter, mixedArray.
const lowerCaseWords = (mixedArray) => {
    // create a new instance of the Promise class.
  return new Promise((resolve, reject) => {

    // checks if the mixedArray parameter is an array with a length of 0 or more
    // also using the Array.isArray method to check if the mixedArray parameter is an array.
    if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {

      // filters the mixedArray parameter and only keeps elements that are of the type string.
      const filterStringArray = mixedArray.filter((elementOfArray) => typeof elementOfArray === "string");

      // using .map method on the filterStringArray by calling the toLowerCase method on each element of the filterStringArray constant.
      const convertToLowerCase = filterStringArray.map((filterArrayItem) =>
        filterArrayItem.toLowerCase()
      );
      //resolve callback function to return the convertToLowerCase constant
      resolve(convertToLowerCase);
    } else {
      reject("Array is invalid");
    }
  });
};

lowerCaseWords(mixedArray)
// .then method is called when the promise is fulfilled. it passes in a callback function that takes in a single parameter, value.
  .then((value) =>
    console.log(value)
  )
  // .catch method is called when the promise is rejected. it passes in a callback function that takes in a single parameter, error.
  .catch((error) =>
    console.log(error)
  );