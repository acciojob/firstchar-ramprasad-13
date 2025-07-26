function firstChar(text) {
  // your code here
	const trimmedText=text.trim();
		if(trimmedText.length>0){
		return trimmedText[0]
	}
	return ' ';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
