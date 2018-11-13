
<script>
import { PolarArea } from 'vue-chartjs'

export default {
    extends: PolarArea,

    data () {
        return {
        datacollection: {
            labels: ['Regalias', 'Fiscalizadas', 'Primera', 'Original'],
            datasets: [{
                label: '% Var Buck 2018',
                data: [3, 9, 15, 20],
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(100, 255, 0)', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)'],
                borderWidth: [0,0,0,0]
            }],
           
        },
        options: {
            title: {
                display: true,
                text: '$'
            },
            scale: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                },
                // stacked: false,
                }],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                },
                // stacked: true,
                }],
                // display: false,
                
                ticks: {
                    
                    backdropColor: "rgba(0,0,0,0)",
                    beginAtZero: true,
                    // steps: 10,
                    // stepValue: 5,
                    max: 30,
                    min: 0
                }
                
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,
                    // filter: function(legendItem, data) {
                    //         // return legendItem.index != 1
                    //         return legendItem.index < 5 
                    // }
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
                    // render: () => {},
                    position: 'outside',
                    arc: true
                },
                datalabels: {
                    display: false
                }
            },
            
            responsive: true,
            maintainAspectRatio: false,
            // responsive: false,
            // maintainAspectRatio: true
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