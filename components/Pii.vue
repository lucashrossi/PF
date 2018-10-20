<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['METEORO', 'SY 300', 'SY 110', 'SY 200', 'SY 100', 'BELLACO', 'SY 330', 'PLENO', 'RANQUEL', 'SAETA', 'ZAFIRO', 'TAITA', 'MALEVO', 'SY 211', 'BAQUEANO', 'TILCARA', 'AGP FAST', '75 ANIVERSARIO', 'SY 015', '55 CL2', 'CLARAZ'],
            datasets: [{
                label: "",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [49859, 31798, 25196, 17604, 13762, 9537, 6891, 6461, 2455, 2048, 1937, 1552, 1489, 1001, 663, 606, 531, 392, 332, 245, 173],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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