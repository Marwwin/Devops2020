<template>
  <div class="quiz">
    <!-- WHY TF IS THE TEXT NOT IN THE MIDDLE-->
    <div class="outer">
      <div class="box"><h1>Easy</h1></div>
      <div class="box" style="margin: 15px"><h1>Medium</h1></div>
      <div class="box">
        <h1>Cry</h1>
        <br />
      </div>
    </div>
      {{this.socketMessage}}
    <h3> PLAYER NAME </h3>
    <input type="text" v-model="$attrs.info.playerName" placeholder="Player Name">
    <br>
    <button v-on:click="ready">Ready For Quizzing</button>    
  </div>
</template>

<script>

export default {
  name:'Quiz',
  data() {
    return {
      isConnected: false,
      socketMessage: '',
    }
  },
  mounted () {
    
  
  },
  methods: {
    ready(){
      this.$socket.emit('player', this.$attrs.info.playerName);
      this.$socket.join('player-room');
    },
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('connect', 'PING!');
    }
  },
 sockets: {
   
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;

    },

    disconnect() {
       this.$socket.emit('player', this.$attrs.info.playerName);
      this.$socket.emit('disconnect',this.$attrs.info.playerName)
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    },
    
  },
}
</script>

<style scoped>
.outer {
  padding-top: 4%;
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}
.box {
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

.box:hover {
  padding: 8.5%;
  background-color: rgba(71, 61, 139, 0.301);
}
</style>