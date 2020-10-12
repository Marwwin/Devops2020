<template>
  <div class="quiz">

    <!-- How does one get question from that DB-->
    <h1>Quiz</h1><br>
    <div class="question">
    <h2>Question 1</h2>
    <p>What's the name of Helsinki?</p>
    <input type="text" id="quiz-answer" />
    </div><br>
    <div class="question">
    <h2>Question 2</h2>
    <p>Who said "Livet är ett möte?"</p>
    <input type="text" id="quiz-answer" />
    </div><br>
    <button id="answer-btn">Submit</button>
    <button id="cancel-btn" onclick="document.location='../'">Cancel</button>
  
  </div>
</template>

<style scoped>
/*.outer{
        padding-top: 4%;
        list-style-type: none;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .box{
    display: inline-flex;
    height: 10vh;
    width: 10vw;
    text-align: center;
    padding: 8%;
    background-color: white;
    border: darkslateblue;
    border-style: solid;
    border-radius: 4%;
    transition: all 1s ease;
    }

    .box:hover{
       padding: 8.5%;
       background-color: rgba(71, 61, 139, 0.301);
    }*/

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