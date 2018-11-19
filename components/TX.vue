<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
            datacollection: {
                labels: ['Girasol', 'Avena', 'Fideo', 'Pan'],
                datasets: [{
                    label: "My First dataset",
                    xAxisID: "x-axis-1", // bottom axis
                    yAxisID: "y-axis-1", // left axis
                    data: [0, 3500, 100000, 230000]
                }, {
                    label: "My Second dataset",
                    xAxisID: "x-axis-2", // top axis
                    yAxisID: "y-axis-2", // right axis
                    data: [0, 1000, 50000, 170000]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: false,
                        position: "bottom",
                        // type: "time", // gives us a date axis
                        id: "x-axis-1"
                    }, {
                        stacked: false,
                        position: "top",
                        // type: "time",
                        id: "x-axis-2"
                    }],
                    yAxes: [{
                        stacked: false,
                        type: "linear",
                        position: "left",
                        id: "y-axis-1",
                    }, {
                        stacked: false,
                        type: "linear",
                        position: "right",
                        id: "y-axis-2",
                    }],
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