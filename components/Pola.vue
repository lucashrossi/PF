
<script>
import { PolarArea } from 'vue-chartjs'

export default {
    extends: PolarArea,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA'],
            datasets: [{
                label: '% Var Buck 2018',
                data: [1.3, 5.0, 0.9, 1.8, 7.5, 0.1, 2.3, 0.0],
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(100, 255, 0)', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(75, 25, 50)', 'rgba(150, 50, 100)', 'rgba(10, 50, 70)'],
                borderWidth: [0,0,0,0,0,0,0,0]
            },
            {
                label: '% Var Buck 2017',
                data: [2.4, 5.7, 1.4, 5.0, 4.6, 0.2, 2.2, 0.0],
                backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)'],
                borderWidth: [0,0,0,0,0,0,0,0]
            }],
            // label: 'My dataset'
        },
        options: {
            title: {
                display: true,
                text: '% Variedades Buck 2018 y 2017'
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
                    max: 8,
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
                    top: 20,
                    bottom: 50
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
            
            // responsive: true,
            // maintainAspectRatio: false,
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