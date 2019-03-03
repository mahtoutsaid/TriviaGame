function cleanData(str){
	return str.replace(/&amp;/g,"&")
			   .replace(/&gt;/g, ">")
			   .replace(/&lt;/g, "<")
			   .replace(/&quot;/g, "\"")
			   .replace(/&#039;/g, "\'")
			   .replace(/&pi;/g, "π")
			   .replace(/&eacute;/g, "é");
}
var win = 0;
var lost = 0;
var sec = 30;
var timer;
$.ajax({
	url: "https://opentdb.com/api.php?amount=10&type=multiple",
	 method: "GET"
	}).then(function(response) {
		$('#btn').on('click', function nextQuestion(){
			var timer = setInterval(counterDown, 1000)
			$(this).hide();
			$('#myDiv').show();
			$('#resultsDiv').show();
			$('#imgDiv').show();
			var random_question = Math.floor(Math.random()*(response.results.length));
			var question = response.results[random_question].question;
			var incorrectAnswers = response.results[random_question].incorrect_answers;
			var correctAnswer = response.results[random_question].correct_answer;
			var arr_answers = incorrectAnswers.concat(correctAnswer);
			var i = arr_answers.length;
			var random_index, num;
			question = cleanData(question);
			$('#question').text(question);
			while(i > 0) {
			random_index = Math.floor(Math.random() * i);
			i--
			num = arr_answers[i];
			arr_answers[i] = arr_answers[random_index];
			arr_answers[random_index] = num;
			}
			arr_answers.forEach(function(h){
				var par = $('<h5>');
				par.addClass('paragraph')
				par.text(h);
				$('#answerSuggestion').append(par);
			})
			$('h5').on('click', function(){
				$('#correct').text('');
				$('#incorrect').text('');
					if($(this).text() == correctAnswer){
						win++
						$('#wins').text(win)
						$('#text').text('Correct!');
						$('img').attr('src', 'https://media.giphy.com/media/APd3yd2DpnCH6/giphy.gif').css({'width':'100%', 'height':'300px'})
						$('h5').text("")
						$('#correct_answer').text('**.. You Got It ..**')
						clearInterval(timer);
						nextQuestion();
				    }else{
						lost++
						$('#losses').text(lost);
						$('#text').text('Nope!');
						$('#correct_answer').text('**.. ' + correctAnswer + ' ..**')  
						$('img').attr('src', 'https://media0.giphy.com/media/2rtQMJvhzOnRe/giphy.gif?cid=3640f6095c6678395575365467b35c8d').css({'width':'100%', 'height':'300px'});
						$('h5').text("");
					    clearInterval(timer);
						nextQuestion();	
					}		
			});	     
				console.log('correct_answer  '+response.results[random_question].correct_answer);
				console.log('incorrect_answers  '+response.results[random_question].incorrect_answers);								
		});	
	});

//  Timer
function counterDown() { 
	min = Math.floor(sec / 60) 
	sec_left = sec % 60
	 if (min < 10) {
		 min = '0' + min
	 }
	 if (sec_left < 10) {
		 sec_left = '0' + sec_left
	 }
	 if (min==0 && sec < 6) {
	   $('#time_left').css('color', 'red');				
}			
    $('#time_left').html(min + ':' + sec_left);
	 if (sec == 0) {
		clearInterval(timer)
		$('.row').hide();
		$('#game_over').show();
		$('#win').text(win)
		$('#lost').text(lost)
		if (win < 5) {
			$('#evaluation').html('^...Poor...^'+ "<br>" + "<br>" + '<img src="http://www.iconarchive.com/download/i108243/google/noto-emoji-smileys/10032-sad-but-relieved-face.ico" width="80px" height="80px">')
		 }
		if((win>5) && (win<8)) {
			$('#evaluation').html('^...Good Job...^'+ "<br>" + "<br>" + '<img src="https://i.ebayimg.com/images/g/osQAAOSwbwlXBS-T/s-l300.jpg" width="80px" height="80px">');
		 }
		 if (win >7) {
			$('#evaluation').html('^...Excellent...^'+ "<br>" + "<br>" + '<img src="https://win.golf/wp-content/uploads/2017/11/happy-face-1.jpg" width="80px" height="80px">');   
		 }
	 }
 sec--		   
}

// Play again
$('#play_again').on('click', function() {
	location.reload();
})			
			