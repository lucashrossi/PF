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
                label: 'Ha',
                backgroundColor: ['#987979', '#787979', '#587979', '#287979'],
                data: [145482, 115304, 165650, 172013]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            scales: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                }],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                }]
            },
            // responsive: true,
            // maintainAspectRatio: false,
            legend: {
                // display: false,
                labels: {
                    // fontColor: 'rgb(255, 99, 132)',
                    boxWidth: 0
                }
            }
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