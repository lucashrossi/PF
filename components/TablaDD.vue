<template>
    
    <v-container>
        <!-- <p>{{ name }}</p> -->
        <v-data-table  hide-actions :headers="headers" :items="desserts"  style="width: 100%">
        <!-- <v-data-table :headers="headers" class="elevation-1" style="width: 100%"> -->

            <template slot="items" slot-scope="props">
                <td style="height: 20px; font-size: 11px">{{ props.item.name }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.cantidad }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.precio }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.factura }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.detalle }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.cta }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.RS }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.importe }}</td>
            </template>
           
        </v-data-table>
        
        

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
        
        headers: [
          { text: 'Cultivo', value: 'name', align: 'left', width: '1'},
          { text: 'Precio', value: 'precio', align: 'right', width: '1' },
          { text: 'Bolsas T', value: 'cantidad', align: 'right', width: '1' },
          { text: 'U$S T', value: 'factura', align: 'right', width: '1' },
          { text: 'U$S R', value: 'detalle', align: 'right', width: '1' },
          { text: 'CTA', value: 'cta', align: 'right', width: '1' },
          { text: 'Razon Social', value: 'RS', align: 'right', width: '1' },
          { text: 'Importe', value: 'importe', align: 'right', width: '1' },
        ],
        
        pagination: {
            rowsPerPage: 2,
            totalItems: 2,
           
        },
       
        search: '',
        headerss: [
          { text: 'Grafico', value: 'name', align: 'left', width: '1', sortable: false },
          { text: 'Actualizacion', value: 'ingeniero', align: 'center', width: '1', sortable: false, },
          { text: 'Seccion', value: 'localidad', align: 'center', width: '1', sortable: false, },
          { text: 'Tab', value: 'distib', align: 'center', width: '1', sortable: false, },
          { text: 'Persona', value: 'remito', align: 'center', width: '1', sortable: false, },
          { text: 'RC', value: 'bellaco', align: 'center', width: '1', sortable: false, },
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


