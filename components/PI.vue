<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['SY 330', 'BUCK ESMERALDA', 'SY 211', 'BUCK SAETA', 'BUCK TOPACIO', 'BUCK METEORO', 'SY 120', 'BUCK ZAFIRO', 'BUCK CLARAZ', 'BUCK BELLACO', 'NO ESTÁ', 'BUCKSY300', 'SY 200', 'BUCK PLATINO', 'BUCK GRANATE', 'BUCK PLENO', '55 CL 2'],
            datasets: [{
                // label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e45cd", "#125ea2","#24ba9f","#85c3b9","#775850"],
                data: [69906, 68774, 48716, 41590, 40107, 35743, 29953, 27146, 24220, 16371, 11500, 10925, 6837, 5310, 4844, 400, 400],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }]
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