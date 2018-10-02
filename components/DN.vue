<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [
                {
                label: 'Buck',
                data: [20, 10, 4, 2],
                backgroundColor: "rgba(200,0,0,0.2)",
                },
                {
                label: 'N',
                data: [10, 15, 6, 1],
                backgroundColor: "rgba(0,0,200,0.2)",
                },
                {
                label: 'K',
                data: [15, 20, 2, 4],
                backgroundColor: "rgba(100, 255, 0, 0.5)",
                },
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