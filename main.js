function getQuote(){
	//create the arrays
	var quotes = new Array(4);
	var sources = new Array(4);

	//initialize the arrays with quotes
	quotes[0] = "Optimism is the faith that leads to achievement.";
	sources[0]="Helen Keller";

	quotes[1] = "If you don't like the road you're walking, "
	sources[1]="Dolly Parton";

	quotes[2] ="The most difficult thing is the decision toact, " + "the rest is merely tenacity.";
	sources[2]="Amelia Earhart";


	quotes[3] ="What's another word for thesaurus?";
	sources[3]="Steven Wright";

	//Get a random index into the arrays
	i=Math.floor(Math.random()* quotes.length);

	//Write out the quote as html
	
	document.write("<p style='background-color:#ffb6c1; text-align:center; font-size:30px;'>\"");
	document.write(quotes[i] + "\"");
	document.write("<small style='color:#790966;'>-" + sources[i] + "</small>");
	document.write("</p>")
	document.write("</div>")

}