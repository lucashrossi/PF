<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['SY 330', 'SY 211', 'Saeta', 'Meteoro', 'SY 120', 'Bellaco', 'SY 200', 'SY 300', 'Claraz'],
            datasets: [
                {
                // label: 'Buck',
                data: [25, 19, 14, 14, 7, 6, 6, 4, 4],
                backgroundColor: ['rgba(50,200,0)', '#c45850','#1111b9','#8cba2f','rgba(255,0,0)','rgba(150,10,0)', '#e1c8b9','#28c2b8','#e1c8b9'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0]
                },
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
            title: {
                display: true,
                text: 'Porcentaje 2018'
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