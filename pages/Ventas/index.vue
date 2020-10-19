<template>

    <v-tabs centered color="#542a25" dark height="25">
      
      <v-tabs-slider color="green"></v-tabs-slider>

      <v-tab href="#tab-1" class="caption">
        <!-- <v-icon class="mr-1">note</v-icon> -->
        Pan
      </v-tab>

      <v-tab href="#tab-2" class="caption">
        <!-- <v-icon class="mr-1">schedule</v-icon> -->
        Fideo
      </v-tab>

      <v-tab href="#tab-3" class="caption">
        <!-- <v-icon class="mr-1">location_city</v-icon> -->
        Avena
      </v-tab>

      <v-tab href="#tab-4" class="caption">
        <!-- <v-icon class="mr-1">location_city</v-icon> -->
        Girasol
      </v-tab>

      <v-tab href="#tab-5" class="caption">
        <!-- <v-icon class="mr-1">map</v-icon> -->
        Vendedores
      </v-tab>

      <v-tab href="#tab-6" class="caption">
        <!-- <v-icon class="mr-1">table_chart</v-icon> -->
        Ensayos
      </v-tab>

      <!-- <v-tab-item v-for="i in 6" :id="'tab-' + i" :key="i"> -->
      <v-tab-item id='tab-1'>

        <v-container fluid grid-list-md text-xs-center>
          <v-layout row wrap>
          <!-- <v-layout justify-space-between row > -->
            <v-flex xs12 md12 lg4 style="border-right: 2px solid green">
              <h1 style="border-bottom: 2px solid green">Original</h1>
              <!-- <v-flex xs12 sm12 lg11 xl11>
                <MIXCO/>
              </v-flex> -->
              <!-- <v-flex xs12 sm12 lg11 xl11>
                <DNN/>
              </v-flex> -->
              <v-flex xs12 sm12 lg11 xl11>
                <MIXSI/>
              </v-flex>
              <v-flex xs12 sm12 lg11 xl11>
                <MIXSII/>
              </v-flex>
              <!-- <v-flex xs12 sm12 lg11 xl11>
                <MIX/>
              </v-flex> -->
              <!-- <v-flex xs12 sm12 lg11 xl11>
                <Polar/>
              </v-flex> -->
              <!-- <v-flex xs12 sm12 lg11 xl11>
                <Radar/>
              </v-flex> -->
              <!-- <v-flex xs12 sm12 lg11 xl11>
                <Pivv/>
              </v-flex> -->
            </v-flex>

            <v-flex xs12 md12 lg4 style="">
              <h1 style="border-bottom: 2px solid green">Totales</h1>
              <v-flex xs12 sm12 lg11 xl11>
                <MIXSIII/>
              </v-flex>
              <v-flex xs12 sm12 lg11 xl11>
                <MIXSII/>
              </v-flex>
              <!-- <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <MIXCO/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <DNN/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <MIX/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <Polar/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <Radar/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <Pivv/>
              </v-flex> -->
            </v-flex>

            <v-flex xs12 md12 lg4 style="border-left: 2px solid green">
              <h1 style="border-bottom: 2px solid green">Primera multiplicacion</h1>
              <v-flex xs12 sm12 lg11 xl11>
                <MIXSII/>
              </v-flex>
              <v-flex xs12 sm12 lg11 xl11>
                <MIXSII/>
              </v-flex>
              <!-- <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <MIXCP/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <DNNN/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <MIXX/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <Poll/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <Rad/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2 xl6 offset-xl3>
                <Pivvv/>
              </v-flex> -->
            </v-flex>
          </v-layout>
        </v-container>

      </v-tab-item>

      <v-tab-item id='tab-2'>
        <h1>oooOooo</h1>
      </v-tab-item>

      <v-tab-item id='tab-3'>
        <h1>oooOooo</h1>
      </v-tab-item>

      <v-tab-item id='tab-4'>
        <h1>oooOooo</h1>
      </v-tab-item>

      <v-tab-item id='tab-5'>

        <v-container fluid>
          <v-layout row wrap >
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              <FISCV/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
              
            </v-flex>
          </v-layout>
        </v-container>

      </v-tab-item>

      <v-tab-item id='tab-6'>

        <Tablaa/>

      </v-tab-item>
    
    </v-tabs>

</template>

<script>
export default {
  layout: 'DBB'
}
</script>