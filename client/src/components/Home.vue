<template>
  <div class="container">
    <h1>Welcome!</h1>
    <div class="row">
      <div class="col-md-6">
        <h2>Register here!</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="newUser.name" placeholder="Enter your name...">
          </div>
          <div class="form-group">
            <!-- <p :class="{ 'control': true }">
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p> -->
            <label for="email">Email address</label>
            <input type="email" class="form-control" v-model="newUser.email" placeholder="Enter your email...">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="newUser.password" placeholder="Password">
          </div>
          <!-- <div class="form-group">
            <label for="checkpass">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Password">
          </div> -->
          <button type="submit" class="btn btn-primary" v-on:click="signUp">Sign Up</button>
        </form>
      </div>
      <div class="col-md-6">
        <h2>Sign In here!</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="loginUser.email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="loginUser.password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary" v-on:click="signIn">Sign In</button>
          <!-- <div v-show="getToken !== null">
            JWT: {{getToken}}
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      newUser: {
        name: '',
        email: '',
        password: ''
      },
      loginUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signUp: function () {
      console.log(this.newUser)
      this.$store.dispatch('signUp', this.newUser)
    },
    signIn: function () {
      this.$store.dispatch('signIn', this.loginUser)
      this.$router.push({path: '/welcome'})
    }
  },
  computed: {
    // getToken: function () {
    //   return this.$store.getters.getToken.token
    // }
  }
}
</script>

<style>

</style>
