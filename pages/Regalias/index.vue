<template>
  <div>
    
    <br>
    <br>
    <v-container>
    <v-layout row wrap>
      <v-flex xs5>
        <NC/>
      </v-flex>
      <v-spacer></v-spacer> 
      <v-flex xs5> <!--class="text-xs-center">-->
        <NCC/>
      </v-flex>
    </v-layout>
    </v-container>

    <br>
    <br>
    <v-container>
    <v-layout row wrap>
      <v-flex xs5>
        <Radar/>
      </v-flex>
      <v-spacer></v-spacer> 
      <v-flex xs5> <!--class="text-xs-center">-->
        <DN/>
      </v-flex>
    </v-layout>
    </v-container>

    <br>
    <br>
    <v-container>
    <v-layout row wrap>
      <v-flex xs5>
        <HOR/>
      </v-flex>
      <v-spacer></v-spacer> 
      <v-flex xs5> <!--class="text-xs-center">-->
        
      </v-flex>
    </v-layout>
    </v-container>

    <br>
    <br>
    <br>
    <br>
  

    <!-- <v-container> -->
      <v-layout justify-center row>
      <v-flex xs11>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header" style="text-align: center">Auditorias</div>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              <tabla/>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!-- <tabla/> -->
      </v-flex>
      </v-layout>
    <!-- </v-container -->

    <br>
    <br>


  </div>
    
</template>

<script>
export default {
  layout: 'DBB',

  
}
</script>

