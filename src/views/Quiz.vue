<template>
  <div class="quiz">

    <h4> PLAYER NAME </h4>
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
      this.isConnected = false;
      console.log(this.playerName);
      this.$socket.emit('disconnect', this.playerName);
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    },
    player(){

    }
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