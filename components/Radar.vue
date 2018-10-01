<script>
import { Radar } from 'vue-chartjs'

export default {
    extends: Radar,

    data () {
        return {
        datacollection: {
            labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [{
                label: 'Buck',
                data: [20, 10, 4, 2],
                backgroundColor: 'blue',
            }]
        }
        }
    },
    mounted () {
        // this.renderChart(data, options)  
        this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    }



}
</script>
