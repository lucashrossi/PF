<template>

    <v-tabs centered color="#542a25" dark height="30">
      
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
            <v-flex xs12 md6>
              <h1>Original</h1>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <Polar/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <Radar/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <DNN/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <MIX/>
              </v-flex>
            </v-flex>

            <v-flex xs12 md6>
              <h1>Primera multiplicacion</h1>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <Poll/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <Rad/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <DNNN/>
              </v-flex>
              <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
                <MIXX/>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>

      </v-tab-item>

      <v-tab-item id='tab-2'>

        <h1>O</h1>

      </v-tab-item>
    
    </v-tabs>

</template>

<script>
export default {
  layout: 'DBB'
}
</script>