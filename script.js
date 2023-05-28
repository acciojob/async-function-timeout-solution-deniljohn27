const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  // await new Promise((resolve) => setTimeout(resolve(), delayVal)).then(()=>{	
  // output.innerText = message;});
	setTimeout(()=>{output.innerText = message;},delayVal)

}

btn.addEventListener("click", showMessage);
