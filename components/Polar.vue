
<script>
import { PolarArea } from 'vue-chartjs'

export default {
    extends: PolarArea,

    data () {
        return {
        datacollection: {
            labels: ["Spring","Summer","Fall","Winter"],
            datasets: [{
                data: [1200, 1700, 800, 200],
                backgroundColor: [
                "rgba(255, 0, 0, 0.5)",
                "rgba(100, 255, 0, 0.5)",
                "rgba(200, 50, 255, 0.5)",
                "rgba(0, 100, 255, 0.5)"
                ]
            }],
            label: 'My dataset'
        },
        }
    },
    mounted () {
        // this.renderChart(data, options)  
        this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    }



}
</script>






