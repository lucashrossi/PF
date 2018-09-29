<template>
  <div>
    
    <!-- <div> -->
      <v-app :dark="dark" >

        <v-navigation-drawer
          v-model="drawer"
          fixed
          app
          temporary
        >
          <v-list >
            <v-list-tile v-for="DDD in DDDD" :key="DDD.title" :to="DDD.link" :href="DDD.ref" :target="DDD.tar">
              <v-list-tile-action>
                <v-icon>{{DDD.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{DDD.title}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="play">
              <v-list-tile-action>
                <v-icon>{{this.snd}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Sonido</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="dark = !dark; colorr()">
              <v-list-tile-action>
                <v-icon>invert_colors</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{button.text}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

        </v-navigation-drawer>

        <v-toolbar color="blue-grey darken-3" dark fixed app>
          <v-toolbar-side-icon @click.stop="drawer = !drawer" ></v-toolbar-side-icon> <!--class="hidden-sm-and-up"></v-toolbar-side-icon>-->
          <v-toolbar-title>
            <v-btn flat router to='/'>
                <v-icon left>dashboard</v-icon>
                DashBoard
            </v-btn>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-md-and-down">
            <v-tooltip bottom>
              <v-btn flat v-for="D in DD" :key="D.title" :to="D.link" :href="D.ref" :target="D.tar" slot="activator">
                  <v-icon left>{{D.icon}}</v-icon>
                  {{D.title}}
                  <span>{{D.tool}}</span>
              </v-btn>
            </v-tooltip>
          </v-toolbar-items>
          <v-spacer></v-spacer> 
          <v-toolbar-items class="hidden-md-and-down">
            <!-- <v-btn flat v-for="DD in DDD" :key="DD.title">
                <v-icon left>{{DD.icon}}</v-icon>
                {{DD.title}}
            </v-btn> -->
            <!-- <v-btn flat @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"> -->
            <v-btn flat v-on:click="play">
            <!-- <audio ref="audioElm" src="http://www.noiseaddicts.com/samples_1w72b820/290.mp3" loop></audio> -->
            <!-- <audio ref="audioElm" src="Yael Naim - Intr.mp3" loop></audio> -->
            <audio ref="audioElm" src="https://firebasestorage.googleapis.com/v0/b/ppff-94bd3.appspot.com/o/Yael%20Naim%20-%20Intr.mp3?alt=media&token=9f10b04a-cf6e-4bf5-87ea-e66ec7939130" loop></audio>
            <!-- <audio ref="audioElm" src="gs://ppff-94bd3.appspot.com/Yael Naim - Intr.mp3" loop></audio> -->

                <v-icon left >{{this.snd}}</v-icon>
                <!-- <v-icon left >volume_up</v-icon> -->
                Sonido
            </v-btn>
            <v-btn flat @click="dark = !dark; colorr()" >
                <v-icon left>invert_colors</v-icon>
                {{button.text}}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-content>
          <!-- <vuetify-audio :file="file" :ended="audioFinish"></vuetify-audio> -->

          
          


          <nuxt/>
          <!-- <v-container fluid fill-height>
            <v-layout justify-center align-center>

            <nuxt/>

            </v-layout>
          </v-container> -->
        </v-content>

        <!-- <v-footer color="blue-grey darken-1" app>
          <span class="white--text">&copy; 2018</span>
        </v-footer> -->

        <v-footer color="blue-grey darken-1" app>
          <span class="white--text">&copy; 2018</span>
        </v-footer>
        
      </v-app>
    <!-- </div> -->

    <!-- <nuxt/> -->

    <!-- <v-app :dark="dark">
        <v-footer color="blue-grey darken-1" app>
          <span class="white--text">&copy; 2018</span>
        </v-footer>
    </v-app> -->

  </div>
</template>

<script>
  // import VuetifyAudio from 'vuetify-audio'

  export default {
    data: () => ({
      // file: 'http://www.noiseaddicts.com/samples_1w72b820/290.mp3',
      drawer: false,
      dark: false,
      snd: "volume_off",
      // disi: false,
      button: {
        text: 'Light'
      },
      seen: true,
      DD: [
          {icon: 'trending_up', title: 'Ventas', link: '/Ventas', tool: '', ref:''},
          {icon: 'business', title: 'Fiscalizacion', link: '/Fiscalizacion', tool: '', ref:''},
          {icon: 'attach_money', title: 'Regalias', link: '/Regalias', tool: '', ref:''},
          {icon: 'format_list_bulleted', title: 'Variedades', link: '/Variedades', tool: '', ref:''},
          // {icon: 'link', title: 'Buck', link: '', tool: 'Pagina', ref:'http://semillasbuck.com.ar/', tar: '_blank'}
          {icon: 'web', title: 'Analitics', link: '/Analitics', tool: ''}
          ],
      // DDD: [
      //     {icon: 'volume_off', title: 'Sonido'},
      //     {icon: 'invert_colors', title: 'Color'}
      //     ],
      // DDDD: [
      //     {icon: 'trending_up', title: 'Ventas', link: '/Ventas', tool: '', ref:''},
      //     {icon: 'business', title: 'Fiscalizacion', link: '/Fiscalizacion', tool: '', ref:''},
      //     {icon: 'attach_money', title: 'Regalias', link: '/Regalias', tool: '', ref:''},
      //     {icon: 'format_list_bulleted', title: 'Variedades', link: '/Variedades', tool: '', ref:''},
      //     {icon: 'link', title: 'Buck', link: '', tool: 'Pagina', ref:'http://semillasbuck.com.ar/'},
      //     {icon: 'volume_off', title: 'Sonido'},
      //     {icon: 'invert_colors', title: 'Color'}
      //     ],
      DDDD: [
          {icon: 'trending_up', title: 'Ventas', link: '/Ventas', tool: '', ref:''},
          {icon: 'business', title: 'Fiscalizacion', link: '/Fiscalizacion', tool: '', ref:''},
          {icon: 'attach_money', title: 'Regalias', link: '/Regalias', tool: '', ref:''},
          {icon: 'format_list_bulleted', title: 'Variedades', link: '/Variedades', tool: '', ref:''},
          // {icon: 'link', title: 'Buck', link: '', tool: 'Pagina', ref:'http://semillasbuck.com.ar/', tar: '_blank'},
          {icon: 'web', title: 'Analitics', link: '/Analitics', tool: ''}
          ]
    }),
    props: {
      
      // sndd: "volume_off"
    },
    // components: {
		// 	'vuetify-audio': VuetifyAudio
    // },
    methods: {
      // playSound (sound) {
      //   if(sound) {
      //     var audio = new Audio(sound)
      //     audio.play()
      //   }
      // },
      play: function(event) {
        var a = this.$refs.audioElm
        if (a.paused) {
          // console.log(this.snd)
          a.play()
          // this.disi = true
          this.snd="volume_up"
          // console.log(this.snd)
        } else {
          // console.log(this.snd)
          a.pause()
          // this.disi = false
          this.snd="volume_off"
          // console.log(this.snd)
        }
      },
      colorr: function() {
        this.seen = !this.seen
        console.log(this.button.text)
        this.button.text = this.seen ? 'Light' : 'Dark'
        console.log(this.button.text)


        // if (this.button.text="light") {
        //   console.log(this.button.text)
          
        //   this.button.text="dark"
        //   console.log(this.button.text)
        // } else {
        //   console.log(this.button.text)
          
        //   this.button.text="light"
        //   console.log(this.button.text)
        // }
      }
    },
    computed: {
      
    }
        
        
  }

</script>