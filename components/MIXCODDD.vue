<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['SY 110', 'Pleno', 'SY 300', '55 CL2', 'Claraz', 'SY 200', 'Camba', 'Bellaco', 'Destello', 'SY 211', 'Saeta', 'Meteoro', 'SY 330', 'SY 120'],
            datasets: [{
                label: 'Original',
                backgroundColor: ['rgba(170, 150, 120, 1)', 'rgba(200, 88, 88, 1)', 'rgba(40, 194, 184, 1)', 'rgba(194, 82, 80, 1)', 'rgba(225, 200, 185, 1)', 'rgba(185, 250, 85, 1)', 'rgba(136, 186, 147, 1)', 'rgba(150, 10, 0, 1)', 'rgba(20, 50, 0, 1)', 'rgba(196, 88, 80, 1)', 'rgba(17, 17, 185, 1)', 'rgba(140, 186, 47, 1)', 'rgba(50, 200, 0, 1)'],
                data: [0, 172, 185, 355, 455, 616, 748, 1086, 1696, 1745, 2839, 3070, 5336],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Primera',
                // hidden: true,
                backgroundColor: ['rgba(170, 150, 120, 1)', 'rgba(200, 88, 88, 1)', 'rgba(40, 194, 184, 1)', 'rgba(194, 82, 80, 1)', 'rgba(225, 200, 185, 1)', 'rgba(185, 250, 85, 1)', 'rgba(136, 186, 147, 1)', 'rgba(150, 10, 0, 1)', 'rgba(20, 50, 0, 1)', 'rgba(196, 88, 80, 1)', 'rgba(17, 17, 185, 1)', 'rgba(140, 186, 47, 1)', 'rgba(50, 200, 0, 1)'],
                data: [0, 0, 1411, 100, 1196, 1101, 3807, 3855, 0, 350, 1280, 2122, 739],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Fiscalizada',
                // hidden: true,
                backgroundColor: ['rgba(170, 150, 120, 1)', 'rgba(200, 88, 88, 1)', 'rgba(40, 194, 184, 1)', 'rgba(194, 82, 80, 1)', 'rgba(225, 200, 185, 1)', 'rgba(185, 250, 85, 1)', 'rgba(136, 186, 147, 1)', 'rgba(150, 10, 0, 1)', 'rgba(20, 50, 0, 1)', 'rgba(196, 88, 80, 1)', 'rgba(17, 17, 185, 1)', 'rgba(140, 186, 47, 1)', 'rgba(50, 200, 0, 1)'],
                data: [0, 172, 1596, 455, 1651, 1717, 4555, 4941, 1696, 2095, 4119, 5192, 6075],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Total Bls',
                // hidden: true,
                data: [0, 172, 1596, 455, 1651, 1717, 4555, 4941, 1696, 2095, 4119, 5192, 6075],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: false
                }, 
                {
                label: 'Total $',
                
                data: [0, 172, 1596, 455, 1651, 1717, 4555, 4941, 1696, 2095, 4119, 5192, 6075],

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
                text: 'Bls y $'
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
                        max: 16000,
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
                        max: 80000,
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