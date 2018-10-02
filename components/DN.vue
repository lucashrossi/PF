<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['BUENOS AIRES', 'CAPITAL', 'CORDOBA', 'SANTA FE', 'LA PAMPA', 'ENTRE RIOS', 'TUCUMAN', 'SALTA', 'S. DEL ESTERO', 'JUJUY', 'CHACO'],
            datasets: [
                {
                label: 'Buck',
                data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                },
                // {
                // label: 'N',
                // data: [10, 15, 6, 1],
                // backgroundColor: "rgba(0,0,200,0.2)",
                // },
                // {
                // label: 'K',
                // data: [15, 20, 2, 4],
                // backgroundColor: "rgba(100, 255, 0, 0.5)",
                // },
                ]
        },
        }
    },
    mounted () {
        // this.renderChart(data, options)  
        this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    }
}
</script>