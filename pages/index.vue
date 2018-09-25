<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
    >
      <v-list dense >
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="blue-grey darken-3" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <!-- <v-toolbar-title>DashBoard</v-toolbar-title>
      <v-spacer></v-spacer> -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
            <v-icon left>home</v-icon>
            Home
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
      drawer: false
    }),
    props: {
      source: String
    }
  }
</script>