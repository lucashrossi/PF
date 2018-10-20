
<script>
import { PolarArea } from 'vue-chartjs'

export default {
    extends: PolarArea,

    data () {
        return {
        datacollection: {
            labels: ['ALGARROBO', 'CEIBO', 'ACA 360', 'BASILIO', 'BAGUETTE 750', 'KLEIN SERPIENTE', 'ACA 303 PLUS', 'KLEIN TAURO'],
            datasets: [{
                data: [566060, 443338, 196320, 194986, 144401, 127973, 120775, 106771],
                backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(100, 255, 0, 0.5)',
                'rgba(200, 50, 255, 0.5)',
                'rgba(0, 100, 255, 0.5)',
                'rgba(50, 150, 200, 0.5)',
                'rgba(150, 125, 150, 0.5)',
                'rgba(100, 100, 100, 0.5)',
                'rgba(50, 50, 50, 0.5)'
                ],
                borderWidth: [0,0,0,0,0,0,0,0]
            }],
            label: 'My dataset'
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            scale: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                }],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                }],
                // display: false,
                
                ticks: {
                    backdropColor: "rgba(0,0,0,0)" 
                }
            },
            
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






