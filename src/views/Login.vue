<template>
  <div id="login">
    <h2>LOGIN</h2>
    <form action="login">
      Username:
      <input type="text" id="username" v-model="username" />
      Password:
      <input type="text" id="password" v-model="password" />
      <input type="button" value="login" @click="login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["info"],
  components: {},
  methods: {
    login: function () {
      const vm = this;
      fetch("http://localhost:3000/users/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      }).then((res) => res.json()).then((res) => vm.auth = res.token );
    },
  },
  data: function () {
    return {
      username: "",
      password: "",
      auth: null,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>