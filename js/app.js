var secretNumber;
var numberOfGuess = 0;
$(document).ready(function(){

    /*--- On load start a new game ---*/
    newGame();
    console.log(secretNumber);
    /*--- Reloads the page when user clicks new game ---*/
    $(".new").click(function(){
        location.reload();
    });

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- Evaluates the user answer and responses with hot or cold ---*/
    $("#guessButton").click(function(e){
        e.preventDefault();
        if($('#userGuess').val() >= 1 && $('#userGuess').val() <= 100){
            $('#feedback').text(hotAndCold($('#userGuess').val()));
            $('#count').text(numberOfGuess += 1);
            $('#guessList').append('<li>'+ $('#userGuess').val() + '</li>');
        }else{
            $('#feedback').text('Please enter a number between 1 and 100');
        }
        if($('#feedback').text() === 'You got it!'){
            $('.button').hide();
            $('#guessList').after('<h2>Click New Game to play again!</h2>');
        }
    });

});

function newGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;
    return secretNumber;
}

function hotAndCold(number){
    distanceBtwn = Math.abs(secretNumber - number);
    if(distanceBtwn > 50 || distanceBtwn > secretNumber){
        return 'Ice Cold';
    }
    else if(distanceBtwn > 30 && distanceBtwn < 50){
        return 'Cold';
    }
    else if(distanceBtwn > 20 && distanceBtwn < 30){
        return 'Warm';
        console.log('Warm');
    }
    else if(distanceBtwn > 10 && distanceBtwn < 20){
        return 'Hot';
        console.log('Hot');
    }
    else if(distanceBtwn > 1 && distanceBtwn < 10){
        return 'Very Hot';
        console.log('Very Hot');
    }
    else{
        return 'You got it!';
    }
}