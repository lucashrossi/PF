<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA', 'NEA'],
            datasets: [
                {
                label: 'Cumelén',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(0, 150, 50, 1)',
                borderColor: 'rgba(0, 150, 50, 1)',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Bellaco',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(50, 150, 150, 1)',
                borderColor: 'rgba(50, 150, 150, 1)',
                data: [0, 0, 0, 0, 50, 0, 0, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Amancay',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(50, 100, 100, 1)',
                borderColor: 'rgba(50, 100, 100, 1)',
                data: [0, 0, 0, 0, 84, 0, 0, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'IDA 22-05',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(200, 150, 50, 1)',
                borderColor: 'rgba(200, 150, 50, 1)',
                data: [0, 0, 123, 0, 0, 0, 0, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'SY 200',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(200, 50, 50, 1)',
                borderColor: 'rgba(200, 50, 50, 1)',
                data: [0, 0, 60, 0, 70, 0, 0, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Peregrino',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(100, 50, 50, 1)',
                borderColor: 'rgba(100, 50, 50, 1)',
                data: [0, 0, 25, 0, 210, 0, 60, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Meteoro',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(20, 150, 50, 1)',
                borderColor: 'rgba(20, 150, 50, 1)',
                data: [0, 0, 0, 0, 158, 0, 346, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'SY 109',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(50, 200, 50, 1)',
                borderColor: 'rgba(50, 200, 50, 1)',
                data: [0, 375, 90, 0, 185, 0, 0, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'SY 330',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(50, 0, 150, 1)',
                borderColor: 'rgba(50, 0, 150, 1)',
                data: [200, 230, 95, 0, 180, 0, 0, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Cambá',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(120, 20, 50, 1)',
                borderColor: 'rgba(120, 20, 50, 1)',
                data: [0, 420, 150, 0, 5, 0, 220, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Resplandor',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(70, 20, 0, 1)',
                borderColor: 'rgba(70, 20, 0, 1)',
                data: [0, 245, 0, 0, 240, 0, 393, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Destello',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(50, 50, 50, 1)',
                borderColor: 'rgba(50, 50, 50, 1)',
                data: [0, 120, 165, 0, 307, 0, 589, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Saeta',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(100, 200, 50, 1)',
                borderColor: 'rgba(100, 200, 50, 1)',
                data: [0, 708, 0, 1010, 561, 0, 31, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'Colihue',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(150, 50, 100, 1)',
                borderColor: 'rgba(150, 50, 100, 1)',
                data: [0, 1160, 415, 300, 830, 0, 101, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'SY 120',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(100, 100, 100, 1)',
                borderColor: 'rgba(100, 100, 100, 1)',
                data: [259, 1564, 1014, 0, 863, 205, 454, 0, 0],
                yAxisID: 'left-y-axis',
                fill: false,
                lineTension: 0.4
                },{
                label: 'SY 211',
                // backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)', 'rgba(30, 80, 100, 0.4)'],
                backgroundColor: 'rgba(150, 150, 100, 1)',
                borderColor: 'rgba(150, 150, 100, 1)',
                data: [670, 3394, 531, 0, 700, 596, 30, 0, 0],
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
                text: 'Bls'
            },
            scales: {
                yAxes: [{ 
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    stacked: true,
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 25000,
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