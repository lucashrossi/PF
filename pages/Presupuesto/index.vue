<template>

    <v-tabs centered color="#542a25" dark height="25">
      
      <v-tabs-slider color="green"></v-tabs-slider>

      <v-tab href="#tab-1" class="caption">
        <!-- <v-icon class="mr-1">note</v-icon> -->
        Resumen
      </v-tab>

      <!-- <v-tab-item v-for="i in 6" :id="'tab-' + i" :key="i"> -->
      <v-tab-item id='tab-1'>

        <v-container fluid grid-list-md text-xs-center>
          <v-layout row wrap>
            <h1>sdfsd</h1>
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