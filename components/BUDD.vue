<script>
import { Bubble } from 'vue-chartjs'

export default {
    extends: Bubble,

    data () {
        return {
        datacollection: {
            labels: ['Regalias', 'Fiscalizadas', 'Primera', 'Original'],
            datasets: [
                {
                label: ["Regalias"],
                backgroundColor: "rgba(255, 0, 0, 0.6)",
                // borderColor: "rgba(255, 0, 0,1)",
                // hoverBackgroundColor: "'rgba(255, 0, 0, 0.2)",
                data: [{
                    x: 505000,
                    y: 1.3,
                    r: 1.1
                }]
                }, 
                {
                label: ["Fiscalizadas"],
                backgroundColor: "rgba(100, 255, 0, 0.6)",
                // borderColor: "rgba(100, 255, 0,1)",
                data: [{
                    x: 860000,
                    y: 5.0,
                    r: 7.5
                }]
                },
                {
                label: ["Primera"],
                backgroundColor: "rgba(200, 50, 255, 0.6)",
                // borderColor: "rgba(200, 50, 255,0.1)",
                data: [{
                    x: 1390000,
                    y: 0.9,
                    r: 11.2
                }]
                },
                {
                label: ["Original"],
                backgroundColor: "rgba(0, 100, 255, 0.6)",
                // borderColor: "rgba(0, 100, 255,1)",
                data: [{
                    x: 280000,
                    y: 1.8,
                    r: 15.0
                }]
                },
            ]
        },
        options: {
            title: {
                display: true,
                text: '$'
            }, 
            scales: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: "Bls"
                }
                }, 
                // {
                //     id: 'right-y-axis',
                //     type: 'linear',
                //     position: 'right',
                //     ticks: {
                //         beginAtZero: true,
                //         // steps: 10,
                //         // stepValue: 5,
                //         max: 50,
                //         min: -110
                //     }
                // }
                ],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: "Has"
                }
                }]
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,
                    // filter: function(legendItem, data) {
                    //         // return legendItem.index != 1
                    //         return legendItem.index < 3
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
                    render: () => {}
                },
                datalabels: {
                    display: true,
                    font: {
                        size: 8
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
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