<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA', 'Otras'],
            datasets: [
            {
            label: 'Totales',
            data: [2471, 25330, 66599, 4707, 48885, 6087, 13150, 3303, 1198],
            type: 'line',
            yAxisID: 'right-y-axis',
            fill: false,
            showLine: false,
            pointRadius: 5,
            // pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255, 0, 0, 1)'
            },
            {
            label: 'SY 330',
            backgroundColor: 'rgba(50, 200, 0, 1)',
            data: [0, 90, 110, 0, 0, 0, 0, 0, 0]
            },
            // {
            // label: 'Esmeralda',
            // backgroundColor: 'rgba(142, 94, 162, 1)',
            // data: [0, 20370, 73441, 119091, 69515, 56721, 87345, 68774]
            // },
            {
            label: 'SY 211',
            backgroundColor: 'rgba(196, 88, 80, 1)',
            data: [0, 80, 0, 0, 0, 0, 0, 0, 0]
            },
            {
            label: 'Saeta',
            backgroundColor: 'rgba(17, 17, 185, 1)',
            data: [0, 0, 0, 0, 0, 0, 142, 0, 0]
            },
            // {
            // label: 'Topacio',
            // backgroundColor: 'rgba(196, 88, 80, 1)',
            // data: [0, 16450, 84237, 99654, 63307, 78972, 58201, 40107]
            // },
            {
            label: 'Meteoro',
            backgroundColor: 'rgba(140, 186, 47, 1)',
            data: [0, 130, 11190, 0, 24671, 301, 6271, 286, 0]
            },
            // {
            // label: 'SY 120',
            // backgroundColor: 'rgba(255, 0, 0, 1)',
            // data: [0, 0, 0, 0, 0, 0, 2000, 29953]
            // },
            {
            label: 'Zafiro',
            backgroundColor: 'rgba(20, 138, 159, 1)',
            data: [0, 0, 120, 0, 0, 0, 0, 0, 0]
            },
            // {
            // label: 'Claraz',
            // backgroundColor: 'rgba(225, 200, 185, 1)',
            // data: [0, 0, 0, 0, 0, 3500, 27549, 24220]
            // },
            // {
            // label: 'Bellaco',
            // backgroundColor: 'rgba(150, 10, 0, 1)',
            // data: [0, 0, 0, 0, 150, 8977, 18358, 16371]
            // },
            {
            label: 'SY 300',
            backgroundColor: 'rgba(40, 194, 184, 1)',
            data: [1380, 10790, 20069, 675, 2821, 145, 527, 620, 321]
            },
            {
            label: 'SY 200',
            backgroundColor: 'rgba(185, 250, 85, 1)',
            data: [877, 4829, 6983, 1778, 4839, 1449, 0, 735, 322]
            },
            // {
            // label: 'Platino',
            // backgroundColor: 'rgba(36, 186, 159, 1)',
            // data: [0, 570, 18583, 11300, 100, 859, 416, 5310]
            // },
            // {
            // label: 'Granate',
            // backgroundColor: 'rgba(68, 68, 159, 1)',
            // data: [0, 350, 6215, 6511, 100, 518, 5092, 4844]
            // },
            {
            label: 'Pleno',
            backgroundColor: 'rgba(200, 88, 88, 1)',
            data: [0, 530, 1755, 2067, 616, 0, 1055, 649, 0]
            },
            {
            label: '55 CL2',
            backgroundColor: 'rgba(194, 82, 80, 1)',
            data: [0, 0, 75, 0, 0, 0, 0, 0, 0]
            },
            {
            label: 'Otros',
            backgroundColor: 'rgba(152, 121, 121, 1)',
            data: [214, 8881, 26297, 187, 15938, 4192, 5155, 1013, 555]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Has 2016'
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    stacked: true,
                    
                }],
                yAxes: [
                    {
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    stacked: true,
                    // gridLines: {
                    //     display: false
                    // }
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 80000,
                        min: 0
                    },
                    },
                    {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    display: false,
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 80000,
                        min: 0
                    },
                    }
                ]
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,

                    // generateLabels: function(chart) {
                    //     return [
                    //         { 
                    //             text: 'SY 330',
                    //             fillStyle: 'red'
                    //         }
                    //     ]
                    // },

                    filter: function(legendItem, chartData) {
                        // if (legendItem.datasetIndex === 0) {
                        //     return false
                        // }
                            return legendItem.datasetIndex < 5 
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
                    render: () => {}
                },
                datalabels: {
                    display: false
                }
            } 
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