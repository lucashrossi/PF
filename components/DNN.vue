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
                label: 'Buck',
                data: [33, 19, 11, 10, 6, 6, 4, 3, 2, 2, 1, 1, 1],
                backgroundColor: ['rgba(255,0,0)', 'rgba(50,200,0)','#8cba2f','#1111b9','#c45850','rgba(20,50,0)', 'rgba(150,10,0)','#88ba93','#e1c8b9','#c25250','#28c2b8','#c85858'],
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
                text: ''
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