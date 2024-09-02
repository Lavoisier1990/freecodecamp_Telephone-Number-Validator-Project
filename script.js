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
const dashBtn = document.getElementById("dash-btn");
const resetBtn = document.getElementById("reset-btn");
const keypadBtn = document.getElementById("keypad-btn");
const entryKeypad = document.getElementById("entry-keys");


//keypad elements must simulate keyboard buttons being pressed.
//keypad must be hidden when input field is not in focus.
//When you click on the #check-btn element without entering a value into the #user-input element, an alert should appear with the text "Please provide a phone number".
//#check-btn element also empties the input field when clicked.
//#results-div captures the output of the algorithm's process.
//putting focus on the input field again hides the #results div without erasing its contents.
//memory-btn opens the results-div with all previoius results still on.
//When you click on the #clear-btn element, the content within the #results-div element should be removed.


oneBtn.addEventListener("click", () => {
   if (userInput.value.length === 0){
    userInput.focus();
    userInput.value += 1;
} else {
    userInput.value += 1;
};
});

twoBtn.addEventListener("click", () => {
    if (userInput.value.length === 0){
     userInput.focus();
     userInput.value += 2;
 } else {
     userInput.value += 2;
 };
});

threeBtn.addEventListener("click", () => {
    if (userInput.value.length === 0){
     userInput.focus();
     userInput.value += 3;
 } else {
     userInput.value += 3;
 };
});

fourBtn.addEventListener("click", () => {
    if (userInput.value.length === 0){
     userInput.focus();
     userInput.value += 4;
 } else {
     userInput.value += 4;
 };
});

fiveBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += 5;
  } else {
      userInput.value += 5;
  };
});

sixBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += 6;
  } else {
      userInput.value += 6;
  };
});

sevenBtn.addEventListener("click", () => {
    if (userInput.value.length === 0){
     userInput.focus();
     userInput.value += 7;
 } else {
     userInput.value += 7;
 };
});

eightBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += 8;
  } else {
      userInput.value += 8;
  };
});

nineBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += 9;
  } else {
      userInput.value += 9;
  };
});

starBtn.addEventListener("click", () => {
    if (userInput.value.length === 0){
     userInput.focus();
     userInput.value += "*";
 } else {
     userInput.value += "*";
 };
});

zeroBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += 0;
  } else {
      userInput.value += 0;
  };
});

hashBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += "#";
  } else {
      userInput.value += "#";
  };
});

leftBracketBtn.addEventListener("click", () => {
    if (userInput.value.length === 0){
     userInput.focus();
     userInput.value += "(";
 } else {
     userInput.value += "(";
 };
});

spaceBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += " ";
  } else {
      userInput.value += " ";
  };
});

rightBracketBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
      userInput.focus();
      userInput.value += ")";
  } else {
      userInput.value += ")";
  };
});

dashBtn.addEventListener("click", () => {
     if (userInput.value.length === 0){
        userInput.focus();
        userInput.value += "-";
  } else {
        userInput.value += "-";
  };
});

resetBtn.addEventListener("click", () => {
    userInput.value = "";
});

backspaceBtn.addEventListener("click", () => {
    if(userInput.value.length === 0){
        userInput.focus();
    } else {
        let backspaced = userInput.value.slice(0, userInput.value.length-1);
        userInput.value = backspaced;
    };
});

function telephoneCheck(str) {
    const regEx = /^[1]?[\s]?(\(\d{3}\)|\d{3})[-\s\.]?\d{3}[-\s\.]?\d{4}$/
    return regEx.test(str);
  };

checkBtn.addEventListener("click", () => {
    entryKeypad.style.display = "none";
   if(userInput.value.length === 0){
    const resultParagraph = document.createElement("p");
    const node = document.createTextNode("Please provide a phone number");
    resultParagraph.appendChild(node);
    resultsDiv.appendChild(resultParagraph);
    resultsDiv.insertBefore(resultParagraph, resultsDiv.children[0]);
    resultParagraph.classList.add("results-text", "error-text");
    } else if (telephoneCheck(userInput.value) === true){
        const resultParagraph = document.createElement("p");
        const node = document.createTextNode(`Valid US number: ${userInput.value}`);
        resultParagraph.appendChild(node);
        resultsDiv.appendChild(resultParagraph);
        resultsDiv.insertBefore(resultParagraph, resultsDiv.children[0]);
        resultParagraph.classList.add("results-text", "valid-text");
    } else {
        const resultParagraph = document.createElement("p");
        const node = document.createTextNode(`Invalid US number: ${userInput.value}`);
        resultParagraph.appendChild(node);
        resultsDiv.appendChild(resultParagraph);
        resultsDiv.insertBefore(resultParagraph, resultsDiv.children[0]);
        resultParagraph.classList.add("results-text", "invalid-text");
    };
});

clearBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = "";
    userInput.value = "";
});

keypadBtn.addEventListener("click", () => {
    if (entryKeypad.style.display === "none") {
        entryKeypad.style.display = "grid";
      } else {
        entryKeypad.style.display = "none";
      }
});

memoryBtn.addEventListener("click", () => {
    if (resultsDiv.style.display === "none") {
        resultsDiv.style.display = "grid";
      } else {
        resultsDiv.style.display = "none";
      }
});
