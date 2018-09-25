<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
    >
      <v-list >
        <v-list-tile v-for="D in DD" :key="D.title">
          <v-list-tile-action>
            <v-icon>{{D.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{D.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="blue-grey darken-3" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
         <v-btn flat>
            <v-icon left>home</v-icon>
            DashBoard
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
            <v-icon left>trending_up</v-icon>
            Performance
        </v-btn>
         <v-btn flat>
            <v-icon left>schedule</v-icon>
            Candidatas
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer> 
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
            <v-icon left>invert_colors</v-icon>
            Color
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
          {icon: 'home', title: 'Dashboard'},
          {icon: 'trending_up', title: 'Performance'},
          {icon: 'schedule', title: 'Candidatas'}
          ]
    }),
    props: {
      source: String
    }
  }
</script>