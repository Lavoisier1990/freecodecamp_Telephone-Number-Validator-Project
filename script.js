const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const memoryBtn = document.getElementById("memory-btn");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const starBtn = document.getElementById("star-btn");
const zeroBtn = document.getElementById("zero-btn");
const hashBtn = document.getElementById("hash-btn");
const leftBracketBtn = document.getElementById("left-bracket-btn");
const spaceBtn = document.getElementById("space-btn");
const rightBracketBtn = document.getElementById("right-bracket-btn");
const backspaceBtn = document.getElementById("backspace-btn");

//keypad elements must simulate keyboard buttons being pressed.
//keypad must be hidden when input field is not in focus.
//When you click on the #check-btn element without entering a value into the #user-input element, an alert should appear with the text "Please provide a phone number".
//#check-btn element also empties the input field when clicked.
//#results-div captures the output of the algorithm's process.
//putting focus on the input field again hides the #results div without erasing its contents.
//memory-btn opens the results-div with all previoius results still on.
//When you click on the #clear-btn element, the content within the #results-div element should be removed.
