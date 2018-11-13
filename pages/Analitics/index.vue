<template>
  
  <v-tabs centered color="#542a25" dark height="25">
      
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1" class="caption">
      <!-- <v-icon class="mr-1">note</v-icon> -->
      Pagina
    </v-tab>

    <v-tab href="#tab-2" class="caption">
      <!-- <v-icon class="mr-1">schedule</v-icon> -->
      Newsletter
    </v-tab>

    <v-tab-item id='tab-1'>
      <v-container fluid text-xs-center >
        <v-layout align-center justify-center row >
          <v-flex xs12>
            <v-img contain src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Estadist.jpg?alt=media&token=d1ea010b-699e-4aed-a29c-51d382f1edb7"></v-img>
          </v-flex>
          
        </v-layout>
        <v-layout align-center justify-center row >
          <v-flex xs8>
            <v-img contain src="https://firebasestorage.googleapis.com/v0/b/pfdbb-dc48b.appspot.com/o/Estadi.jpg?alt=media&token=2a15f493-5ae4-4741-9c0b-0f0aa2601c68"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-tab-item>

    <v-tab-item id='tab-2'>

      

    </v-tab-item>
    
  </v-tabs>

</template>

<script>
export default {
  layout: 'DBB',


  data: () => ({
      swipeDirection: 'None',
      offsetTop: 0,
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
      dialog: false,
      
    }),

    methods: {
      swipe (direction) {
        this.swipeDirection = direction
      },
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    }
}
</script>