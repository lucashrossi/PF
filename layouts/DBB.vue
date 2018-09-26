<template>
  <div>
    
    <!-- <div> -->
      <v-app>
        <v-navigation-drawer
          v-model="drawer"
          fixed
          app
          temporary
        >
          <v-list >
            <v-list-tile v-for="DDD in DDDD" :key="DDD.title" router :to="DDD.link">
              <v-list-tile-action>
                <v-icon>{{DDD.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{DDD.title}}</v-list-tile-title>
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
            <v-btn flat v-for="D in DD" :key="D.title" router :to="D.link">
                <v-icon left>{{D.icon}}</v-icon>
                {{D.title}}
            </v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer> 
          <v-toolbar-items class="hidden-md-and-down">
            <v-btn flat v-for="DD in DDD" :key="DD.title" router :to="DD.link">
                <v-icon left>{{DD.icon}}</v-icon>
                {{DD.title}}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-content>
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

       
        
      </v-app>
    <!-- </div> -->

    <!-- <nuxt/> -->

    <v-app>
        <v-footer color="blue-grey darken-1" app>
          <span class="white--text">&copy; 2018</span>
        </v-footer>
    </v-app>

  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      DD: [
          {icon: 'trending_up', title: 'Ventas', link: '/Ventas'},
          {icon: 'business', title: 'Fiscalizacion', link: '/Fiscalizacion'},
          {icon: 'attach_money', title: 'Regalias', link: '/Regalias'},
          {icon: 'format_list_bulleted', title: 'Variedades', link: '/Variedades'},
          {icon: 'link', title: 'Buck', link: '/'},
          ],
      DDD: [
          {icon: 'volume_off', title: 'Sonido'},
          {icon: 'invert_colors', title: 'Color'}
          ],
      DDDD: [
          {icon: 'trending_up', title: 'Ventas', link: '/Ventas'},
          {icon: 'business', title: 'Fiscalizacion', link: '/Fiscalizacion'},
          {icon: 'attach_money', title: 'Regalias', link: '/Regalias'},
          {icon: 'format_list_bulleted', title: 'Variedades', link: '/Variedades'},
          {icon: 'link', title: 'Buck', link: '/'},
          {icon: 'volume_off', title: 'Sonido'},
          {icon: 'invert_colors', title: 'Color'}
          ]
    })
  }
</script>