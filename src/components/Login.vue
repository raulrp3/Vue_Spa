<template>
  <div class="container">
    <div class="shadow p-5 mt-5 rounded">
      <form action="index.html" class="col-md-12 my-4">
        <div class="col-auto mt-3 mb-3">
          <div class="input-group mb-2">
            <input type="email" class="form-control" id="inputEmail" placeholder="example@example.com" v-model="email">
          </div>
        </div>
        <div class="col-auto mt-3 mb-3">
          <div class="input-group mb-2">
            <input type="password" class="form-control" id="inputPassword" placeholder="********" v-model="password">
          </div>
        </div>
        <div class="mx-5 mt-4 mb-4 d-flex justify-content-center">
            <button class="btn btn-primary mr-2" @click.prevent="login">Iniciar sesión</button>
            <router-link class="btn btn-secondary font-weight-bold" to="/register">¡Regístrate!</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        this.$router.push({ path: '/home' });
      });
    }
  },
}
</script>
