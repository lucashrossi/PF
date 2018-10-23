<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="desserts"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.cantidad }}</td>
                <td class="text-xs-right">{{ props.item.precio }}</td>
                <td class="text-xs-right">{{ props.item.factura }}</td>
                <td class="text-xs-right">{{ props.item.detalle }}</td>
                <td class="text-xs-right">{{ props.item.cta }}</td>
                <td class="text-xs-right">{{ props.item.RS }}</td>
                <td class="text-xs-right">{{ props.item.importe }}</td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
export default {


  data: () => {
      return {
        headers: [
          {
            text: 'Pedido',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Cantidad', value: 'cantidad', align: 'right' },
          { text: 'Precio', value: 'precio', align: 'right' },
          { text: 'Factura', value: 'factura', align: 'right' },
          { text: 'detalle', value: 'detalle', align: 'right' },
          { text: 'CTA', value: 'cta', align: 'right' },
          { text: 'Razon Social', value: 'RS', align: 'right' },
          { text: 'Importe', value: 'importe', align: 'right' }
        ],
        desserts: [
          {
            value: false,
            name: 25616,
            cantidad: 1133,
            precio: 61.56,
            factura: 'A001200004761',
            detalle: 'BUCKSY200',
            cta: 4036,
            RS:'GONZALEZ LISANDRO Y L. HNOS SRL',
            importe: 69747.48
          },
          {
            value: false,
            name: 25617,
            cantidad: 720,
            precio: 77.35,
            factura: 'A001200004762',
            detalle: 'BUCKSY200',
            cta: 6275,
            RS:'FIRMAN ALDO HECTOR',
            importe: 55692
          },
          {
            value: false,
            name: 25618,
            cantidad: 113,
            precio: 52,
            factura: 'A001200004763',
            detalle: 'BUCKMETEORO',
            cta: 4119,
            RS:'ADMINISTRACION BRIONES S.A.',
            importe: 5876
          },
          {
            value: false,
            name: 25700,
            cantidad: 60,
            precio: 84,
            factura: 'A001200004859',
            detalle: 'BUCKSY300',
            cta: 6288,
            RS:'CARENA GERMAN DIEGO',
            importe: 5040
          }
        ]
      }
    }
}
</script>
