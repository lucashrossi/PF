<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['SY 330', 'Esmeralda', 'SY 211', 'Saeta', 'Topacio', 'Meteoro', 'SY 120', 'Zafiro', 'Claraz', 'Bellaco', 'SY 300', 'SY 200', 'Platino', 'Granate', 'Pleno', '55 CL2','Otros'],
            datasets: [{
                // label: "Population (millions)",
                backgroundColor: ["rgba(50, 200, 0, 1)", "rgba(142, 94, 162, 1)","rgba(196, 88, 80, 1)","rgba(17, 17, 185, 1)","rgba(196, 88, 80, 1)","rgba(140, 186, 47, 1)", "rgba(255, 0, 0, 1)","rgba(20, 138, 159, 1)","rgba(225, 200, 185, 1)",'rgba(150, 10, 0, 1)','rgba(40, 194, 184, 1)','rgba(185, 250, 85, 1)','rgba(36, 186, 159, 1)','rgba(68, 68, 159, 1)','rgba(200, 88, 88, 1)','rgba(194, 82, 80, 1)','rgba(152, 121, 121, 1)'],
                data: [69906, 68774, 48716, 41590, 40107, 35743, 29953, 27146, 24220, 16371, 10925, 6837, 5310, 4844, 400, 400, 11500],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                // label: "Population (millions)",
                backgroundColor: ["rgba(50, 200, 0, 0.6)", "rgba(142, 94, 162, 0.6)","rgba(196, 88, 80, 0.6)","rgba(17, 17, 185, 0.6)","rgba(196, 88, 80, 0.6)","rgba(140, 186, 47, 0.6)", "rgba(255, 0, 0, 0.6)","rgba(20, 138, 159, 0.6)","rgba(225, 200, 185, 0.6)",'rgba(150, 10, 0, 0.6)','rgba(40, 194, 184, 0.6)','rgba(185, 250, 85, 0.6)','rgba(36, 186, 159, 0.6)','rgba(68, 68, 159, 0.6)','rgba(200, 88, 88, 0.6)','rgba(194, 82, 80, 0.6)','rgba(152, 121, 121, 0.6)'],
                data: [53834, 87345, 65012, 15350, 58201, 53136, 2000, 9217, 27549, 18358, 14523, 11592, 416, 5092, 200, 200, 9925],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Rotulos 2018 y 2017'
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