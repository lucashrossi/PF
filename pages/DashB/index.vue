<template>

  <div style="text-align:center">
  <!-- <v-tabs centered color="#542a25" dark height="25">
      
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1" class="caption">
      
      Principal
    </v-tab>

    <v-tab href="#tab-2" class="caption">
      
      RET
    </v-tab>


    <v-tab-item id='tab-1'> -->

      <v-container fluid grid-list-md>
        
        <v-layout row wrap>
          <!-- <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
            <v-card height="350px" style="border-radius: 10px; margin-top: 4px" class="elevation-20">
              <v-layout row>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>
                      <div>Original Pan, Fideo, Avena, Girasol</div>
                      <div>1º Multitplicacion</div>
                      <div>Costo Pan, Fideo, Avena, Girasol</div>
                      <div>Regalia Mult</div>
                      <div>Trigo</div>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                      <div>U$S 45, U$S 45, U$S 45, U$S 45</div>
                      <div>U$S 15, U$S 5, U$S 5, U$S 15</div>
                      <div>U$S 5, U$S 5, U$S 5, U$S 10</div>
                      <div>U$S 1, U$S 1, U$S 1, U$S 1</div>
                      <div>U$S 175</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              
              
              <v-layout row >
                <v-flex xs12 >
                  <v-card-title primary-title  justify-end>
                   
                    <v-flex xs6>
                        <div>Zafiro</div>
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                      <div>U$S 7</div>
                    </v-flex>
                    
                    <v-flex xs6>
                        <div>Camba, Claraz, Bellaco, Saeta, Sy120, SY211, SY330, SY015</div>
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                      <div>U$S 5</div>
                    </v-flex>
                    <v-flex xs6>
                        <div>SY100, SY110, SY200, SY300</div>
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                      <div>U$S 4</div>
                    </v-flex>
                    <v-flex xs6>
                        <div>Meteoro</div>
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                      <div>U$S 3.25</div>
                    </v-flex>
                    <v-flex xs6>
                        <div>AGP Fast, Pleno</div>
                    </v-flex>
                    <v-flex xs6 text-xs-right>
                      <div>$ 15kg trigo Camara º2(Quequen)</div>
                    </v-flex>


               
                  </v-card-title>
                </v-flex>
              </v-layout>
              
            </v-card>
          </v-flex>
          <v-spacer></v-spacer> -->

          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3 >
      
            <TablaD height="350px" style="border-radius: 10px" class="elevation-20" />
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3 >
            <TablaDD height="350px" style="border-radius: 10px" class="elevation-20" />
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3 >
            <DNND height="350px" style="border-radius: 10px" class="elevation-20" />
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3 >
            <DNNDD height="350px" style="border-radius: 10px" class="elevation-20" />
          </v-flex>
          
        </v-layout>
      </v-container>

      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
            <MIXCOD height="400px" style="border-radius: 10px" class="elevation-20"/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
            <MIXCODD height="400px" style="border-radius: 10px" class="elevation-20"/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
            <MIXCODDD height="400px" style="border-radius: 10px" class="elevation-20"/>
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
            <BUD height="400px" style="border-radius: 10px" class="elevation-20"/>
          </v-flex>
        </v-layout>
        
      </v-container>



      <v-container fluid grid-list-md >
        
        <v-layout row wrap>
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg6 >
            <v-carousel class="elevation-0" height="410px">
              <!-- <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item> -->
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                
              ><v-img contain :src="item.src"></v-img></v-carousel-item>
            </v-carousel>
          </v-flex>
          
          <v-spacer></v-spacer> 

          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>
           
            <a data-chrome="nofooter noborders noheader" class="twitter-timeline" data-height="400" href="https://twitter.com/buck_semillas?ref_src=twsrc%5Etfw">Tweets by buck_semillas</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <!-- <a class="twitter-timeline" data-height="350px" data-theme="dark" href="https://twitter.com/buck_semillas?ref_src=twsrc%5Etfw">Tweets by buck_semillas</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
            <!-- <a href="https://twitter.com/intent/tweet?screen_name=buck_semillas&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @buck_semillas</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
            
          </v-flex>
          <v-spacer></v-spacer> 
          <v-flex xs12 sm10 offset-sm1 md6 offset-md0 lg3>            
            <!-- <iframe src="http://semillasbuck.com.ar/noticias"  width="100%" height="400px" frameborder="0"></iframe> -->
            <embed src="https://semillasbuck.com.ar" width="100%" height="400px">
            <!-- <embed src="https://www.infobae.com/" width="100%" height="400px"> -->
            <!--  -->

          </v-flex>
        </v-layout>

      </v-container>

      <br>
      <h1 style="border-top: 5px solid green; border-bottom: 2px solid green">RET</h1>
      <v-container fluid text-xs-center>
        <v-layout align-center justify-center row >
          <v-flex xs12 class="embed-container2">
            <embed class="embed-container-iframe2" src="https://public.tableau.com/views/RET_2/Dashboard2?:showVizHome=no&:embed=true" width="1900" height="840" >
          </v-flex>
        </v-layout>
      </v-container>

      <br>
      <h1 style="border-top: 5px solid green; border-bottom: 2px solid green">Ensayos Internos</h1>
      <br>
      <v-container fluid text-xs-center>
        <v-layout align-center justify-center row >
          <v-flex xs12 class="embed-container1">
            <embed class="embed-container-iframe1" src="https://public.tableau.com/views/Enfermedades_1/Dashboard1?:showVizHome=no&:embed=true" width="1900" height="840" >
          </v-flex>
        </v-layout>
      </v-container>

      <!-- <v-btn elevation-25 @click="enviar">
        Cargar
      </v-btn> -->

      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 2" :key="`6${i}`" xs6>
            <v-card dark color="secondary">
              <v-card-text class="px-0">6</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 3" :key="`4${i}`" xs4>
            <v-card dark color="primary">
              <v-card-text class="px-0">4</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 4" :key="`3${i}`" xs3>
            <v-card dark color="secondary">
              <v-card-text class="px-0">3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 6" :key="`2${i}`" xs2>
            <v-card dark color="primary">
              <v-card-text class="px-0">2</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 12" :key="`1${i}`" xs1>
            <v-card dark color="secondary">
              <v-card-text class="px-0">1</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>




      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <v-card dark color="purple">
              <v-card-text>xs10 offset-xs1</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs7 offset-xs5 offset-md2 offset-lg5>
            <v-card dark color="secondary">
              <v-card-text>xs7 offset-(xs5 | md2 | lg5)</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5 md3>
            <v-card dark color="primary">
              <v-card-text>(xs12 | sm5 | md3)</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
            <v-card dark color="green">
              <v-card-text>(xs12 | sm5 | md5) offset-(xs0 | lg2)</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>




      <v-container fluid>
        <v-layout row>
          <v-flex xs6 order-lg2>
            <v-card dark tile flat color="error">
              <v-card-text>#1</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card dark tile flat color="red darken-4">
              <v-card-text>#2</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4 order-md2 order-xs1>
            <v-card dark tile flat color="red lighten-1">
              <v-card-text>#1</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4 order-md3 order-xs2>
            <v-card dark tile flat color="red lighten-2">
              <v-card-text>#2</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4 order-md1 order-xs3>
            <v-card dark tile flat color="red darken-1">
              <v-card-text>#3</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 order-md4 order-sm2>
            <v-card dark tile flat color="red darken-2">
              <v-card-text>#1</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 order-md3 order-sm1>
            <v-card dark tile flat color="deep-orange lighten-1">
              <v-card-text>#2</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 order-md2 order-sm4>
            <v-card dark tile flat color="deep-orange darken-3">
              <v-card-text>#3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3 order-md1 order-sm3>
            <v-card dark tile flat color="deep-orange">
              <v-card-text>#4</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>





      <v-container fluid grid-list-xl>
        <v-layout row justify-space-between>
          <v-flex xs2>
            <v-card dark color="primary">
              <v-card-text>one</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card dark color="secondary">
              <v-card-text>two</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card dark color="accent">
              <v-card-text>three</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row justify-space-around>
          <v-flex xs2>
            <v-card dark color="primary">
              <v-card-text>one</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card dark color="secondary">
              <v-card-text>two</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card dark color="accent">
              <v-card-text>three</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row justify-center>
          <v-flex xs2>
            <v-card dark color="primary">
              <v-card-text>one</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card dark color="secondary">
              <v-card-text>two</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card dark color="accent">
              <v-card-text>three</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>




      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md4>
            <v-card color="purple" dark>
              <v-card-title primary class="title">Lorem</v-card-title>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card color="indigo" dark>
                  <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-layout row wrap>
                  <v-flex
                    v-for="n in 2"
                    :key="n"
                    d-flex
                    xs12
                  >
                    <v-card
                      color="red lighten-2"
                      dark
                    >
                      <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm6 md2 child-flex>
            <v-card color="green lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3>
            <v-card color="blue lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>




      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex d-flex xs12 order-xs5>
            <v-layout column>
              <v-flex d-flex>
                <v-card color="blue-grey" dark tile flat>
                  <v-card-text>{{ lorem }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-card color="brown" dark tile flat>
                  <v-card-text>{{ lorem }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm7>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card color="indigo lighten-2" dark tile flat>
                  <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-layout row>
                  <v-flex
                    v-for="n in 2"
                    :key="n"
                    d-flex
                  >
                    <v-card
                      color="amber lighten-2"
                      tile
                      flat
                    >
                      <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm2 child-flex>
            <v-card color="orange lighten-2" tile flat>
              <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm3>
            <v-card color="red lighten-2" dark tile flat>
              <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    <!-- </v-tab-item>


    <v-tab-item id='tab-2'>
      <PivotI/>
      <embed src="https://public.tableau.com/views/RET_2/Dashboard2?:showVizHome=no&:embed=true" width="1900" height="840" >

    </v-tab-item>
    
  </v-tabs> -->

      

  </div>
</template>


<script>


export default {

  
  layout: 'DBB',
  data: () => ({
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/CatCarVar.jpg?alt=media&token=a40f975c-0e0e-4638-8f27-fc9c29348b6c'
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/CatCarVarAv.jpg?alt=media&token=a876b11d-b1d2-4b11-a63c-27ee0c81cd77'
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/IyIIIyVN.jpg?alt=media&token=4381e391-c0d0-459f-98fa-a4bb94620676'
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/IINyIVyVS.jpg?alt=media&token=dd5599f9-89d6-4b74-aef1-f8a7ddf09676'
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/DenT.jpg?alt=media&token=a0020fca-846c-4ec1-b6bf-b61d8f0a7689'
        }
      ],
      // mensaje:[
        // mensaje:
              // {
              //   value: false,
              //   name: 25616,
              //   cantidad: 1133,
              //   precio: 61.56,
              //   factura: 'A001200004761',
              //   detalle: 'BUCKSY200',
              //   cta: 4036,
              //   RS:'GONZALEZ LISANDRO Y L. HNOS SRL',
              //   importe: 69747.48
              // },
              // {
              //   value: false,
              //   name: 25617,
              //   cantidad: 720,
              //   precio: 77.35,
              //   factura: 'A001200004762',
              //   detalle: 'BUCKSY200',
              //   cta: 6275,
              //   RS:'FIRMAN ALDO HECTOR',
              //   importe: 55692
              // },
              // {
              //   value: false,
              //   name: 25618,
              //   cantidad: 113,
              //   precio: 52,
              //   factura: 'A001200004763',
              //   detalle: 'BUCKMETEORO',
              //   cta: 4119,
              //   RS:'ADMINISTRACION BRIONES S.A.',
              //   importe: 5876
              // },
              // {
              //   value: false,
              //   name: 25700,
              //   cantidad: 60,
              //   precio: 84,
              //   factura: 'A001200004859',
              //   detalle: 'BUCKSY300',
              //   cta: 6288,
              //   RS:'CARENA GERMAN DIEGO',
              //   importe: 5040
              // },
              // ],
              
      
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  ,
  // methods: {
  //   enviar(mensaje){
      
  //     this.$axios.post('https://pfdbb-dc48b.firebaseio.com/postss.json',this.mensaje)
  //       .then(result => console.log(result))
  //       .catch(e => console.log(e))
        
  //       console.log(this.mensaje)
  //       console.log(process.env.BASE_URL)
        
  //   }
    
  // },
  created() {
      
      this.$store.dispatch('nSIt')
      console.log('dispatch nSIt')
  }
}
</script>

<style scoped>

/* .twitter-timeline {
  elevation: 20
} */


.embed-container1 {
    position: relative;
    padding-bottom: 800px;
    height: 100%;
    overflow: hidden;
}
.embed-container-iframe1 {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    /* border: 5px solid green */
}

.embed-container2 {
    position: relative;
    padding-bottom: 800px;
    height: 100%;
    overflow: hidden;
}
.embed-container-iframe2 {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    /* border: 5px solid green */
}

</style>
