<template>
  <div class="quiz">
    {{this.socketMessage}}
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

</style>