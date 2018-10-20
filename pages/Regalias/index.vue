<template>

    <v-tabs centered color="#542a25" dark height="30">
      
      <v-tabs-slider color="green"></v-tabs-slider>

      <v-tab href="#tab-1" class="caption">
        <!-- <v-icon class="mr-1">note</v-icon> -->
        Extendidas
      </v-tab>

      <v-tab href="#tab-2" class="caption">
        <!-- <v-icon class="mr-1">schedule</v-icon> -->
        Auditorias
      </v-tab>

      <v-tab-item id='tab-1'>

        <v-container fluid>
        
          <v-layout row wrap>
            <v-flex xs12 md3 >
              <NC/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 md3 >
              <NCC/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 md3>
              <DN/>
            </v-flex>
          </v-layout>
          
          <v-layout row wrap>
            <v-flex xs12 md3>
              <Pii/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 md3>
              <HOR/>
            </v-flex>
            <v-spacer></v-spacer> 
            <v-flex xs12 md3>
              
            </v-flex>
          </v-layout>

        </v-container>

      </v-tab-item>

      <v-tab-item id='tab-2'>

        <v-layout justify-center row>
          <v-flex xs11>
            <!-- <v-expansion-panel>
              <v-expansion-panel-content>
                <div slot="header" style="text-align: center">Auditorias</div>
                <v-card>
                  <v-card-text></v-card-text> -->
                  <Tabla/>
                <!-- </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel> -->
          </v-flex>
        </v-layout>

      </v-tab-item>
    
    </v-tabs>

</template>

<script>
export default {
  layout: 'DBB',

  
}
</script>

