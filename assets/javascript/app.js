
// $('.btn').on('click', function(){
// 	$('#myDiv').show();
// 	$(this).hide();
// });


 
    
	

	



		$.ajax({
		  url: "https://opentdb.com/api.php?amount=10&type=multiple",
		  method: "GET"
		}).then(function(response) {
		
		    console.log(response.results.length)

     $('#btn').on('click', function nextQuestion(){
         $('#myDiv').show();
	     $(this).hide();

     	var random_question = Math.floor(Math.random()*(response.results.length));
     	var question = response.results[random_question].question;

     	var incorrectAnswers = response.results[random_question].incorrect_answers;
     	var correctAnswer = response.results[random_question].correct_answer;
     	var arr_answers = incorrectAnswers.concat(correctAnswer);
     	console.log(arr_answers);
     	var i = arr_answers.length;
     	var random_index, num;

       $('#question').text(question);

     	while(i > 0) {
     	 random_index = Math.floor(Math.random() * i);
     	i--

        num = arr_answers[i];
        arr_answers[i] = arr_answers[random_index];
        arr_answers[random_index] = num;
       
           
     	}
     	
			console.log(arr_answers)
			

		arr_answers.forEach(function(h){
			
			var par = $('<p>');
			par.text(h);
			$('#myDiv').append(par);
           

		})

		  $('p').on('click', function(){
            	if($(this).text() == correctAnswer){
				alert('you won')
				$('p').text("")
                nextQuestion()
			}else{
				alert('you lost')
				$('p').text("")
                nextQuestion()
			}
			
            })	     

			console.log('correct_answer  '+response.results[random_question].correct_answer)
            console.log('incorrect_answers  '+response.results[random_question].incorrect_answers)
			

		})

		});




		
//  function getTime(){


// var s = 0;
// var m = 2;


// setTimeout('getTime()', 1000)

// if (m<10){
// 	m= '0' + m
// }
// if (s<10){
// 	s= '0' + s
// }

// $('#time_remaining').html(h+':'+m+':'+s)

// }
// getTime()	 


	



