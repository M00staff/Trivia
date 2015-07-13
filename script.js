var points = 0;
var questions = [
	{
	 question: 'question1' ,
	 answer: 'answer1'
	}
	,
	{
	 question: 'question2' ,
	 answer: 'answer2'
	}
	,
	{
	 question: 'question3' ,
	 answer: 'answer3'
	}
];

$('#begin').on('click' , function(){
	for (var i = 0 ; i < 3 ; i++) {
 		//$('.question').text(questions[i].question);
		var answerDizzle = prompt(questions[i].question+'?')
			if (answerDizzle === questions[i].answer) {
				points++;
				$('.question').html(points);
				console.log(points);
			}
	}

});

