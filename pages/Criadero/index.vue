<template>
  
  <v-tabs centered color="#542a25" dark height="25">
    
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1" class="caption">
      <!-- <v-icon class="mr-1">note</v-icon> -->
       Catalogo
    </v-tab>

    <v-tab href="#tab-2" class="caption">
      <!-- <v-icon class="mr-1">schedule</v-icon> -->
      Precomerciales
    </v-tab>

    <v-tab href="#tab-3" class="caption">
      <!-- <v-icon class="mr-1">location_city</v-icon> -->
      INASE
    </v-tab>

    <v-tab href="#tab-4" class="caption">
      <!-- <v-icon class="mr-1">map</v-icon> -->
      Campo Experimental
    </v-tab>

    <v-tab href="#tab-5" class="caption">
      <!-- <v-icon class="mr-1">grid_on</v-icon> -->
      Ensayos
    </v-tab>

    <v-tab href="#tab-6" class="caption">
      <!-- <v-icon class="mr-1">grid_on</v-icon> -->
      Siembra
    </v-tab>

    <v-tab href="#tab-7" class="caption">
      <!-- <v-icon class="mr-1">table_chart</v-icon> -->
      Data
    </v-tab>

     <v-tab-item id='tab-1'>
        <h1>oooOooo</h1>
      </v-tab-item>

      <v-tab-item id='tab-2'>
        <!-- <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12 class="embed-container">
              <iframe class="embed-container-iframe" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Multiplicaciones%202018.htm?alt=media&token=2e2ab46c-2cf4-4fcc-b34f-dcd2f62f265b"></iframe> -->
              <br>
              <!-- <Mult18 style="border: 5px solid green"/> -->
              <Mult18 />
            <!-- </v-flex>
          </v-layout>
        </v-container> -->
        
      </v-tab-item>

      <v-tab-item id='tab-3'>
        <h1>oooOooo</h1>
      </v-tab-item>

      <v-tab-item id='tab-4'>
        <!-- <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12 class="embed-container"> -->
            <!-- <v-flex xs12 style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;" > -->
              <iframe  height="1080px" width="1920px" src="https://3dwarehouse.sketchup.com/embed.html?mid=937b5abadd578aafe7b8ba67db451f0d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen ></iframe>
              <!-- <iframe style="border: 5px solid green; position: absolute; top:0; left: 0%; width: 75%; height: 75%;" src="https://3dwarehouse.sketchup.com/embed.html?mid=937b5abadd578aafe7b8ba67db451f0d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen ></iframe> -->
            <!-- </v-flex>
          </v-layout>
        </v-container> -->

      </v-tab-item>

      <v-tab-item id='tab-5'>
         <v-container fluid text-xs-center >
          <!-- <v-layout align-center justify-center row > -->
            <!-- <v-flex xs12 class="embed-container"> -->
              <br>
              <iframe  height="2600px" width="1735px" frameborder="0" scrolling="no"  src="https://onedrive.live.com/embed?resid=C359680E9C8B1157%21801&authkey=%21AIziUJvtS7yOv4c&em=2&Item='Hoja1'!A1%3AM102&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
              <!-- <iframe class="embed-container-iframe" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Ensayos%202018.htm?alt=media&token=896f7863-3694-4fd3-b34b-40427bc12613"></iframe> -->
            <!-- </v-flex> -->
          <!-- </v-layout> -->
         </v-container>
      </v-tab-item>

    <!-- <v-tab-item v-for="i in 5" :id="'tab-' + i" :key="i"> -->
    <v-tab-item id='tab-7'>
      <PivotI/>
    </v-tab-item>
      <!-- <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card> -->

      <!-- <pdf v-for="i in numPages" :key="i" :src="src" :page="i" ></pdf> -->

      <!-- <pdf src="Catalogo Buck 2018.pdf" :page="1" ></pdf>
      <pdf src="Catalogo Buck 2018.pdf" :page="2" ></pdf>
      <pdf src="Catalogo Buck 2018.pdf" :page="3" ></pdf>
      <pdf src="Catalogo Buck 2018.pdf" :page="4" ></pdf> -->

      <!-- <vue-pdf-viewer height="500px" url="Catalogo Buck 2018.pdf"></vue-pdf-viewer> -->
    

      <!-- <pdf src="./static/Catalogo Buck 2018.pdf" :page="3" ></pdf> -->
      <!-- <pdf src="Catalogo Buck 2018.pdf"></pdf> -->
      
      <!-- <v-tab-item id='tab-1'>
        <pdf src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Catalogo%20Buck%202018.pdf?alt=media&token=cf795851-99aa-4803-b82c-d03f0f65ae4b"></pdf>
      </v-tab-item> -->
      <!-- <pdfshower pdfurl="Catalogo Buck 2018.pdf" scale=1.2 ></pdfshower> -->

    <!-- </v-tab-item> -->
  </v-tabs>
 
</template>


<script>
// import pdf from 'vue-pdf'
// var loadingTask = pdf.createLoadingTask('Catalogo Buck 2018.pdf')

export default {
  // components: {
  //   pdf
  // },
  layout: 'DBB',
  // data() {
  //       return {
  //           src: loadingTask,
  //           numPages: undefined,
  //       }
  //   },
  //   mounted() {

  //       this.src.then(pdf => {

  //           this.numPages = pdf.numPages
  //       })
  //   },

}
</script>

<style>
.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}
.embed-container-iframe {
    position: absolute;
    top:0;
    left: 0%;
    width: 100%;
    height: 100%;
    border: 5px solid green
}

</style>