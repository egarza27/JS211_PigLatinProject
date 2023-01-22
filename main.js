let userInput = " ";
const getInput = (input) => (userInput = input);
const resultField = document.getElementById("result");

// resultField.innerText = userInput;

const pigLatin = () => {
  // using regEx to create an array of words from sentence input parameter
  const words = userInput.match(/\w+/g);
  // creating an empty array to house results
  const arrayofPigLatin = [];
  // using map method to loop over the words array and locate the first vowel and split each word in array
  words.map((word) => {
    // using trim and toLowerCase method to standardize input string
    // let userInput = document.getElementById("userInput").value;
    word = word.trim().toLowerCase();
    // using regEx to search for the index of the first vowel of word
    const firstVowelIndex = word.search(/[a,e,i,o,u]/g);
    // using the index to trim the letters from the begining of the word to the index of the first vowel
    let trimmedLetters = word.slice(0, firstVowelIndex);
    // using the index to trim the letters from the index letter to the end of the word
    let trimmedWord = word.slice(firstVowelIndex);
    // using if else to determine if word starts with a vowel or consenent to adjust ending
    if (firstVowelIndex === 0) {
      return arrayofPigLatin.push(`${trimmedWord}${trimmedLetters}yay`);
    } else {
      return arrayofPigLatin.push(`${trimmedWord}${trimmedLetters}ay`);
    }
  });
  // arrayofPigLatin.innerHTML = "";
  // console.log(arrayofPigLatin.join(" "));
  // converting the arrayofPigLatin array to a string using join method
  // return arrayofPigLatin.join(" ");
  resultField.innerText = arrayofPigLatin.join(" ");
};

// let result = pigLatin(userInput);

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question("word ", (answer) => {
//     console.log(pigLatin(answer));
//     getPrompt();
//   });
// };

// // Unit Tests
// // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === "function") {
//   describe("#pigLatin()", () => {
//     it("should translate a simple word", () => {
//       assert.equal(pigLatin("car"), "arcay");
//       assert.equal(pigLatin("dog"), "ogday");
//     });
//     it("should translate a complex word", () => {
//       assert.equal(pigLatin("create"), "eatecray");
//       assert.equal(pigLatin("valley"), "alleyvay");
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin("egg"), "eggyay");
//       assert.equal(pigLatin("emission"), "emissionyay");
//     });
//     it("should lowercase and trim word before translation", () => {
//       assert.equal(pigLatin("HeLlO "), "ellohay");
//       assert.equal(pigLatin(" RoCkEt"), "ocketray");
//     });
//   });
// } else {
//   getPrompt();
// }

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
