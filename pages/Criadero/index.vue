<template>
  
  <v-tabs centered color="#542a25" dark height="30">
    
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1" class="caption">
      <v-icon class="mr-1">note</v-icon>
       Catalogo
    </v-tab>

    <v-tab href="#tab-2" class="caption">
      <v-icon class="mr-1">schedule</v-icon>
      Precomerciales
    </v-tab>

    <v-tab href="#tab-3" class="caption">
      <v-icon class="mr-1">location_city</v-icon>
      INASE
    </v-tab>

    <v-tab href="#tab-4" class="caption">
      <v-icon class="mr-1">map</v-icon>
      Campo Experimental
    </v-tab>

    <v-tab href="#tab-5" class="caption">
      <v-icon class="mr-1">grid_on</v-icon>
      Ensayos
    </v-tab>

    <v-tab href="#tab-6" class="caption">
      <v-icon class="mr-1">table_chart</v-icon>
      Data
    </v-tab>

    <!-- <v-tab-item v-for="i in 5" :id="'tab-' + i" :key="i"> -->
    <v-tab-item id='tab-6'>
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