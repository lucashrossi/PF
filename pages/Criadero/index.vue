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
      <!-- <v-icon class="mr-1">table_chart</v-icon> -->
      Data
    </v-tab>

    <v-tab href="#tab-7" class="caption">
      <!-- <v-icon class="mr-1">table_chart</v-icon> -->
      Fotos
    </v-tab>

     <v-tab-item id='tab-1'>
        <h1>oooOooo</h1>
      </v-tab-item>

      <v-tab-item id='tab-2'>
        <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12 class="embed-container1">
              <iframe class="embed-container-iframe1" height="1400px" frameborder="0" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Multiplicaciones%202018.htm?alt=media&token=2e2ab46c-2cf4-4fcc-b34f-dcd2f62f265b"></iframe>
              <!-- <br> -->
              <!-- <Mult18 style="border: 5px solid green"/> -->
              <!-- <Mult18 /> -->
            </v-flex>
          </v-layout>
        </v-container>
        
      </v-tab-item>

      <v-tab-item id='tab-3'>
        <h1>oooOooo</h1>
      </v-tab-item>

      <v-tab-item id='tab-4'>
        <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12 class="embed-container2">
            <!-- <v-flex xs12 style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;" > -->
              <!-- <iframe class="embed-container-iframe2" height="1080px" src="https://3dwarehouse.sketchup.com/embed.html?mid=937b5abadd578aafe7b8ba67db451f0d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen ></iframe> -->
              <iframe class="embed-container-iframe2" height="1080px" src="https://3dwarehouse.sketchup.com/embed.html?mid=a44695e9-8489-494f-af40-be47f02ae74e" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen ></iframe>
              
              <!-- <iframe style="border: 5px solid green; position: absolute; top:0; left: 0%; width: 75%; height: 75%;" src="https://3dwarehouse.sketchup.com/embed.html?mid=937b5abadd578aafe7b8ba67db451f0d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen ></iframe> -->
            </v-flex>
          </v-layout>
        </v-container>

      </v-tab-item>

      <v-tab-item id='tab-5'>
         <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12 class="embed-container3">
              <br>
              <iframe class="embed-container-iframe3" height="2600px" frameborder="0" src="https://onedrive.live.com/embed?resid=C359680E9C8B1157%21803&authkey=%21AK07DXL1cxBuegc&em=2&Item='Hoja1'!A1%3AM102&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
              <!-- <iframe class="embed-container-iframe" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Ensayos%202018.htm?alt=media&token=896f7863-3694-4fd3-b34b-40427bc12613"></iframe> -->
            </v-flex>
          </v-layout>
         </v-container>
      </v-tab-item>

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



    <!-- <v-tab-item id='tab-8' style="background-size: contain; background-position: left top; background-repeat: repeat; background-attachment: fixed; background-image: url(https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/17.jpg?alt=media&token=5e587594-9a85-4299-a0d2-4385d0d75975)"> -->
    <v-tab-item id='tab-7' style="background-size: cover; background-repeat: no-repeat;  background-attachment: fixed; background-image: url(https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/17b.jpg?alt=media&token=13db82f9-27f1-4421-9081-d6afd5c7e202)">
    <!-- <v-tab-item id='tab-8'> -->
        <v-parallax height="1000" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/17c.jpg?alt=media&token=c4c46960-7a3d-4da6-a0cc-0719fefc5bf7">
          
      
          <!-- <v-parallax height="800" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/17.jpg?alt=media&token=5e587594-9a85-4299-a0d2-4385d0d75975"> -->

          
          
            <v-parallax height="320" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/17.jpg?alt=media&token=dddeb8f5-13cb-4310-8ec5-6cb1d5927a82">

    

            </v-parallax>

          <!-- </v-parallax> -->
        </v-parallax>

        <!-- <br>
        <v-parallax height="450" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/17.jpg?alt=media&token=5e587594-9a85-4299-a0d2-4385d0d75975">

        </v-parallax> -->

        
     
        <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12>
              <v-parallax height="700" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/10.jpg?alt=media&token=0ec486f2-8fc9-4abe-a67d-f9c41ff53426">

              </v-parallax>
            </v-flex>
          </v-layout>
         </v-container>

        <v-parallax  src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/12.jpg?alt=media&token=5b0525a1-206c-4fc6-bb68-6f7ac9a499fd">

        </v-parallax>

        <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12>
              <v-parallax height="700" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/14.jpg?alt=media&token=284eb96b-fbed-4e27-a21a-5e9afdc2b8cd">

              </v-parallax>
            </v-flex>
          </v-layout>
         </v-container>
       
        <v-parallax  src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/15.jpg?alt=media&token=82cee1e8-9807-4b42-9acd-d5e9804a96d9">

        </v-parallax>

        <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12>
              <v-parallax height="700" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/4.jpg?alt=media&token=bd585527-5a14-4f92-a9af-07902e18bc48">

              </v-parallax>
            </v-flex>
          </v-layout>
         </v-container>

        <v-parallax  src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/11.jpg?alt=media&token=6c0d3a06-331f-4884-8245-c94ad8749104">

        </v-parallax>

        <v-container fluid text-xs-center >
          <v-layout align-center justify-center row >
            <v-flex xs12>
              <v-parallax height="700" src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/16.jpg?alt=media&token=4ba980fc-c16e-407f-9de2-74afc41dfabb">

              </v-parallax>
            </v-flex>
          </v-layout>
         </v-container>

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

<style>

.embed-container1 {
    position: relative;
    padding-bottom: 1400px;
    height: 100%;
    overflow: hidden;
}
.embed-container-iframe1 {
    position: absolute;
    top:0;
    left: 0%;
    width: 100%;
    height: 100%;
    /* border: 5px solid green */
}

.embed-container2 {
    position: relative;
    padding-bottom: 1080px;
    height: 100%;
    overflow: hidden;
}
.embed-container-iframe2 {
    position: absolute;
    top:0;
    left: 0%;
    width: 100%;
    height: 100%;
    /* border: 5px solid green */
}

.embed-container3 {
    position: relative;
    padding-bottom: 2600px;
    height: 100%;
    overflow: hidden;
}
.embed-container-iframe3 {
    position: absolute;
    top:0;
    left: 3%;
    width: 93.6%;
    height: 100%;
    /* border: 5px solid green */
}

</style>