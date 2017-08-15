$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    var inputSentence = $("#input-sentence").val();
    var sentenceArray = inputSentence.split("");
    var basket =[];

    for(var i = 1; i <= sentenceArray.length; i++){
      if(sentenceArray[i-1] === ("a"|| "e" || "i" || "o" || "u" ){
        basket.push("-");
      } else{
        basket.push(sentenceArray[i-1]);
      };
    };
    result = basket.join();
    alert(result);

  });
});
