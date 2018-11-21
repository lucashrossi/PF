<template>
    
    <v-container>
        <!-- <p>{{ name }}</p> -->
        <v-data-table hide-headers hide-actions :headers="headers" :items="desserts"  style="width: 100%">
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
            <!-- <template >
                <td style="height: 20px; font-size: 11px">{{ name }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ cantidad }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ precio }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ factura }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ detalle }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ cta }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ RS }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ importe }}</td>
            </template> -->
        </v-data-table>
        
        <v-data-table hide-headers hide-actions :headers="headers" :items="desserts"  style="width: 100%">
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
            <!-- <template >
                <td style="height: 20px; font-size: 11px">{{ name }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ cantidad }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ precio }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ factura }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ detalle }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ cta }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ RS }}</td>
                <td style="height: 20px; font-size: 11px" class="text-xs-right">{{ importe }}</td>
            </template> -->
        </v-data-table>

        <v-card class="elevation-0" style="width: 100%" >
          <v-card-title style="height: 30px; padding: 0px">
              <!-- <h1>Bolsas 2018:</h1>
              <v-spacer></v-spacer> -->
              <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field> -->
              <v-text-field style="padding: 0px" v-model="search" height="1" single-line hide-details flat></v-text-field>
          </v-card-title>

          <!-- <v-data-table hide-headers hide-actions style="width: 100%; height: 50px" :headers="headerss" :items="dessertss" :search="search" :rows-per-page="1" :rows-per-page-items="[1, 200]"> -->
          <v-data-table style="width: 100%; height: 60px" must-sort hide-actions :headers="headerss" :items="dessertss" :search="search" :pagination.sync="pagination" >
            


              <template  slot="items" slot-scope="props">
                <!-- <tr style="height: 10px; padding: 0 5px"> -->
                  <!-- <th style="padding: 0 5px"> -->
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-left">{{ props.item.name }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-right">{{ props.item.ingeniero }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-right">{{ props.item.localidad }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-right">{{ props.item.distib }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-right">{{ props.item.remito }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-right">{{ props.item.bellaco }}</td>
                    <td style="height: 20px; font-size: 11px; padding: 0 5px" class="text-xs-right">{{ props.item.destello }}</td>
                    
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

  // asyncData(context) {
  //   return this.$axios.get('https://pfdbb-dc48b.firebaseio.com/posts' + context.params.id + '.json')
  //     console.log(context.params.id)
  //     .then(res => {
  //       return {
  //         headers: [
  //           { text: 'Pedido', value: 'name', align: 'left', width: '1'},
  //           { text: 'Cantidad', value: 'cantidad', align: 'right', width: '1' },
  //           { text: 'Precio', value: 'precio', align: 'right', width: '1' },
  //           { text: 'Factura', value: 'factura', align: 'right', width: '1' },
  //           { text: 'detalle', value: 'detalle', align: 'right', width: '1' },
  //           { text: 'CTA', value: 'cta', align: 'right', width: '1' },
  //           { text: 'Razon Social', value: 'RS', align: 'right', width: '1' },
  //           { text: 'Importe', value: 'importe', align: 'right', width: '1' },
  //         ],
  //         desserts: res.data
          
  //       }
  //       console.log('res.data')
  //     })
  //     .catch(e => context.error(e))
  // },
//    props: {
//         id: {
//         type: String,
//         required: true
//         },
//         value: {
//         type: Boolean,
//         required: true
//         },
//         name: {
//         type: String,
//         required: true
//         },
//         cantidad: {
//         type: String,
//         required: true
//         },
//         precio: {
//         type: String,
//         required: true
//         },
//         factura: {
//         type: String,
//         required: true
//         },
//         detalle: {
//         type: String,
//         required: true
//         },
//         cta: {
//         type: String,
//         required: true
//         },
//         RS: {
//         type: String,
//         required: true
//         },
//         importe: {
//         type: String,
//         required: true
//         },
//    },
  

  data: () => {
      return {
        
        headers: [
          { text: 'Pedido', value: 'name', align: 'left', width: '1'},
          { text: 'Cantidad', value: 'cantidad', align: 'right', width: '1' },
          { text: 'Precio', value: 'precio', align: 'right', width: '1' },
          { text: 'Factura', value: 'factura', align: 'right', width: '1' },
          { text: 'detalle', value: 'detalle', align: 'right', width: '1' },
          { text: 'CTA', value: 'cta', align: 'right', width: '1' },
          { text: 'Razon Social', value: 'RS', align: 'right', width: '1' },
          { text: 'Importe', value: 'importe', align: 'right', width: '1' },
        ],
        // desserts: this.$store.getters.desserts
        // desserts: []
        // desserts: [
        //   {
        //     value: false,
        //     name: 25616,
        //     cantidad: 1133,
        //     precio: 61.56,
        //     factura: 'A001200004761',
        //     detalle: 'BUCKSY200',
        //     cta: 4036,
        //     RS:'GONZALEZ LISANDRO Y L. HNOS SRL',
        //     importe: 69747.48
        //   },
        //   {
        //     value: false,
        //     name: 25617,
        //     cantidad: 720,
        //     precio: 77.35,
        //     factura: 'A001200004762',
        //     detalle: 'BUCKSY200',
        //     cta: 6275,
        //     RS:'FIRMAN ALDO HECTOR',
        //     importe: 55692
        //   },
        //   {
        //     value: false,
        //     name: 25618,
        //     cantidad: 113,
        //     precio: 52,
        //     factura: 'A001200004763',
        //     detalle: 'BUCKMETEORO',
        //     cta: 4119,
        //     RS:'ADMINISTRACION BRIONES S.A.',
        //     importe: 5876
        //   },
        //   {
        //     value: false,
        //     name: 25700,
        //     cantidad: 60,
        //     precio: 84,
        //     factura: 'A001200004859',
        //     detalle: 'BUCKSY300',
        //     cta: 6288,
        //     RS:'CARENA GERMAN DIEGO',
        //     importe: 5040
        //   }
        // ]




        // pagination: {
        //     descending: true,
        //     page: 1,
        //     rowsPerPage: 1,
        //     sortBy: 'fat',
        //     totalItems: 1,
        //     rowsPerPageItems: [1]
        // },
        pagination: {
            rowsPerPage: 1,
            totalItems: 1,
            // rowsPerPageItems: [1]
        },
        // totalItems: 1,
        search: '',
        headerss: [
          { text: 'Variedad', value: 'name', align: 'left', width: '1', sortable: false },
          { text: 'Original', value: 'ingeniero', align: 'right', width: '1', sortable: false, },
          { text: 'Primera', value: 'localidad', align: 'right', width: '1', sortable: false, },
          { text: 'Regalia C', value: 'distib', align: 'right', width: '1', sortable: false, },
          { text: 'Regalia E', value: 'remito', align: 'right', width: '1', sortable: false, },
          { text: 'Costo', value: 'bellaco', align: 'right', width: '1', sortable: false, },
          { text: 'CostoT', value: 'destello', align: 'right', width: '1', sortable: false, },
         
        ],
        dessertss: [
            {
                "value": "false",
                "name": "Zafiro",
                "ingeniero": "45",
                "localidad": "NECOCHEA",
                "distib": "5",
                "remito": "",
                "bellaco": "",
                "destello": "",
                
            },
            {
                "value": "false",
                "name": "ALONSO DAMIAN",
                "ingeniero": "PREMIO DIA CAMPO",
                "localidad": "TRES ARROYOS",
                "distib": "6",
                "remito": "11098",
                "bellaco": "",
                "destello": "",
                "sy120": "10",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "10",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "EL TALERO",
                "ingeniero": "ING. ETCHEVERRY",
                "localidad": "LAPRIDA",
                "distib": "6",
                "remito": "11381",
                "bellaco": "",
                "destello": "1",
                "sy120": "1",
                "sy200": "",
                "sy211": "1",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "PUESTOLOB",
                "ingeniero": "NECOCHEA",
                "localidad": "NECOCHEA",
                "distib": "6",
                "remito": "11046",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": "15 AIKEN - PREMIO DIA DE CAMPO"
            },
            {
                "value": "false",
                "name": "GONZALEZ MONTANER",
                "ingeniero": "ING. DINAPOLI",
                "localidad": "TS.AS./AZUL",
                "distib": "6",
                "remito": "11253/11300",
                "bellaco": "10",
                "destello": "12",
                "sy120": "10",
                "sy200": "12",
                "sy211": "12",
                "meteoro": "12",
                "sy300": "",
                "saeta": "10",
                "sy330": "10",
                "camba": "10",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "98",
                "obelix": "",
                "odiseo": "",
                "varios": "1 BLS DEL NUEVO IMI"
            },
            {
                "value": "false",
                "name": "GONZALEZ MONTANER",
                "ingeniero": "GASTON COLLOVA",
                "localidad": "NEC/TAND/AZUL",
                "distib": "6",
                "remito": "11355",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "12",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "12",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "AACREA",
                "ingeniero": "ZAPICO",
                "localidad": "NECOCHEA",
                "distib": "6",
                "remito": "11430",
                "bellaco": "2",
                "destello": " ",
                "sy120": "2",
                "sy200": " ",
                "sy211": " ",
                "meteoro": " ",
                "sy300": "",
                "saeta": "2",
                "sy330": "",
                "camba": " ",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "6",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ALEA Y CIA SA",
                "ingeniero": " ",
                "localidad": "NECOCHEA",
                "distib": "6",
                "remito": "11234",
                "bellaco": "",
                "destello": "1",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "1",
                "sy300": "",
                "saeta": "1",
                "sy330": "",
                "camba": "",
                "claraz": "1",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "AGRON. OLAVARRIA",
                "ingeniero": "ALBANO MARCOS",
                "localidad": "OLAVARRIA",
                "distib": "6",
                "remito": "11403/11477",
                "bellaco": "",
                "destello": "1",
                "sy120": "1",
                "sy200": "",
                "sy211": "1",
                "meteoro": "",
                "sy300": "",
                "saeta": "31",
                "sy330": "",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "35",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "BASF ARG.",
                "ingeniero": "PABLO ANGELETTI",
                "localidad": "TANDIL",
                "distib": "6",
                "remito": "11418",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "7",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "7",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ESC.AGROP.LOBERIA",
                "ingeniero": "",
                "localidad": "LOBERIA",
                "distib": "6",
                "remito": "11427/11557",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "30",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "30",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "REG.AAPRESID AZUL/TANDIL",
                "ingeniero": "ING. EUGENIA R.PUCH",
                "localidad": "TANDIL",
                "distib": "6",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "COOP.AGRARIA TS.AS.",
                "ingeniero": "",
                "localidad": "TRES ARROYOS",
                "distib": "6",
                "remito": "11608",
                "bellaco": "",
                "destello": "",
                "sy120": "1",
                "sy200": "",
                "sy211": "1",
                "meteoro": "",
                "sy300": "",
                "saeta": "1",
                "sy330": "",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "SYNGENTA AGRO SA",
                "ingeniero": "MATIAS FLORES",
                "localidad": "OLAVARRIA",
                "distib": "6",
                "remito": "11599",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": " ",
                "sy211": " ",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "3",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "3",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "SUDESTE DE CREA",
                "ingeniero": "ING. ANDREA ROSSO",
                "localidad": "M.D.PLATA",
                "distib": "6",
                "remito": "11235",
                "bellaco": "1",
                "destello": "1",
                "sy120": "1",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "3",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA LOBERIA",
                "ingeniero": "ING. ERREGUERENA",
                "localidad": "LOBERIA",
                "distib": "6",
                "remito": "11256",
                "bellaco": "",
                "destello": "1",
                "sy120": "1",
                "sy200": "",
                "sy211": "3",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "5",
                "obelix": "",
                "odiseo": "",
                "varios": "1 BLS. AIKEN Y 1 YAPA SI SE APRUEBA"
            },
            {
                "value": "false",
                "name": "AAPRESID ",
                "ingeniero": "ING. MAGALI GUTIERREZ",
                "localidad": "BAHIA BLANCA",
                "distib": "7",
                "remito": "11530",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "5",
                "sy330": "5",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "10",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "CORFO",
                "ingeniero": "BEISTEGUI JUAN ANDRES",
                "localidad": "P.LURO",
                "distib": "7",
                "remito": "11104",
                "bellaco": "",
                "destello": "3",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "3",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA CHACRA CARHUE",
                "ingeniero": "",
                "localidad": "CARHUE",
                "distib": "7",
                "remito": "11202",
                "bellaco": "",
                "destello": "1",
                "sy120": "1",
                "sy200": " ",
                "sy211": "1",
                "meteoro": "",
                "sy300": "",
                "saeta": "1",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "CHACRA BARROW",
                "ingeniero": "DIPANE/R.H.PEREZ",
                "localidad": "C.DORREGO",
                "distib": "7",
                "remito": "11529",
                "bellaco": "1",
                "destello": "1",
                "sy120": "",
                "sy200": "",
                "sy211": "1",
                "meteoro": "1",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ING. CERDA CORINA",
                "ingeniero": "EEA INTA BORDENAVE",
                "localidad": "BORDENAVE",
                "distib": "7",
                "remito": "11145",
                "bellaco": "",
                "destello": "1",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "1",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "2",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA ONCATIVO",
                "ingeniero": "JOSEFINA MOLINO",
                "localidad": "ONCATIVO",
                "distib": "8",
                "remito": "11126",
                "bellaco": "",
                "destello": "2",
                "sy120": "2",
                "sy200": "",
                "sy211": "2",
                "meteoro": "",
                "sy300": "",
                "saeta": "2",
                "sy330": "2",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "10",
                "obelix": "",
                "odiseo": "",
                "varios": "TELEFONO 03572-15527415"
            },
            {
                "value": "false",
                "name": "INTA SAN FRANCISCO",
                "ingeniero": "EDUARDO CORTES",
                "localidad": "SAN FRANCISCO",
                "distib": "8",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "CREA OESTE ARENOSO",
                "ingeniero": " ",
                "localidad": "TRES LOMAS",
                "distib": "8",
                "remito": "11395",
                "bellaco": "",
                "destello": "",
                "sy120": "2",
                "sy200": "",
                "sy211": "2",
                "meteoro": "",
                "sy300": "",
                "saeta": "2",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "6",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "CREA NORTE DE CORDOTA",
                "ingeniero": "EMPRESA GYSSA",
                "localidad": "SINSACATE",
                "distib": "8",
                "remito": "11151",
                "bellaco": "",
                "destello": "4",
                "sy120": "4",
                "sy200": "",
                "sy211": "4",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "4",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "16",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "AAPRESID PARANA",
                "ingeniero": "ING. PENCO RODRIGO",
                "localidad": "PARANA",
                "distib": "8",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA RAFAELA",
                "ingeniero": "ING. LUCIA ROSSETI",
                "localidad": "RAFAELA",
                "distib": "8",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ACREA REGION CENTRO",
                "ingeniero": "ING ARIEL ANGELI",
                "localidad": "LABOULAYE",
                "distib": "8",
                "remito": "11179",
                "bellaco": "",
                "destello": "8",
                "sy120": "8",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "16",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA OLIVEROS",
                "ingeniero": "ING. CASTELARIN",
                "localidad": "OLIVEROS",
                "distib": "8",
                "remito": "11171",
                "bellaco": "",
                "destello": "6",
                "sy120": "6",
                "sy200": "",
                "sy211": "6",
                "meteoro": "",
                "sy300": "",
                "saeta": "6",
                "sy330": "6",
                "camba": "6",
                "claraz": "",
                "zafiro": "5KILOS",
                "esmeralda": "5KILOS",
                "total ": "36",
                "obelix": "5KILOS",
                "odiseo": "5KILOS",
                "varios": ""
            },
            {
                "value": "false",
                "name": "GRUPO BROCHERO",
                "ingeniero": "ING. ALEJANDRO CADDILE",
                "localidad": "RIO CUARTO",
                "distib": "8",
                "remito": "11184",
                "bellaco": "",
                "destello": "",
                "sy120": "4",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "4",
                "sy330": "4",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "13",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "CREA SUR DE SANTA FE",
                "ingeniero": "ING. PAULA GELSO",
                "localidad": "V.TUERTO",
                "distib": "8",
                "remito": "11181",
                "bellaco": "",
                "destello": "10",
                "sy120": "10",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "10",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "30",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "GRANEROS",
                "ingeniero": "",
                "localidad": "VICTORIA",
                "distib": "8",
                "remito": "11172/11511",
                "bellaco": "",
                "destello": "3",
                "sy120": "3",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "3",
                "sy330": "",
                "camba": "3",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "12",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "CAPELONI DOMINGO",
                "ingeniero": "ING. CAPELONI DOMINGO",
                "localidad": "GUATIMOZIN",
                "distib": "8",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "SEMINARE SRL",
                "ingeniero": "ING. DEMARCHI FRANCISCO",
                "localidad": "RIO CUARTO",
                "distib": "8",
                "remito": "11185",
                "bellaco": "",
                "destello": "",
                "sy120": "16",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "16",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "GASTALDI HNOS",
                "ingeniero": "OMAR DEPETRIS",
                "localidad": "G.DEHEZA",
                "distib": "8",
                "remito": "11252",
                "bellaco": "",
                "destello": "3",
                "sy120": "",
                "sy200": "",
                "sy211": "3",
                "meteoro": "",
                "sy300": "",
                "saeta": "3",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "9",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ACA",
                "ingeniero": "ING. LISTELLO /lucas",
                "localidad": "JUNIN/PERGAMINO",
                "distib": "8",
                "remito": "11093",
                "bellaco": "6",
                "destello": "",
                "sy120": "",
                "sy200": "5",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "8",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "19",
                "obelix": "",
                "odiseo": "",
                "varios": "llevarlo y dejar en agronegocios"
            },
            {
                "value": "false",
                "name": "INTA S.A.ARECO",
                "ingeniero": "MOUSEGNE",
                "localidad": "S.A.ARECO",
                "distib": "9",
                "remito": "11119",
                "bellaco": "",
                "destello": "1",
                "sy120": "1",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "1",
                "sy330": "1",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "5",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "AFA ROSARIO",
                "ingeniero": "DIEGO BUSCHITTARI",
                "localidad": "CASILDA",
                "distib": "9",
                "remito": "11133",
                "bellaco": "",
                "destello": "14",
                "sy120": "14",
                "sy200": "",
                "sy211": "14",
                "meteoro": "",
                "sy300": "",
                "saeta": "14",
                "sy330": "14",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "70",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ATR REG.PERGAMINOCOLON",
                "ingeniero": "ING.ZORZA FEDERICO",
                "localidad": "PERGAMINO",
                "distib": "9",
                "remito": "11120",
                "bellaco": "",
                "destello": "3",
                "sy120": "3",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "3",
                "sy330": "",
                "camba": "3",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "12",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA 25 DE MAYO",
                "ingeniero": "ING.ZANETTINI",
                "localidad": "25 DE MAYO",
                "distib": "9",
                "remito": "11219/11389",
                "bellaco": "",
                "destello": "",
                "sy120": "1",
                "sy200": "",
                "sy211": "1",
                "meteoro": "",
                "sy300": "",
                "saeta": "1",
                "sy330": "",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "SYNGENTA AGRO SA",
                "ingeniero": "ING. MORICONI",
                "localidad": "PERGAMINO",
                "distib": "9",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ING.AGRON.JUNIN",
                "ingeniero": "ADRIAN COLANERI",
                "localidad": "JUNIN",
                "distib": "9",
                "remito": "11153",
                "bellaco": "",
                "destello": "1",
                "sy120": "1",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "1",
                "sy330": " ",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "EEA INTA PERGAMINO",
                "ingeniero": "EUGENIA CENA",
                "localidad": "PERGAMINO",
                "distib": "9",
                "remito": "11121",
                "bellaco": "1",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "1",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "ANDREOLI SA",
                "ingeniero": " ",
                "localidad": "CHIVILCOY",
                "distib": "9",
                "remito": "11221/11390",
                "bellaco": "",
                "destello": "",
                "sy120": "1",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "1",
                "sy330": "1",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "LIAG",
                "ingeniero": "MARCELO LUQUE",
                "localidad": "TUCUMAN",
                "distib": "8",
                "remito": "11061",
                "bellaco": "",
                "destello": "",
                "sy120": "1",
                "sy200": "1",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "1",
                "sy330": "1",
                "camba": "",
                "claraz": "1",
                "zafiro": "",
                "esmeralda": "",
                "total ": "5",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "",
                "ingeniero": "GEAR",
                "localidad": "ROJAS",
                "distib": "9",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "PARCELA DEMOST.",
                "ingeniero": "TOMAS HNOS",
                "localidad": "C.CASARES",
                "distib": "9",
                "remito": "",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "DON MARIO SEMILLAS",
                "ingeniero": "JAVIER CIERI",
                "localidad": "CHACABUCO",
                "distib": "9",
                "remito": "3942",
                "bellaco": "",
                "destello": "",
                "sy120": "1",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "1",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA EEA PERGAMINO",
                "ingeniero": "ING. GUSTAVO FERRARIS",
                "localidad": "PERGAMINO",
                "distib": "9",
                "remito": "11220/11352",
                "bellaco": "",
                "destello": "",
                "sy120": "2",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "1",
                "camba": "1",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "4",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "INTA CHACRA BARROW",
                "ingeniero": "LILIANA WHERANE",
                "localidad": "TRES ARROYOS",
                "distib": "6",
                "remito": "11535",
                "bellaco": "",
                "destello": "",
                "sy120": "",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "0",
                "obelix": "",
                "odiseo": "",
                "varios": "1 BOLSA DE CADA AVENA"
            },
            {
                "value": "false",
                "name": "CAUDA SEMILLAS",
                "ingeniero": " ",
                "localidad": "CHACABUCO",
                "distib": "9",
                "remito": "11397/11513",
                "bellaco": "",
                "destello": "",
                "sy120": "2",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "4",
                "camba": "",
                "claraz": "2",
                "zafiro": "",
                "esmeralda": "",
                "total ": "8",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "CREA NORTE BS.AS.",
                "ingeniero": "ING. ERMACORA",
                "localidad": "JUNIN/CEREAGRO",
                "distib": "9",
                "remito": "11080",
                "bellaco": "",
                "destello": "",
                "sy120": "6",
                "sy200": "",
                "sy211": "",
                "meteoro": "",
                "sy300": "",
                "saeta": "",
                "sy330": "",
                "camba": "",
                "claraz": "",
                "zafiro": "",
                "esmeralda": "",
                "total ": "6",
                "obelix": "",
                "odiseo": "",
                "varios": ""
            },
            {
                "value": "false",
                "name": "Total:",
                "ingeniero": "",
                "localidad": "",
                "distib": "",
                "remito": "",
                "bellaco": "21",
                "destello": "78",
                "sy120": "116",
                "sy200": "18",
                "sy211": "52",
                "meteoro": "15",
                "sy300": "0",
                "saeta": "93",
                "sy330": "119",
                "camba": "35",
                "claraz": "4",
                "zafiro": "0",
                "esmeralda": "0",
                "total ": "551",
                "obelix": "0",
                "odiseo": "0",
                "varios": ""
            }
                      
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


<style>

/* table.v-table thead tr th {
    padding: 0px;
    
} */

table.v-table thead tr {
    height: 5px;
   
}



</style>