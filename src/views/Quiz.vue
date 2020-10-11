<template>
  <div class="quiz">

<div class="outer">
<div class="box"><h1>Easy</h1></div>
<div class="box" style="margin : 15px"><h1>Medium</h1></div>
<div class="box"> <h1>Cry</h1><br>
</div>
</div>

    <!-- How does one get question from that DB-->
    <h1>Quiz</h1>
    <div class="question">
    <h1>Question 1</h1>
    <p>What's the name of Helsinki?</p>
    <input type="text" id="quiz-answer" />
    <div class="question"></div>

  </div>
  </div>
</template>

<style scoped>
.outer{
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
    
transition: all 1s ease;
    }

    .box:hover{
       padding: 8.5%;
    }
</style>