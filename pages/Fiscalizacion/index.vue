<template>

  <v-tabs centered color="#542a25" dark height="30">
      
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1" class="caption">
      <!-- <v-icon class="mr-1">note</v-icon> -->
      Buck
    </v-tab>

    <v-tab href="#tab-2" class="caption">
      <!-- <v-icon class="mr-1">schedule</v-icon> -->
      Todos
    </v-tab>

    <v-tab-item id='tab-1'>

      <v-container fluid>

        <v-layout row wrap>
          <v-flex xs12 md3>
            <PBF/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            <PI/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            <Piv/>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md3>
            <Pivi/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            <MIXXX/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            <MIXC/>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md3>
            <Radd/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            <!-- <Pola/> -->
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            
          </v-flex>
        </v-layout>

      </v-container>

    </v-tab-item>

    <v-tab-item id='tab-2'>

      <v-container fluid>

        <v-layout row wrap>
          <v-flex xs12 md3>
            <FISC/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            <Piii/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md3>
            
          </v-flex>
        </v-layout>

      </v-container>

    </v-tab-item>
    
  </v-tabs>

</template>



<script>
export default {
  layout: 'DBB'
}
</script>