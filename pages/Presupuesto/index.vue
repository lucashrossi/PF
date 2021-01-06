<template>

    <v-tabs centered color="#542a25" dark height="25">
      
      <v-tabs-slider color="green"></v-tabs-slider>

      <v-tab href="#tab-1" class="caption">
        <!-- <v-icon class="mr-1">note</v-icon> -->
        Resumen
      </v-tab>

      <v-tab href="#tab-2" class="caption">
        <!-- <v-icon class="mr-1">note</v-icon> -->
        Rosana
      </v-tab>

      <!-- <v-tab-item v-for="i in 6" :id="'tab-' + i" :key="i"> -->
      <v-tab-item id='tab-1'>

        <v-container fluid grid-list-md text-xs-center>
           <v-layout row wrap>
            <!-- <v-spacer></v-spacer> -->
            <img src="/Tabla3.jpg" title="" alt="" class="responsive">
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
          <v-layout row wrap style="margin-top: 40px">
            <!-- <v-spacer></v-spacer> -->
            <img src="/Tabla4.jpg" title="" alt="" class="responsivee">
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
          <v-layout row wrap style="margin-top: 40px">
            <!-- <v-spacer></v-spacer> -->
            <img src="/Tabla1.jpg" title="" alt="" class="responsive">
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
          <v-layout row wrap style="margin-top: 40px">
            <!-- <v-spacer></v-spacer> -->
            <img src="/Tabla2.jpg" title="" alt="" class="responsivee">
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>

      </v-tab-item>


      <v-tab-item id='tab-2'>

        <v-container fluid text-xs-center>
        <v-layout align-center justify-center row>
          <v-flex xs12 class="embed-container5">
            <embed class="embed-container-iframe5" src="https://public.tableau.com/views/ControlPresupuestoRosana/DashboardResumen?:showVizHome=no&:embed=true">
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

<style>

.responsive {
  width: 100%;
  max-width: 1900px;
  height: 500px;
  height: auto;
  margin:auto;
}
.responsivee {
  width: 100%;
  max-width: 1000px;
  height: 500px;
  height: auto;
  margin:auto;
}
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