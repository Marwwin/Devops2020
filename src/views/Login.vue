<template>
<!-- VARFÖR FUNKAR EJ MIN CSS IN THIS FORM MY DUDES-->
  <div id="login">
    <h2>LOGIN</h2>

    <div class="outer">
      <div class="box">
        <form action="login">
      Username:
      <div class="input-field">
        <input type="text" id="username" v-model="username" /><br>
      </div>
      Password:
      <div class="input-field">
        <input type="text" id="password" v-model="password" /><br>
      </div>
      <br>
     <div id="login-btn"><input type="button" value="Log in" @click="login" /></div> 
    </form>
      </div>
    </div>
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
#login{
    margin-top: 5vh;
}


#login-btn{
   display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: #333333;
  border-radius: 10px;
}

.outer{
        padding-top: 4%;
        list-style-type: none;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .box{
    display: inline-flex;
    text-align: center;
    padding: 8%;
    background-color: white;
    border: darkslateblue;
    border-style: solid;
    border-radius: 4%;
    }

    .input-field{
      width: 100%;
  position: relative;
  background-color: black;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
    }

</style>