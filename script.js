function firstChar(text) {
  // your code here
	let text=text.trim();
	if(text.lenght>1){
		return text[0]
	}
	return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
