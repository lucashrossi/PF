<template>
    
    <v-container>

        <v-card-title primary-title  justify-end>
                   
            <v-flex xs6>
                <div>Dolar</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div>$ 38</div>
            </v-flex>
            
            <v-flex xs6>
                <div>Trigo</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div>U$S 200</div>
            </v-flex>

            <v-flex xs6>
                <div>Candeal</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div>U$S 200</div>
            </v-flex>
            
            <v-flex xs6>
                <div>Avena</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div>U$S 190</div>
            </v-flex>

            <v-flex xs6>
                <div>Girasol</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div>U$S 230</div>
            </v-flex>

            <!-- <iframe width="500" height="300" style="border:none;" src="http://www.bcp.org.ar/informes.asp?id_inf=24/embed/183032105700513423896"></iframe> -->

    
        </v-card-title>

       

        <v-card class="elevation-0" style="width: 100%" >
          <v-card-title style="padding: 0px">
              <!-- <h1>Bolsas 2018:</h1>
              <v-spacer></v-spacer> -->
              <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field> -->
              <v-text-field label="Search" prepend-icon="search" style="padding-top: 0px;" v-model="search" single-line hide-details flat solo></v-text-field>
          </v-card-title>

          <!-- <v-data-table hide-headers hide-actions style="width: 100%; height: 50px" :headers="headerss" :items="dessertss" :search="search" :rows-per-page="1" :rows-per-page-items="[1, 200]"> -->
          <v-data-table style="width: 100%; height: 80px" must-sort hide-actions :headers="headerss" :items="dessertss" :search="search" :pagination.sync="pagination" >
            


              <template  slot="items" slot-scope="props">
                <!-- <tr style="height: 10px; padding: 0 5px"> -->
                  <!-- <th style="padding: 0 5px"> -->
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-left">{{ props.item.name }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.ingeniero }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.localidad }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.distib }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.remito }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.bellaco }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.destello }}</td>
                    
                  <!-- </th> -->
                <!-- </tr> -->
              </template>
              <!-- <v-alert slot="no-results" :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
              </v-alert> -->
          </v-data-table>
        </v-card>

    </v-container>
</template>

<script>
export default { 

  data: () => {
      return {
        
        
        
        pagination: {
            rowsPerPage: 2,
            totalItems: 2,
           
        },
       
        search: '',
        headerss: [
          { text: 'Variedad', value: 'name', align: 'left', width: '1', sortable: false },
          { text: 'Original', value: 'ingeniero', align: 'center', width: '1', sortable: false, },
          { text: 'Primera', value: 'localidad', align: 'center', width: '1', sortable: false, },
          { text: 'Regalia C', value: 'distib', align: 'center', width: '1', sortable: false, },
          { text: 'Regalia E', value: 'remito', align: 'center', width: '1', sortable: false, },
          { text: 'Costo', value: 'bellaco', align: 'center', width: '1', sortable: false, },
          { text: 'CostoT', value: 'destello', align: 'center', width: '1', sortable: false, },
         
        ],
        dessertss: [
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                "destello": "35",
                
            },
            
                      
        ]
      }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) 
      console.log(this.pagination.totalItems)
      console.log(this.pagination.rowsPerPage)
      return 0
      console.log(this.pagination.totalItems)
      console.log(this.pagination.rowsPerPage)
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    },
    
    desserts: {
      
      get () {
        return this.$store.state.loadedPosts
        console.log('computed get loadedPosts')
      },
    },
    // desserts() {
    //   return this.$store.getters.desserts
    //   console.log('computed desserts')
    // }
  },
   watch: {
    initialDesserts () {
      this.$nextTick(() => {
        this.pagination.totalItems = this.initialDessertss.length
        console.log(this.pagination.totalItems)
        console.log(this.pagination.rowsPerPage)
      })
    }
  },
  methods: {
    addItems(){
      this.initialDesserts = this.dessertss.slice()
      console.log(this.pagination.totalItems)
      console.log(this.pagination.rowsPerPage)
    },
    appendItems(){
      this.initialDesserts = this.initialDesserts.concat(this.dessertss)
      console.log(this.pagination.totalItems)
      console.log(this.pagination.rowsPerPage)
    }
  },
  created() {
    console.log('created Tabla')
    // desserts() {
    //   return this.$store.getters.desserts
    //   console.log('created desserts')
    // }
  },
}
</script>




<style scoped>



.v-input {
    
    font-size: 14px;
  
}

.v-label {
    font-size: 14px;
   
}

.v-icon {
 
    font-size: 20px;
}

</style>


<style>

table.v-table thead tr {
    height: 5px;
    
}

table.v-table tbody td:first-child, table.v-table thead th:first-child, table.v-table tbody th:first-child {
    padding: 0 5px;
}

table.v-table tbody td:not(:nth-child(1)), table.v-table thead th:not(:nth-child(1)) {
    padding: 0 5px;
}

table.v-table tbody td {
    font-size: 10px;
    height: 15px;
}

.v-text-field input {

    
    padding-top: 5px;
    padding-right: 0px;
    padding-bottom: 5px;
    padding-left: 0px;
}

.v-text-field.v-text-field--solo .v-input__control {
    min-height: 20px;
    padding: 0;
}

.v-text-field.v-text-field--solo .v-input__prepend-outer, .v-text-field.v-text-field--solo .v-input__append-outer {
    margin-top: 0px;
}

</style>

