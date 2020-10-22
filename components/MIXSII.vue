<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA', 'NEA'],
            datasets: [{
                label: '2020',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(200, 150, 100, 1)',
                borderColor: 'rgba(200, 150, 100, 1)',
                data: [1330, 5635, 10373, 50, 19674, 0, 15674, 750, 2220],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },
                {
                label: '2019',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(150, 100, 100, 1)',
                borderColor: 'rgba(150, 100, 100, 1)',
                data: [0, 16397, 6706, 600, 15185, 6138, 17499, 700, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },
                {
                label: '2018',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(200, 50, 100, 1)',
                borderColor: 'rgba(200, 50, 100, 1)',
                data: [4070, 11048, 4542, 1879, 27753, 2435, 9220, 300, 700],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },
                {
                label: '2017',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(150, 200, 50, 1)',
                borderColor: 'rgba(150, 200, 50, 1)',
                data: [728, 390, 5443, 437, 4660, 320, 2019, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },
                {
                label: '2016',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(100, 50, 50, 1)',
                borderColor: 'rgba(100, 50, 50, 1)',
                data: [0, 1035, 4970, 730, 29960, 2195, 3259, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                }
                ],
            // labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA']
        },
        options: {
            title: {
                display: true,
                text: 'Ventas Bls 1º Mult Nº3'
            },
            scales: {
                yAxes: [{ 
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    // stacked: true,
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 40000,
                        min: 0
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
                //         max: 150,
                //         min: -70
                //     }
                // }
                ],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                },
                stacked: true,
                
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