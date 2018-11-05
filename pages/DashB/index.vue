<template>
  <div>

      <v-btn elevation-25 @click="enviar">
        <!-- <v-icon left>link</v-icon> -->
        Cargar
      </v-btn>

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



  </div>
</template>


<script>
export default {
  layout: 'DBB',
  data: () => ({
      // mensaje:[
        mensaje:
              {
                value: false,
                name: 25616,
                cantidad: 1133,
                precio: 61.56,
                factura: 'A001200004761',
                detalle: 'BUCKSY200',
                cta: 4036,
                RS:'GONZALEZ LISANDRO Y L. HNOS SRL',
                importe: 69747.48
              },
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
              // }
              // ],
              
      
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  ,
  methods: {
    enviar(mensaje){
      // this.$axios.post(process.env.BASE_URL + '/posts.json',this.mensaje)
      this.$axios.post('https://pfdbb-dc48b.firebaseio.com/posts.json',this.mensaje)
        .then(result => console.log(result))
        .catch(e => console.log(e))
        
        console.log(this.mensaje)
        console.log(process.env.BASE_URL)
        // console.log(this.$store.state.loadedPosts.filter(loadedPost => loadedPost.men === '7918'))
    }
    
  }
}
</script>
