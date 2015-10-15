function submitAnswers(){
  var total = 4;
  var score = 0;

  //Get User input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;

  //Validation
  for(i = 1; i <= total; i++){
    if(eval('q'+i)==null || eval('q'+i)==''){
      alert('You missed question' + i);
      return false;
    }
  }

  //Set Correct Answers
  var answers=["b", "a", "b", "c"];

  //Check Answers
  for(j=1; j<=total; j++){
    if(eval('q'+j) == answers[j-1]){
      score++;
    }
  }
  
  //Display results
  var results = document.getElementById('results');
  results.innerHTML='<h3> You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>'
  return false;
}
