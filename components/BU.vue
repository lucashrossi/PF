<script>
import { Bubble } from 'vue-chartjs'

export default {
    extends: Bubble,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA'],
            datasets: [
                {
                label: ["I"],
                backgroundColor: "rgba(255, 0, 0, 0.6)",
                // borderColor: "rgba(255, 0, 0,1)",
                // hoverBackgroundColor: "'rgba(255, 0, 0, 0.2)",
                data: [{
                    x: 505000,
                    y: 1.3,
                    r: 13.1
                }]
                }, {
                label: ["IIN"],
                backgroundColor: "rgba(100, 255, 0, 0.6)",
                // borderColor: "rgba(100, 255, 0,1)",
                data: [{
                    x: 860000,
                    y: 5.0,
                    r: 17.5
                }]
                }, {
                label: ["IIS"],
                backgroundColor: "rgba(200, 50, 255, 0.6)",
                // borderColor: "rgba(200, 50, 255,0.1)",
                data: [{
                    x: 1390000,
                    y: 0.9,
                    r: 11.2
                }]
                }, {
                label: ["III"],
                backgroundColor: "rgba(0, 100, 255, 0.6)",
                // borderColor: "rgba(0, 100, 255,1)",
                data: [{
                    x: 280000,
                    y: 1.8,
                    r: 11.0
                }]
                }, {
                label: ["IV"],
                backgroundColor: "rgba(50, 150, 200, 0.6)",
                // borderColor: "rgba(50, 150, 200,1)",
                data: [{
                    x: 635000,
                    y: 7.5,
                    r: 20.7
                }]
                }, {
                label: ["VN"],
                backgroundColor: "rgba(75, 25, 50, 0.6)",
                // borderColor: "rgba(75, 25, 50,1)",
                data: [{
                    x: 1065000,
                    y: 0.1,
                    r: 0
                }]
                }, {
                label: ["VS"],
                backgroundColor: "rgba(150, 50, 100, 0.6)",
                // borderColor: "rgba(150, 50, 100,1)",
                data: [{
                    x: 510000,
                    y: 2.3,
                    r: 14.3
                }]
                }, {
                label: ["NOA"],
                backgroundColor: "rgba(10, 50, 70, 0.6)",
                // borderColor: "rgba(10, 50, 70,1)",
                data: [{
                    x: 855000,
                    y: 0.0,
                    r: 0
                }]
                },
                // {
                // label: 'Dif I',
                // backgroundColor: ['rgba(255, 0, 0, 0.6)'],
                // data: [{
                //     x: 505000,
                //     y: -17,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // },
                // {
                // label: 'Dif IIN',
                // backgroundColor: ['rgba(100, 255, 0, 0.6)'],
                // data: [{
                //     x: 860000,
                //     y: -33,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // },
                // {
                // label: 'Dif IIS',
                // backgroundColor: ['rgba(200, 50, 255, 0.6)'],
                // data: [{
                //     x: 1390000,
                //     y: -5,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // },
                // {
                // label: 'Dif III',
                // backgroundColor: ['rgba(0, 100, 255, 0.6)'],
                // data: [{
                //     x: 280000,
                //     y: -22,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // },
                // {
                // label: 'Dif IV',
                // backgroundColor: ['rgba(50, 150, 200, 0.6)'],
                // data: [{
                //     x: 635000,
                //     y: 42,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // },
                // {
                // label: 'Dif VN',
                // backgroundColor: ['rgba(75, 25, 50, 0.6)'],
                // data: [{
                //     x: 1065000,
                //     y: -100,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // },
                // {
                // label: 'Dif VS',
                // backgroundColor: ['rgba(150, 50, 100, 0.6)'],
                // data: [{
                //     x: 510000,
                //     y: -21,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // },
                // {
                // label: 'Dif NOA',
                // backgroundColor: ['rgba(10, 50, 70, 0.6)'],
                // data: [{
                //     x: 855000,
                //     y: 0,
                //     r: 1
                // }],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Reg/Orig 2018'
            }, 
            scales: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: "% Var Buck 2018"
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
                    labelString: "Has 2018"
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
                    top: 20,
                    bottom: 50
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