<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,

    data () {
        return {
        datacollection: {
            
            datasets: [{
                data: [20, 50, 100, 75, 25, 0],
                label: 'Left dataset',

                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis'
            }, {
                data: [0.9, 0.5, 1.0, 2.0, 1.5, 0],
                label: 'Right dataset',

                // This binds the dataset to the right y axis
                yAxisID: 'right-y-axis',
            }],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        options: {
            scales: {
                yAxes: [{
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left'
                }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right'
                }]
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