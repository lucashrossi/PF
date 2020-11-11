<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["Abril", "Mayo", "Junio", "Julio", "Agosto", "Septeimbre", "Octubre"],
            datasets: [
            // {
            //     label: 'REHa',
            //     backgroundColor: '#f87979',
            //     data: [145482, 115304, 165650, 172013]
            // },
            {
                label: 'T. Original',
                backgroundColor: 'rgba(130, 120, 80, 1)',
                data: [1671, 12045, 5988, 626, 413, 48, 0]
            },
            {
                label: 'T. Primera',
                backgroundColor: 'rgba(190, 110, 60, 1)',
                data: [1122, 22036, 16078, 4873, 11590, 0, 0]
            },
            {
                label: 'Candeal',
                backgroundColor: 'rgba(90, 180, 120, 1)',
                data: [4630, 2693, 643, 781, 3346, 0, 0]
            },
            {
                label: 'Avena',
                backgroundColor: 'rgba(180, 170, 80, 1)',
                data: [724, 1364, 1260, 162, 304, 0, 0]
            },
            {
                label: 'Cebada',
                backgroundColor: 'rgba(250, 200, 10, 1)',
                data: [173, 131, 1066, 435, 1686, 0, 0]
            },
            {
                label: 'Girasol',
                backgroundColor: 'rgba(100, 150, 150, 1)',
                data: [0, 0, 0, 257, 51, 248, 193]
            }
            // {
            //     label: 'Total',
            //     // backgroundColor: '#f01313',
            //     data: [67176, 38195, 99502, 101393, 95894],
            //     type: 'line',
            //     yAxisID: 'right-y-axis',
            //     fill: false,
            //     borderColor: 'rgba(0, 0, 0, 1)'
            // }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Bls / 2020'
            },
            scales: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                },
                // {
                //     id: 'right-y-axis',
                //     type: 'linear',
                //     position: 'right',
                //     gridLines: {
                //         // color: "rgba(0, 0, 0, 0)",
                //         display: false
                //     },
                //     ticks: {
                //         beginAtZero: true,
                //         // steps: 10,
                //         // stepValue: 5,
                //         max: 120000,
                //         min: 0
                //     },
                // }
                ],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                }]
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,
                    // filter: function(legendItem, data) {
                            // return legendItem.index != 1
                            // return legendItem.index < 5 
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
                    display: false
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
