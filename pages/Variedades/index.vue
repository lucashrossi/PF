<template>
  <v-tabs
    centered
    color="#542a25"
    dark
    
  
    height="40"
  >
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab prev-icon href="#tab-1">
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

    <v-tab-item
      v-for="i in 3"
      :id="'tab-' + i"
      :key="i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>


<script>
export default {
  layout: 'DBB'
}
</script>