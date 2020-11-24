<template>

  <v-tabs centered color="#542a25" dark height="25">
      
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1" class="caption">
      <!-- <v-icon class="mr-1">note</v-icon> -->
      Santiago
    </v-tab>

    <v-tab href="#tab-2" class="caption">
      <!-- <v-icon class="mr-1">schedule</v-icon> -->
      Martin
    </v-tab>

    <v-tab-item id='tab-1'>
      <v-container fluid text-xs-center>
        <v-layout align-center justify-center row>
          <v-flex xs12 class="embed-container5">
            <!-- <embed class="embed-container-iframe5" src="https://public.tableau.com/views/Trabajos_15917207203860/CultivosHasyCostosha?:showVizHome=no&:embed=true"> -->
            <embed class="embed-container-iframe5" src="https://public.tableau.com/views/Trabajos_16039066395190/CultivosHasyCostosha?:showVizHome=no&:embed=true">
            <!-- <iframe class="embed-container-iframe5" frameborder="0" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Catalogo%20Buck%202018.pdf?alt=media&token=cf795851-99aa-4803-b82c-d03f0f65ae4b#page=3&zoom=100&view=fitH" ></iframe> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-tab-item>

    <v-tab-item id='tab-2'>
      <v-container fluid text-xs-center>
        <v-layout align-center justify-center row>
          <v-flex xs12 class="embed-container5">
            <!-- <embed class="embed-container-iframe5" src="https://public.tableau.com/views/Trabajos_15917207203860/CultivosHasyCostosha?:showVizHome=no&:embed=true"> -->
            <embed class="embed-container-iframe5" src="https://public.tableau.com/views/TrabajosMartin/CultivosHasyCostosha?:showVizHome=no&:embed=true">
            <!-- <iframe class="embed-container-iframe5" frameborder="0" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Catalogo%20Buck%202018.pdf?alt=media&token=cf795851-99aa-4803-b82c-d03f0f65ae4b#page=3&zoom=100&view=fitH" ></iframe> -->
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




<style>
.embed-container5 {
    position: relative;
    padding-bottom: 800px;
    height: 100%;
    overflow: hidden;
}
.embed-container-iframe5 {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    /* border: 5px solid green */
}

</style>