<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['Pan', 'Fideo', 'Avena', 'Girasol'],
            datasets: [
                {
                // label: '2018',
                data: [33, 19, 11, 10],
                backgroundColor: ['rgba(40, 150, 200, 1)', 'rgba(200, 88, 88, 1)','rgba(170, 150, 120, 1)','rgba(180, 180, 180, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0]
                },
                {
                // label: '2017',
                data: [7, 24, 9, 8],
                backgroundColor: ['rgba(40, 150, 200, 1)', 'rgba(200, 88, 88, 1)','rgba(170, 150, 120, 1)','rgba(180, 180, 180, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0],
                },
                {
                // label: '2017',
                data: [7, 24, 9, 8],
                backgroundColor: ['rgba(40, 150, 200, 1)', 'rgba(200, 88, 88, 1)','rgba(170, 150, 120, 1)','rgba(180, 180, 180, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0],
                }
                ]
        },
        options: {
            cutoutPercentage: 30,
            title: {
                display: true,
                text: '$ Bls Has'
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