<template>
    <section >
        <Tabla v-for="dessert in desserts" :key="dessert.id" :id="dessert.id" :value="dessert.value" :name="dessert.name" :cantidad="dessert.cantidad" :precio="dessert.precio" :factura="dessert.factura" :detalle="dessert.detalle" :cta="dessert.cta" :RS="dessert.RS" :importe="dessert.importe"/>
    </section>
</template>



<script>
export default {

  props: {
    
    desserts: {
    //   type: Array,
    //   required: true
    }
  },
  

}
</script>