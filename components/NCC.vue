<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["2014", "2015", "2016", "2017"],
            datasets: [
            {
                label: 'REHa',
                backgroundColor: '#f87979',
                data: [145482, 115304, 165650, 172013]
            }
            ]
        }
        }
    },
    mounted () {
        // this.renderChart(data, options)  
        this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    }



}
</script>