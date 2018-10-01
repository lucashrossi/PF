<template>
  <div>
    <br>
    <br>
    <v-container>
    <v-layout row wrap>
      <v-flex xs5>
        <FISC/>
      </v-flex>
      <v-spacer></v-spacer> 
      <v-flex xs5> <!--class="text-xs-center">-->
        <PBF/>
      </v-flex>
      
      
    </v-layout>
    
    <br>
    <br>
    <br>
    <br>

    <v-layout row wrap>
      <v-flex xs5> <!--class="text-xs-center">-->
        <Radar/>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>



<script>
export default {
  layout: 'DBB'
}
</script>