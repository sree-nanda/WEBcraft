
//Object Array to hold quotes, sources, citaitons and years
const data = {
	"quotes": [
		{
			 "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
			 
		},
		{
			 "This too, shall pass."
			
		},
		{
			 "Keep your eyes on the stars and your feet on the ground."
			
		},
		{
			 "The only person you should try to be better than is the person you were yesterday."
			
		},
		{
			"Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
			
		},
		
    ]
};

// console.log(data.quotes)  
const qoutes = data.quotes;
// console.log(qoutes[0].quote);
//Create a function for calling random quotes and color



function getRandomQuote() {
	arraysize = qoutes.length;
	random = Math.random() * arraysize;
	randomnumber = Math.floor(random);
	console.log(arraysize);
	console.log(random);
	console.log(randomnumber);
	return qoutes[randomnumber];

}

// console.log(getRandomQuote());

function getRandomColor() { 
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	var colour = "rgb(" + red + "," + green + "," + blue + ")";
	return colour;
}
console.log(getRandomColor());

function printOutput() {
	var Quote = getRandomQuote();
	let quoteContainer = document.getElementById("quote-box");
	var quoteString = `<p class="quote">${Quote.quote}</p><p class="source">${Quote.source}`;
	if(Quote.citation) {
		quoteString += `<span class="citation">${Quote.citation}</span>`;
	}
	if(Quote.year) {
		quoteString += `<span class="year">${Quote.year}</span>`;
	}
	else {
		quoteString += `</p>`;
	}
	quoteContainer.innerHTML = quoteString;
	console.log(quoteString);
	document.body.style.backgroundColor = getRandomColor();
}
document.getElementById('loadQuote').addEventListener("click", printOutput);

window.setInterval(printOutput, 1500);


