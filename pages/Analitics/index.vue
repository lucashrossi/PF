<template>
  
  <v-tabs centered color="#542a25" dark height="30">
      
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
  

      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-layout  justify-center>
       
        <v-btn elevation-25 href='http://semillasbuck.com.ar/' target="_blank">
          <v-icon left>link</v-icon>
          Pagina
        </v-btn>
        
      </v-layout>



      <v-layout v-scroll="onScroll" column align-center justify-center>
        <v-subheader  >Offset Top</v-subheader>
        {{ offsetTop }}
      </v-layout>


      </v-parallax>

      <v-layout
        v-touch="{
          left: () => swipe('Left'),
          right: () => swipe('Right'),
          up: () => swipe('Up'),
          down: () => swipe('Down')
        }"
        column
        align-center
        justify-center
        style="height: 500px"
        class="grey lighten-2"
      >
        <v-subheader>Swipe Direction</v-subheader>
        {{ swipeDirection }}
      </v-layout>

      





      


      <v-layout>
        
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      
      </v-layout>
      
    </v-tab-item>

    <v-tab-item id='tab-2'>

      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
            <v-btn
              absolute
              color="orange"
              class="white--text"
              fab
              large
              right
              top
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
            <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
            <div class="font-weight-light title mb-2">
              Our Vintage kitchen utensils delight any chef.<br>
              Made of bamboo by hand
            </div>
          </v-card-text>
        </v-card>
      </v-hover>








      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>





      <v-layout  justify-center>
        <v-dialog
          v-model="dialog"
          width="500"
        > 
          <v-btn
            slot="activator"
            color="red lighten-2"
            dark
          >
            Click Me
          </v-btn>
          

          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

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