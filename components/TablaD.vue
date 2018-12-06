<template>
    
    <v-container>

        <v-card-title primary-title  justify-end style="padding-bottom: 28px;">
                   
            <v-flex xs6>
                <div style="font-size: 12px;">Dolar</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div style="font-size: 12px;">$ 38</div>
            </v-flex>
            
            <v-flex xs6>
                <div style="font-size: 12px;">Trigo</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div style="font-size: 12px;">U$S 200</div>
            </v-flex>

            <v-flex xs6>
                <div style="font-size: 12px;">Candeal</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div style="font-size: 12px;">U$S 200</div>
            </v-flex>
            
            <v-flex xs6>
                <div style="font-size: 12px;">Avena</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div style="font-size: 12px;">U$S 190</div>
            </v-flex>

            <v-flex xs6>
                <div style="font-size: 12px;">Girasol</div>
            </v-flex>
            <v-flex xs6 text-xs-right>
                <div style="font-size: 12px;">U$S 230</div>
            </v-flex>

            <!-- <iframe width="500" height="300" style="border:none;" src="http://www.bcp.org.ar/informes.asp?id_inf=24/embed/183032105700513423896"></iframe> -->

    
        </v-card-title>

       
        <!-- <p>{{ name }}</p> -->
        <v-data-table  disable-initial-sort hide-actions :headers="headers" :items="desserts"  style="width: 100%">
        <!-- <v-data-table :headers="headers" class="elevation-1" style="width: 100%"> -->

            <template slot="items" slot-scope="props">
                <td style="height: 20px; font-size: 11px">{{ props.item.name }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.cantidad }}</td>
                <!-- <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.precio }}</td> -->
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.factura }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.cta }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.detalle }}</td>
                
                <!-- <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.RS }}</td> -->
                <!-- <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ props.item.importe }}</td> -->
            </template>
           
        </v-data-table>
        

    </v-container>
</template>

<script>
export default { 

  data: () => {
      return {
        
        headers: [
          { text: 'Cultivo', value: 'name', align: 'left', width: '1'},
          // { text: 'Precio', value: 'precio', align: 'right', width: '1' },
          { text: 'Bolsas T', value: 'cantidad', align: 'right', width: '1' },
          { text: 'U$S T', value: 'factura', align: 'right', width: '1' },
          { text: 'U$S C', value: 'cta', align: 'right', width: '1' },
          { text: 'U$S N', value: 'detalle', align: 'right', width: '1' },
          
          // { text: 'Total', value: 'RS', align: 'right', width: '1' },
          // { text: 'Importe', value: 'importe', align: 'right', width: '1' },
        ],

        desserts: [
            {
                "value": "false",
                "name": "Trigo",
                // "precio": 200,
                "cantidad": 380827,
                "factura": 2382041,
                "cta": 1000000,
                "detalle": 1382041,
                                             
            },
            {
                "value": "false",
                "name": "Candeal",
                // "precio": 200,
                "cantidad": 155790,
                "factura": 578586,
                "cta": 250000,
                "detalle": 328586, 
                                
            },
            {
                "value": "false",
                "name": "Avena",
                // "precio": 190,
                "cantidad": 12789,
                "factura": 575505,
                "cta": 250000,
                "detalle": 325505, 
            },
            {
                "value": "false",
                "name": "Girasol",
                // "precio": 230,
                "cantidad": 1000,
                "factura": 45000,
                "cta": 20000,
                "detalle": 25000, 
            },
            {
                "value": "false",
                "name": "Total",
                // "precio": 230,
                "cantidad": 550406,
                "factura": 3581132,
                "cta": 1520000,
                "detalle": 2061132, 
            },
            
            
                      
        ],
        
        
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

