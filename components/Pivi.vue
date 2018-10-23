<script>
import { Pie } from 'vue-chartjs'
import 'chartjs-plugin-labels'
import 'chartjs-plugin-datalabels'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA'],
            datasets: [{
                label: 'Reg/Orig 2018',
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(100, 255, 0)', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(75, 25, 50)', 'rgba(150, 50, 100)', 'rgba(10, 50, 70)'],
                data: [13.1, 17.5, 11.2, 11.0, 20.7, 0.0, 14.3, 0.0],
                borderWidth: [0,0,0,0,0,0,0,0]
            },
            {
                label: 'Reg/Orig 2017',
                backgroundColor: ['rgba(255, 0, 0, 0.6)', 'rgba(100, 255, 0, 0.6)', 'rgba(200, 50, 255, 0.6)', 'rgba(0, 100, 255, 0.6)', 'rgba(50, 150, 200, 0.6)', 'rgba(75, 25, 50, 0.6)', 'rgba(150, 50, 100, 0.6)', 'rgba(10, 50, 70, 0.6)'],
                data: [15.8, 13.1, 11.8, 14.1, 14.6, 5.1, 18.0, 0.0],
                borderWidth: [0,0,0,0,0,0,0,0]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Reg/Orig 2018 y 2017'
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