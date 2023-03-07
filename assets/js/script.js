// We declare a function to handle the opening and clo=sing of the notes
// If this JavaScript syntax looks weird to you it’s only because it uses 'arrow' functions.
// Arrow functions are a shorthand for writing functions and are common in modern JavaScript (ECMAScript)
const toggleNote = () => {
  // We collect all selectors with the 'keyword' class in a array we call 'keywords'
  let keywords = document.querySelectorAll(".keyword");
  // We loop over all items in our 'keywords' array
  for ( let n = 0; n < keywords.length; n++) {
    // We call the current item in the loop 'item'
    let item = keywords[n];
    // We need to declare variable to hold the content we’ll be handling
    let keyword = item.querySelector("dfn");
    let note = item.querySelector(".note");
    // Check if a note is open or closed
    // If a note is already open, the value of following variable will be true, else it will be false
    let open = note.classList.contains("open");
    // We need to listen for clicks on the keyword
    // For that we use an event listener, which is an arrow function too
    keyword.addEventListener("click", () => {
      // Opening or closing the note comes down to toggling between tw states: open or closed.
      // The listener is fired with every click on the keyword,
      // then the function below checks if the note has the class open or not.
      // The function acts as a switch:
      // - If the 'open' variable declared earlier has the value of 'true', then the note is open
      // - Therefore it must be closed (a click just happened)
      // - To achieve that the class 'open' must be removed from the selector
      // - This is done with the 'toggle' method on the class list
      // - Conversely, if it doens't have the class 'open', clicking must open it
      // - This is done by giving the note the class 'open'
      // - To sum it up, we are toggling between two states:
      // - Either the note is assigned the 'open' class
      // - Or the 'open' class is removed from the note 
        note.classList.toggle("open");

    });
  };
};

// We wait until after the html document has loaded to fire the toggleNote function
window.addEventListener("load", toggleNote);