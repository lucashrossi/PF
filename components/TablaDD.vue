<template>
    
    <v-container>

      <v-card class="elevation-0" style="width: 100%" >
        <v-card-title style="padding: 0px">
            <!-- <h1>Bolsas 2018:</h1>
            <v-spacer></v-spacer> -->
            <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field> -->
            <v-text-field label="Search" prepend-icon="search" style="padding-top: 0px;" v-model="searchh" single-line hide-details flat solo></v-text-field>
        </v-card-title>

        <!-- <v-data-table hide-headers hide-actions style="width: 100%; height: 50px" :headers="headerss" :items="dessertss" :search="search" :rows-per-page="1" :rows-per-page-items="[1, 200]"> -->
        <v-data-table style="width: 100%; height: 100px" must-sort hide-actions :headers="headers" :items="desserts" :search="searchh" :pagination.sync="paginationn" >
          


            <template  slot="items" slot-scope="props">
              <!-- <tr style="height: 10px; padding: 0 5px"> -->
                <!-- <th style="padding: 0 5px"> -->
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-left">{{ props.item.name }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.ingeniero }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.localidad }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.distib }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.remito }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.bellaco }}</td>
                  <!-- <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.destello }}</td> -->
                  
                <!-- </th> -->
              <!-- </tr> -->
            </template>
            <!-- <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert> -->
        </v-data-table>
      </v-card>






      <br>

        
        
        

      <v-card class="elevation-0" style="width: 100%" >
        <v-card-title style="padding: 0px">
            <!-- <h1>Bolsas 2018:</h1>
            <v-spacer></v-spacer> -->
            <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field> -->
            <v-text-field label="Search" prepend-icon="search" style="padding-top: 0px;" v-model="search" single-line hide-details flat solo></v-text-field>
        </v-card-title>

        <!-- <v-data-table hide-headers hide-actions style="width: 100%; height: 50px" :headers="headerss" :items="dessertss" :search="search" :rows-per-page="1" :rows-per-page-items="[1, 200]"> -->
        <v-data-table style="width: 100%; height: 120px" must-sort hide-actions :headers="headerss" :items="dessertss" :search="search" :pagination.sync="pagination" >
          


            <template  slot="items" slot-scope="props">
              <!-- <tr style="height: 10px; padding: 0 5px"> -->
                <!-- <th style="padding: 0 5px"> -->
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-left">{{ props.item.name }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.ingeniero }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.localidad }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.distib }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.remito }}</td>
                  <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.bellaco }}</td>
                  <!-- <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-center">{{ props.item.destello }}</td> -->
                  
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
        
        paginationn: {
            rowsPerPage: 4,
            totalItems: 4,
           
        },
       
        searchh: '',
        headers: [
          { text: 'Variedad', value: 'name', align: 'left', width: '1', sortable: true },
          { text: 'Original', value: 'ingeniero', align: 'center', width: '1', sortable: true, },
          { text: 'Primera', value: 'localidad', align: 'center', width: '1', sortable: true, },
          { text: 'Reg C', value: 'distib', align: 'center', width: '1', sortable: true, },
          { text: 'Reg E', value: 'remito', align: 'center', width: '1', sortable: true, },
          { text: 'Costo', value: 'bellaco', align: 'center', width: '1', sortable: true, },
          // { text: 'CostoT', value: 'destello', align: 'center', width: '1', sortable: true, },
         
        ],
        desserts: [
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "15",
                "distib": "1",
                "remito": "7",
                "bellaco": "5",
                // "destello": "35",
                
            },
            
                      
        ],
        
        pagination: {
            rowsPerPage: 5,
            totalItems: 5,
           
        },
       
        search: '',
        headerss: [
          { text: 'Grafico', value: 'name', align: 'left', width: '1', sortable: true },
          { text: 'Actualizacion', value: 'ingeniero', align: 'center', width: '1', sortable: true, },
          { text: 'Seccion', value: 'localidad', align: 'center', width: '1', sortable: true, },
          { text: 'Tab', value: 'distib', align: 'center', width: '1', sortable: true, },
          { text: 'Persona', value: 'remito', align: 'center', width: '1', sortable: true, },
          { text: 'RC', value: 'bellaco', align: 'center', width: '1', sortable: true, },
        //   { text: 'CostoT', value: 'destello', align: 'center', width: '1', sortable: false, },
         
        ],
        dessertss: [
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
            },
            {
                "value": "false",
                "name": "1",
                "ingeniero": "22/11/2018",
                "localidad": "Ventas",
                "distib": "Pan",
                "remito": "",
                "bellaco": "R1C1",
                                
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
    
    // desserts: {
      
    //   get () {
    //     return this.$store.state.loadedPosts
    //     console.log('computed get loadedPosts')
    //   },
    // },
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


