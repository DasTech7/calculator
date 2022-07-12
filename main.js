
// get target elements
const exp = document.getElementById("expretion"); // this element contains value like (1 + 1)
const result = document.getElementById("result"); // this element will give hem result of expretions

const buttons = document.querySelectorAll(".buttons button"); // all buttons of calculator

// loop for all buttons in the query
buttons.forEach((button)=>{
	button.onclick = ()=>{ // target event
		switch(button.innerText.toLowerCase()) {
			case "c": // if the button contain 'c' clear expretion element
				clear();
				break;
			case "rm": // if the button contain 'rm' remove the last character 
				rm();
				break;
			case "=": // if the button contain '=' print result of the expretion
				calculate();
				break;
			default: // else print the button value on expretion element
				exp.innerText += button.innerText;
		}
	}
});

// functions
const print = console.log // alias of console.log

function clear() { // clear function
	/*
	  just change text of expretion element to "" or nothing
	*/
	exp.innerText = "";
	result.innerText = "";
}
function rm() { // remove the last chaacer of expretion element
	/*
	  LOGIC
	  - get innerText of exoretion
	  - then convert this string to array By split method
	*/
	let a = exp.innerText.split('');
	a.pop();
	exp.innerText = a.join('');
}
function calculate() {
	/*
	  just evel function and try block for error in the expretions
	*/
	if (exp.innerText==""){
		result.innerHTML = '<span class="error">Can\'t calculate nothing</span>';
		return;
	}
	try {
		result.innerText = eval(exp.innerText);
	} catch(e) {
		result.innerHTML = '<span class="error">synatax error</span>'
	}
}
