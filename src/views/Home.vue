<template>
    <div class="home">
        <h1> TLK QUIZ APP </h1>
        <Register />

         <Login />
    </div>
</template>

<script>
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'


export default {
     name: 'App',
  components: {
    Register,
    Login
  },
}
</script>