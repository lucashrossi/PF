import Vuex from 'vuex'
// import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {   
      token: null,
      alert: false,
      loadedPosts: []
    },
    mutations: {
      setToken (state, token) {
        state.token = token
      },
      clearToken (state) {
        state.token = null
        console.log('mutation clearToken')
      },
      alertTr (state) {
        state.alert = true
        console.log('mutation alertTr')
      },
      alertFa (state) {
        state.alert = false
        console.log('mutation alertFa')
      },
      setPosts(state, posts) {
        state.loadedPosts = posts
        console.log('mutation setPosts')
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log('nuxtServerInit')
        return this.$axios.get('https://pfdbb-dc48b.firebaseio.com/posts.json')
            .then(res => {
                const postArray = []
                for (const key in res.data) {
                    postArray.push({ ...res.data[key], id: key})
                }
                console.log('store setPosts')
                vuexContext.commit('setPosts', postArray)
                
            })
            .catch(e => {
              context.error(e)
              console.log(e)
            })
           
      },
      authenticateUser (vuexContext, authData) {
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD7QIWh3QJv9q5qMi52-QQoG1n_Un0G-Ds'
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken)
            console.log('store settoken')

            vuexContext.commit('alertFa')
            console.log('store alertFa')

            this.$router.push('/DashB')
            console.log('onsignin rout')


            
            

            // localStorage.setItem('token', result.idToken)
            // localStorage.setItem(
            //   'tokenExpiration',
            //   new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            // )
            // Cookie.set('jwt', result.idToken)
            // Cookie.set(
            //   'expirationDate',
            //   new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            // )
          })
          .catch(e => {
            console.log(e)
            vuexContext.commit('alertTr')
            console.log('store alertTr')
            console.log(this.getters.alertG)
          })
      },
      CeTo (vuexContext) {
        vuexContext.commit('clearToken')
        console.log('action CeTo')
      }
      // initAuth (vuexContext, req) {
      //   let token
      //   let expirationDate
      //   if (req) {
      //     if (!req.headers.cookie) {
      //       return
      //     }
      //     const jwtCookie = req.headers.cookie
      //       .split(';')
      //       .find(c => c.trim().startsWith('jwt='))
      //     if (!jwtCookie) {
      //       return
      //     }
      //     token = jwtCookie.split('=')[1]
      //     expirationDate = req.headers.cookie
      //       .split(';')
      //       .find(c => c.trim().startsWith('expirationDate='))
      //       .split('=')[1]
      //   } else {
      //     token = localStorage.getItem('token')
      //     expirationDate = localStorage.getItem('tokenExpiration')
      //   }
      //   if (new Date().getTime() > +expirationDate || !token) {
      //     console.log('No token or invalid token')
      //     vuexContext.dispatch('logout')
      //     return
      //   }
      //   vuexContext.commit('setToken', token)
      // }
    },
    getters: {
      isAuthenticated (state) {
        console.log('getter isAuthenticated')
        return state.token != null
      },
      alertG (state) {
        console.log('getter alert')
        return state.alert
      },
      dessert (state) {
        console.log('getter dessert')
        return state.loadedPosts
      }
    }
  })
}

export default createStore
