<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['Meteoro', 'SY 300', 'SY 110', 'SY 200', 'SY 100', 'Bellaco', 'SY 330', 'Pleno', 'Ranquel', 'Saeta', 'Zafiro', 'Taita', 'Malevo', 'SY 211', 'Baqueano', 'Tilcara', 'AGP Fast', '75 Aniversario', 'SY 015', '55 CL2', 'Claraz'],
            datasets: [{
                label: "",
                backgroundColor: ["rgba(140, 186, 47, 1)", "rgba(40, 194, 184, 1)","rgba(170, 150, 120, 1)","rgba(185, 250, 85, 1)","rgba(100, 116, 4, 1)","rgba(150, 10, 0, 1)", "rgba(50, 200, 0, 1)","rgba(200, 88, 88, 1)","rgba(106, 16, 19, 1)","rgba(17, 17, 185, 1)",'rgba(20, 138, 159, 1)','rgba(94, 82, 80, 1)','rgba(200, 188, 188, 1)','rgba(196, 88, 80, 1)','rgba(94, 182, 150, 1)','rgba(154, 62, 60, 1)','rgba(154, 162, 160, 1)','rgba(50, 250, 180, 1)','rgba(14, 82, 80, 1)','rgba(194, 82, 80, 1)','rgba(225, 200, 185, 1)'],
                data: [49859, 31798, 25196, 17604, 13762, 9537, 6891, 6461, 2455, 2048, 1937, 1552, 1489, 1001, 663, 606, 531, 392, 332, 245, 173],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }]
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