<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['Buck', 'SY'],
            datasets: [
            // {
            //     // label: 'Original 2018',
            //     backgroundColor: ['rgba(200, 50, 0)', 'rgba(100, 150, 0)'],
            //     data: [1, 1],
            //     borderWidth: [0,0]
            // },
            {
                // label: 'Original 2017',
                backgroundColor: ['rgba(200, 50, 0, 0.6)', 'rgba(100, 150, 0, 0.6)'],
                data: [76859, 95108],
                borderWidth: [0,0]
            },
            // {
            //     label: 'Primera 2018',
            //     backgroundColor: ['rgba(255, 0, 0, 0.6)', 'rgba(100, 255, 0, 0.6)'],
            //     data: [21828, 35055],
            //     borderWidth: [0,0]
            // },
            // {
            //     label: 'Primera 2017',
            //     backgroundColor: ['rgba(255, 0, 0, 0.6)', 'rgba(100, 255, 0, 0.6)'],
            //     data: [10930, 3067],
            //     borderWidth: [0,0]
            // }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Has 2017'
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,

                    
                    
                    // filter: function(legendItem, chartData) {
                    //     if (legendItem.datasetIndex === 0) {
                    //         return false
                    //     }
                   
               
                    // }
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 50
                }
            },
            plugins: {
                labels: {
                    // render: () => {}
                },
                datalabels: {
                    display: false
                }
            } 
            // scales: {
            //     yAxes: [{ 
            //     scaleLabel: {
            //         display: true,
            //         labelString: ""
            //     }
            //     }],
            //     xAxes: [{ 
            //     scaleLabel: {
            //         display: true,
            //         labelString: ""
            //     }
            //     }]
            // },
            // responsive: true,
            // maintainAspectRatio: false
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