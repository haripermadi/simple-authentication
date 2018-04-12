import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeUser: {
      token: localStorage.getItem('token') || ''
    }
  },
  actions: {
    singup: function (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signup',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      }).then(response => {
        console.log(response)
        alert('signup success!')
        // location.reload()
      }).catch(error => {
        alert('sign up failed!', error)
      })
    }
  }
})

export default store
