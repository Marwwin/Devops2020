<template>
  <div class="quiz">
    <br>
    <!-- How does one get question from that DB-->
    <h2>START QUIZ</h2>
    <div class="question">
    <h3>Question 1</h3>
    <p>What's the name of Helsinki?</p>
    <input type="text" id="quiz-answer" />
    </div><br>
    <div class="question">
    <h3>Question 2</h3>
    <p>Who said "Livet är ett möte?"</p>
    <input type="text" id="quiz-answer" />
    </div><br>
    <button id="answer-btn">Submit</button>
    <button id="cancel-btn" onclick="document.location='../'">Cancel</button>
  
  </div>
</template>

<style scoped>
    #answer-btn{
      padding: 0 20px;
     width: 15vw;
    height: 6vh;
      background-color: #333333;
      border-radius: 10px;
      color:  rgb(223, 185, 90);
      margin: 5px ;
      border: none;
    }

    #cancel-btn{
      padding: 0 20px;
      margin: 5px ;
     width: 15vw;
    height: 6vh;
      background-color: #70707088;
      border-radius: 10px;
      color:  black;
      border: none;
    }

</style>