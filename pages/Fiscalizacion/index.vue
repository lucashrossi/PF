<template>

    <v-tabs centered color="#542a25" dark height="25">
        
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

        <v-container fluid text-xs-center>

          <v-layout row wrap >
            <v-flex xs12 style="border-bottom: 5px solid green">
              <h1>INASE</h1>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <FISCR/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <PI/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <Piiv/>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12 style="border-bottom: 5px solid green">
              <h1>Mario</h1>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <Piv/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <Pivi/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <MIXXX/>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <MIXC/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <Radd/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <Pola/>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <DNC/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <BU/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <BUU/>
            </v-flex>
          </v-layout>

        </v-container>

      </v-tab-item>

      <v-tab-item id='tab-2'>

        <v-container fluid text-xs-center>

          <v-layout row wrap>
            <v-flex xs12 style="border-bottom: 5px solid green">
              <h1>INASE</h1>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <FISC/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <Piii/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              
            </v-flex>
          </v-layout>

        </v-container>

      </v-tab-item>
      
    </v-tabs>

</template>



<script>
export default {
  layout: 'DBB',

}
</script>