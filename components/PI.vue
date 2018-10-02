<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['SY 330', 'BUCK ESMERALDA', 'SY 211', 'BUCK SAETA', 'BUCK TOPACIO', 'BUCK METEORO', 'SY 120', 'BUCK ZAFIRO', 'BUCK CLARAZ', 'BUCK BELLACO', 'NO ESTÁ', 'BUCKSY300', 'SY 200', 'BUCK PLATINO', 'BUCK GRANATE', 'BUCK PLENO', '55 CL 2'],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [69906, 68774, 48716, 41590, 40107, 35743, 29953, 27146, 24220, 16371, 11500, 10925, 6837, 5310, 4844, 400, 400]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Variedades Buck 2018'
            },
            responsive: true,
            maintainAspectRatio: false
        }
        }
    },
    mounted () {
        // this.renderChart(data, options)  
        // this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
        this.renderChart(this.datacollection, this.options)
    }



}
</script>