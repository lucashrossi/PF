<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <!-- <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout> -->
                <v-layout row>
                  <v-flex xs12>
                    <!-- <v-btn type="submit">Sign up</v-btn> -->
                    <!-- <v-btn  type="submit" v-if="!alert" @click="alert=true">Sign in</v-btn> -->
                    <!-- <v-btn  type="submit" v-if="!alert" @click="alertS">Sign in</v-btn> -->
                    <v-btn  type="submit" v-if="!alert" @click="alertS">Sign in</v-btn>
                    <v-alert
                      v-model="alert"
                      dismissible
                      type="warning"
                      color='rgba(200,100,50)'
                      icon="priority_high"
                      outline
                      :value="true"
                    >
                      Error de credenciales!
                    </v-alert>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    // middleware: 'login',
    data () {
      return {
        // alert: false,
        // alert: this.$store.alert,
        alert: this.$store.getters.alertG,
        email: '',
        password: '',
        // confirmPassword: ''
      }
    },
    // computed: {
    //   comparePasswords () {
    //     return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    //   },
    //   user () {
    //     return this.$store.getters.user
    //   }
    // },
    // watch: {
      // user (value) {
      //   if (value !== null && value !== undefined) {
      //     this.$router.push('/')
      //   }
      // },
    // },
    methods: {
      onSignin () {
        console.log('onsignin dispatch')
        this.$store.dispatch('authenticateUser', {email: this.email, password: this.password})
          // .then(() => {
          //   if (!this.$store.getters.isAuthenticated) {
          //     alert = true
          //     console.log('alert true')
          //   }
          // })
          .then(() => {
              this.alert = this.$store.getters.alertG
              console.log('alert final')
              console.log(this.alert)
              console.log(this.$store.getters.alertG)
          })
      },
      alertS () {
        if (!this.$store.getters.isAuthenticated) {
          // this.alert = true
          // this.alert = this.$store.alert
          console.log('alertS')
          
          console.log(this.alert)
          console.log(this.$store.getters.alertG)
        }
      }
    },
    created() {
      this.$store.dispatch('CeTo')
      console.log('dispatch CeTo')
    }
  }
</script>