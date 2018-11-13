<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['Regalias', 'Fiscalizadas', 'Primera', 'Original'],
            datasets: [
                {
                // label: '2018',
                data: [3, 9, 15, 20],
                backgroundColor: ['rgba(255,0,0)', 'rgba(50,200,0)','rgba(140, 186, 47, 1)','rgba(17, 17, 185, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0]
                },
                {
                // label: '2018',
                data: [200, 1000, 20000, 30000],
                backgroundColor: ['rgba(255,0,0)', 'rgba(50,200,0)','rgba(140, 186, 47, 1)','rgba(17, 17, 185, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0]
                }
                
                ]
        },
        options: {
            cutoutPercentage: 30,
            title: {
                display: true,
                text: '$ y Has'
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,
                    filter: function(legendItem, data) {
                            // return legendItem.index != 1
                            return legendItem.index < 5 
                    }
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            plugins: {
                labels: {
                    // render: () => {}
                },
                datalabels: {
                    display: false
                }
            },
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