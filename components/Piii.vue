<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['ALGARROBO', 'CEIBO', 'ACA 360', 'BASILIO', 'BAGUETTE 750', 'KLEIN SERPIENTE', 'ACA 303 PLUS', 'KLEIN TAURO'],
            datasets: [{
                label: "",
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(100, 255, 0)', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(150, 125, 150)', 'rgba(100, 100, 100)', 'rgba(50, 50, 50)'],
                data: [566060, 443338, 196320, 194986, 144401, 127973, 120775, 106771],
                borderWidth: [0,0,0,0,0,0,0,0]
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