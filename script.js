let computerSign 
$(".submit-button").click(function(){
  

let inputAnswer = $(".input-box").val();
  if(inputAnswer!="Rock"&&inputAnswer!="Paper"&&inputAnswer!="Scissors")
    alert("Choose again");
  else{
 $(".contestent").text("Contestant: "+inputAnswer)
let computerChoice = Math.random();
  if (computerChoice >.666666){
    computerSign="Rock"; 
   
  }
    else if (computerChoice >.333333){
      computerSign="Paper"; 
      
    }
  else {
   computerSign="Scissors"; 
  
  }
  console.log(computerSign);
$(".computer").text("Computer: "+computerSign);
  
  if (computerSign === inputAnswer ) {
    $(".result").text("Its a tie") 
    console.log("Its a tie")
  }
  else if (computerSign === "Rock" && inputAnswer === "Scissors") {
    $(".result").text("Computer Wins"); 
    console.log("Computer Wins");
  }
  else if (computerSign === "Paper" && inputAnswer === "Rock") {
     $(".result").text("Computer Wins"); 
    console.log("Computer Wins");
  }
 
  else if (computerSign === "Scissors" && inputAnswer === "Paper") {
    $(".result").text("Computer Wins");  
    console.log("Computer Wins");
  }
  else {
    $(".result").text("Contestant Wins") ;
    console.log("Player wins");
  }

//   if (computerSign === "Rock"){
//      if inputAnswer === "Scissors"){
      //There should be 3 ties. 6 player wins ? and 6 computer wins ?
//     }
//   } 

//   if (computerSign === "Rock" && inputAnswer === "Paper") {
//     console.log("Its a tie")
//   }
  } 
});



 //-- this here is will just get the input data 
  // now we need to I think have the computer choose a random sign out of the 3//
// we can probably set the computer choices to a sign








