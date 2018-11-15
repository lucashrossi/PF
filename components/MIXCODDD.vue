<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['SY 110', 'Granate', 'Platino', 'Pleno', '55 CL2', 'Camba', 'Obelix', 'SY 300', 'Topacio', 'Destello', 'Claraz', 'SY 200', 'Esmeralda', 'Bellaco', 'Saeta', 'Zafiro', 'Odisseo', 'SY 211', 'Meteoro', 'SY 120', 'SY 330'],
            datasets: [{
                label: 'Original',
                backgroundColor: ['rgba(170, 150, 120, 1)', 'rgba(68, 68, 159, 1)', 'rgba(36, 186, 159, 1)', 'rgba(200, 88, 88, 1)', 'rgba(194, 82, 80, 1)', 'rgba(136, 186, 147, 1)', 'rgba(110, 50, 50, 1)', 'rgba(40, 194, 184, 1)', 'rgba(196, 88, 80, 1)', 'rgba(20, 50, 0, 1)', 'rgba(225, 200, 185, 1)', 'rgba(185, 250, 85, 1)', 'rgba(142, 94, 162, 1)', 'rgba(150, 10, 0, 1)', 'rgba(17, 17, 185, 1)', 'rgba(20, 138, 159, 1)', 'rgba(90, 140, 40, 1)', 'rgba(196, 88, 80, 1)', 'rgba(140, 186, 47, 1)', 'rgba(255, 0, 0, 1)', 'rgba(50, 200, 0, 1)'],
                data: [0, 28, 27, 172, 355, 748, 796, 185, 400, 1696, 455, 616, 675, 1086, 2839, 1808, 5875, 1745, 3070, 9080, 5336],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Primera',
                // hidden: true,
                backgroundColor: ['rgba(170, 150, 120, 1)', 'rgba(68, 68, 159, 1)', 'rgba(36, 186, 159, 1)', 'rgba(200, 88, 88, 1)', 'rgba(194, 82, 80, 1)', 'rgba(136, 186, 147, 1)', 'rgba(110, 50, 50, 1)', 'rgba(40, 194, 184, 1)', 'rgba(196, 88, 80, 1)', 'rgba(20, 50, 0, 1)', 'rgba(225, 200, 185, 1)', 'rgba(185, 250, 85, 1)', 'rgba(142, 94, 162, 1)', 'rgba(150, 10, 0, 1)', 'rgba(17, 17, 185, 1)', 'rgba(20, 138, 159, 1)', 'rgba(90, 140, 40, 1)', 'rgba(196, 88, 80, 1)', 'rgba(140, 186, 47, 1)', 'rgba(255, 0, 0, 1)', 'rgba(50, 200, 0, 1)'],
                data: [0, 0, 0, 0, 0, 0, 0, 2538, 0, 0, 2242, 3515, 0, 3664, 0, 8242, 0, 10774, 7680, 4125, 14103],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Fiscalizada',
                // hidden: true,
                backgroundColor: ['rgba(170, 150, 120, 1)', 'rgba(68, 68, 159, 1)', 'rgba(36, 186, 159, 1)', 'rgba(200, 88, 88, 1)', 'rgba(194, 82, 80, 1)', 'rgba(136, 186, 147, 1)', 'rgba(110, 50, 50, 1)', 'rgba(40, 194, 184, 1)', 'rgba(196, 88, 80, 1)', 'rgba(20, 50, 0, 1)', 'rgba(225, 200, 185, 1)', 'rgba(185, 250, 85, 1)', 'rgba(142, 94, 162, 1)', 'rgba(150, 10, 0, 1)', 'rgba(17, 17, 185, 1)', 'rgba(20, 138, 159, 1)', 'rgba(90, 140, 40, 1)', 'rgba(196, 88, 80, 1)', 'rgba(140, 186, 47, 1)', 'rgba(255, 0, 0, 1)', 'rgba(50, 200, 0, 1)'],
                data: [0, 4844, 5310, 400, 400, 0, 0, 10925, 40107, 0, 24220, 6837, 68774, 16371, 27146, 41590, 0, 48716, 35743, 29953, 69906],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Total Bls',
                // hidden: true,
                data: [0, 4872, 5337, 572, 755, 748, 796, 13648, 40507, 1696, 26917, 10968, 69449, 21917, 29985, 51640, 5875, 61235, 46493, 43158, 89345],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: false,
                showLine: false,
                pointRadius: 5,
                borderColor: 'rgba(150, 100, 250, 1)'
                }, 
                {
                label: 'Total U$S',
                
                data: [0, 6104, 6525, 8140, 16375, 33660, 35820, 57320, 58107, 76320, 78325, 87282, 99149, 120201, 154901, 246580, 264375, 288851, 289093, 500428, 521571],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis',
                fill: false,
                showLine: true,
                pointRadius: 5,
                // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 255, 0, 1)'
                }, 
                
                ],
            // labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA']
        },
        options: {
            title: {
                display: true,
                text: 'Bls y U$S'
            },
            scales: {
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 100000,
                        min: 0
                    },
                   
                }, 
                {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 550000,
                        min: 0
                    },
                }
                ],
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    ticks: {
                        autoSkip: false
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