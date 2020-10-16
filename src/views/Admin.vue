<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <div>
      <h3>Add new question</h3>

      <p>Question</p>
      <input type="text" v-model="question" name="question" id="question" />
      <p>Answers</p>
      <input type="text" v-model="ans" name="answer" id="answer" />
      <button v-on:click="addAnswer">+</button>
      <ul v-if="answers">
        <li v-for="ans in answers" :key="ans.id">
          {{ ans.data }} <button v-on:click="removeAnswer(ans.id)">-</button>
        </li>
      </ul>
      <p>Time (default 15)</p>
      <input type="number" v-model="time" value="15" name="time" id="time" />
      <p>Value points</p>
      <input
        type="number"
        v-model="valuepoints"
        value="1"
        name="value"
        id="value"
      />
      <br />
      <input type="button" value="SAVE QUESTION" v-on:click="saveQuestion" />
    </div>
    <div id="addquizes">
      <h3>Make a new Quiz</h3>
      <p>Name of quiz</p>
      <input type="text" v-model="quizName" />
      <p>Add questions</p>
      <div id="listofquizes-holder">
        <ul id="listofquizes">
          <li v-for="(q, i) in notUsed" :key="q.id">
            {{ i + 1 }} <input type="checkbox" name="" id="" />
            <span> {{ q.question }} </span>
          </li>
        </ul>
      </div>
      <br />
      <button>Save quiz</button>
    </div>
  <div id="user-container">
   <!-- <button v-on:click="getWaitingRoom">Get list of users in waiting room</button> -->
   <h2>Players in waiting room</h2>
    <div id="waiting-room-container" v-for="user in waitingRoom" v-bind:key="user.socket">
      <div v-on:click="sendMsg(user.socket)"> {{user.name}} </div>
    </div>
    </div>
  </div>

</template>


<script>
export default {
  name: "Admin",
   sockets: {
   
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;

    },
    admin(data){
      this.waitingRoom = data;
    }
    },
  methods: {
    sendMsg: function(socket){
      const message = prompt("Send msg")
      this.$socket.emit("admin",{type: "sendMsg",reciever: socket, message: message})
    },
    getWaitingRoom: function (){
      this.$socket.emit("admin",{type:"getWaitingRoom"})
    }
    ,
    removeAnswer: function (id) {
      // Filtrera bort det elementet som skall tas bort
      const tempAnswers = this.answers.filter((x, i) => i != id);
      // Updatera idn på de resterande elementen
      const newAnswers = tempAnswers.map((x, i) => { return { data: x.data, id: i }; });
      // Uppdatera answer med den nya 
      this.answers = newAnswers;
    },
    saveQuestion: function () {
      const arrayAnswers = this.answers.map((data) => data.data);

      const theJson = {
        question: this.question,
        correctAnswers: arrayAnswers,
        questionValue: this.valuepoints,
        answerTime: this.time,
      };

      fetch("http://localhost:3000/questions/", {
        method: "POST",
        headers: {
          Authorization: this.$attrs.info.auth,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(theJson),
      }).then((res) => {
        console.log(res);
        this.populateQuestions();
        this.question = "";
        this.correctAnswers = [];
        this.time = 15;
        this.questionValue = 1;
      });
    },
    addAnswer: function () {
      this.answers.push({
        id: this.answers.length,
        data: this.ans,
      });
      this.ans = null;
    },
    populateQuestions: function () {
      fetch("http://localhost:3000/questions/")
        .then((res) => res.json())
        .then((res) => {
          this.questions = res;
        });
    },
  },
  computed: {
    notUsed: function () {
      return this.questions.filter((q) => !q.used);
    },
  },
  mounted() {
    this.getWaitingRoom();
    this.populateQuestions();
  },
  data: function () {
    return {
      ans: null,
      answers: [],
      time: 15,
      valuepoints: 1,
      question: null,
      questions: [],
      quizName: null,
      isConnected: false,
      waitingRoom: [],
    };
  },
};
</script>

<style scoped>
#user-container{
  
  margin-bottom: 10em 

}

#waiting-room-container{
  display:flex;
  justify-content: center;
  padding: 0.5em;

}

#waiting-room-container div{
  margin: 0.1em;
}

#listofquizes-holder {
  display: flex;
  justify-content: center;
}
#listofquizes {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
#addquizes {
  margin: 5em;
}
</style>