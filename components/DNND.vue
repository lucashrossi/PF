<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['SY 120', 'SY 330', 'Meteoro', 'Saeta', 'SY 211', 'Destello', 'Bellaco', 'Camba', 'SY 200', 'Claraz', '55 CL2', 'SY 300', 'Pleno'],
            datasets: [
                {
                // label: '2018',
                data: [33, 19, 11, 10, 6, 6, 4, 3, 2, 2, 1, 1, 1],
                backgroundColor: ['rgba(255,0,0)', 'rgba(50,200,0)','rgba(140, 186, 47, 1)','rgba(17, 17, 185, 1)','rgba(196, 88, 80, 1)','rgba(20,50,0)', 'rgba(150,10,0)', 'rgba(105, 200, 85, 1)','rgba(185, 250, 85, 1)','rgba(225, 200, 185, 1)','rgba(194, 82, 80, 1)','rgba(40, 194, 184, 1)','rgba(200, 88, 88, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0]
                },
                {
                // label: '2017',
                data: [7, 24, 9, 8, 13, 0, 24, 0, 2, 7, 1, 5, 0],
                backgroundColor: ['rgba(255,0,0, 0.6)', 'rgba(50,200,0, 0.6)','rgba(140, 186, 47, 0.6)','rgba(17, 17, 185, 0.6)','rgba(196, 88, 80, 0.6)','rgba(20,50,0, 0.6)', 'rgba(150,10,0, 0.6)', 'rgba(105, 200, 85, 0.6)','rgba(185, 250, 85, 0.6)','rgba(225, 200, 185, 0.6)','rgba(194, 82, 80, 0.6)','rgba(40, 194, 184, 0.6)','rgba(200, 88, 88, 0.6)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0],
                }
                // {
                // label: 'N',
                // data: [10, 15, 6, 1],
                // backgroundColor: "rgba(0,0,200,0.2)",
                // },
                // {
                // label: 'K',
                // data: [15, 20, 2, 4],
                // backgroundColor: "rgba(100, 255, 0, 0.5)",
                // },
                ]
        },
        options: {
            cutoutPercentage: 30,
            title: {
                display: true,
                text: 'Porcentaje 2018 y 2017'
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