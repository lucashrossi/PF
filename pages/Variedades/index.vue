<template>
  
  <v-tabs
    centered
    color="#542a25"
    dark

    height="40"
  >
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1">
      <v-icon left >check</v-icon>
  
       Catalogo
      
    </v-tab>

    <v-tab href="#tab-2">
      <v-icon left>schedule</v-icon>
      Candidatas
      
    </v-tab>

    <v-tab href="#tab-3">
      <v-icon left>location_city</v-icon>
      INASE
      
    </v-tab>

    <!-- <v-tab-item v-for="i in 3" :id="'tab-' + i" :key="i"> -->
    <v-tab-item id='tab-1'>

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

      <!-- <pdfshower pdfurl="Catalogo Buck 2018.pdf" scale=1.2 ></pdfshower> -->

    </v-tab-item>
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