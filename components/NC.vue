<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
            datasets: [
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [22006299,	15834918,	14919501,	14797756,	14433147,	13524139,	11877109,	11862073,	11779606, 10452000]
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
