import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeUser: {
      token: localStorage.getItem('token') || ''
    }
  },
  getters: {
    getToken: function (state) {
      return state.activeUser
    }
  },
  actions: {
    signUp: function (context, payload) {
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
        location.reload()
      }).catch(error => {
        alert('sign up failed!', error)
        Swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      })
    },
    signIn: function (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signin',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(response => {
        console.log(response)
        Swal(
          'Welcome!',
          'Sign In Success!',
          'success'
        )
        localStorage.setItem('token', response.data.user.token)
      })
    }
  }
})

export default store
