<template>
    
    <v-container>
        <!-- <p>{{ name }}</p> -->
        <v-data-table :headers="headers" :items="desserts" class="elevation-1" style="width: 100%">
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
      }
  },
  computed: {
    
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
  created() {
    console.log('created Tabla')
    // desserts() {
    //   return this.$store.getters.desserts
    //   console.log('created desserts')
    // }
  },
}
</script>
