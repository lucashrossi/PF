<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
    >
      <v-list >
        <v-list-tile v-for="DDD in DDDD" :key="DDD.title">
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
         <v-btn flat>
            <v-icon left>dashboard</v-icon>
            DashBoard
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat v-for="D in DD" :key="D.title">
            <v-icon left>{{D.icon}}</v-icon>
            {{D.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer> 
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat v-for="DD in DDD" :key="DD.title">
            <v-icon left>{{DD.icon}}</v-icon>
            {{DD.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        </v-layout>
      </v-container>
    </v-content>

    <v-footer color="blue-grey darken-1" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      DD: [
          {icon: 'trending_up', title: 'Ventas'},
          {icon: 'attach_money', title: 'Regalias'},
          {icon: 'schedule', title: 'Lineas'},
          {icon: 'web', title: 'Buck'}
          ],
      DDD: [
          {icon: 'volume_up', title: 'Sonido'},
          {icon: 'invert_colors', title: 'Color'}
          ],
      DDDD: [
          {icon: 'trending_up', title: 'Ventas'},
          {icon: 'attach_money', title: 'Regalias'},
          {icon: 'schedule', title: 'Lineas'},
          {icon: 'web', title: 'Buck'},
          {icon: 'volume_up', title: 'Sonido'},
          {icon: 'invert_colors', title: 'Color'}
          ]
    }),
    props: {
      source: String
    }
  }
</script>