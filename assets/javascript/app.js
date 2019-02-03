
$('.btn').on('click', function(){
	$('#myDiv').show();
	$(this).hide();
});


 
    
	

	



		$.ajax({
		  url: "https://opentdb.com/api.php?amount=10&type=multiple",
		  method: "GET"
		}).then(function(response) {
			// $('#question').html(response.results[0].question)
		 //    $('#answer1').html(response.results[0].incorrect_answers[0])
		 //    $('#answer2').html(response.results[0].incorrect_answers[1])
		 //    $('#answer3').html(response.results[0].incorrect_answers[2])
			// $('#answer4').html(response.results[0].correct_answer)

			// console.log(response.results[0].question)
		 //    console.log(response.results[0].correct_answer)
		    console.log(response.results.length)

     $('#btn').on('click', function(){
     	var random_question = Math.floor(Math.random()*(response.results.length))
     	var question = response.results[random_question].question;
     	   
			
			$('#question').text(question);
			
          
			// var par = $('.answer').html(response.results[random_question].incorrect_answers);
			// $('myDiv').append(par)
			$('myDiv').append(response.results[random_question].correct_answer)
			console.log('correct_answer  '+response.results[random_question].correct_answer)
            
        
			console.log('incorrect_answers  '+response.results[random_question].incorrect_answers)
			console.log('correct_answer  '+response.results[random_question].correct_answer)

		})





		});

		
	


	



