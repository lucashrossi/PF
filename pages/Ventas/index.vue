<template>
  <v-tabs
    centered
    color="#542a25"
    dark
    height="30"
    
  >
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
    <v-tab-item id='tab-1' grow="true">

      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md5 class="text-xs-center">
            <BU/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md5 class="text-xs-center">
            <MIX/>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md5 class="text-xs-center">
            <DEJ/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 md5 class="text-xs-center">
            <Radar/>
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