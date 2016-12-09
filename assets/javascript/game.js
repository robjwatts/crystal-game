




//variables
var numberToMatch;
var buttonGenerator;
var crystalSum;
var winCounter=0;
var loseCounter=0;





//functions


	function startGame() {
		numberToMatch = Math.floor(Math.random() * (120 - 19) + 19);
		$("#numberToGuess").html(numberToMatch);


//setting up random number generators for our buttons
		bearGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		caneGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		santaGenerator = Math.floor(Math.random() * (1 - 12) + 12);
		starGenerator = Math.floor(Math.random() * (1 - 12) + 12);

		console.log(bearGenerator);
		console.log(caneGenerator);
		console.log(santaGenerator);
		console.log(starGenerator);


		//finding a way to add the sum of the buttons together

		crystalSum = 0

		$("#bearBtn").on("click", function() {
			crystalSum = Number(crystalSum) + Number(bearGenerator);
			$("#crystalSumz").html(crystalSum);
			gameComplete()
		});

		$("#caneBtn").on("click", function() {
			crystalSum = Number(crystalSum) + Number(caneGenerator);
			$("#crystalSumz").html(crystalSum);
			gameComplete()
		});

		$("#santaBtn").on("click", function() {
			crystalSum = Number(crystalSum) + Number(santaGenerator);
			$("#crystalSumz").html(crystalSum);
			gameComplete()
		});

		$("#starBtn").on("click", function() {
			crystalSum = Number(crystalSum) + Number(starGenerator);
			$("#crystalSumz").html(crystalSum);
			gameComplete()
		});

//make class for Game


	}

	function gameComplete(){
		if (crystalSum == numberToMatch) {
		winCounter++;
		$("#winCount").html(winCounter);
		alert("You Win! You have the holiday spirit, I suppose.");
		crystalSum=0;
		$("#crystalSumz").html(crystalSum);
		
	};

		if (crystalSum > numberToMatch) {
			loseCounter++
			$("#loseCount").html(loseCounter);
			alert("You're a regular Scrooge. You lose!");
			crystalSum=0;
			$("#crystalSumz").html(crystalSum);
			

		};




}



	

	startGame();

	





//main process






