<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['Pleno', '55 CL2', 'Destello', 'Camba', 'SY 110', 'SY 300', 'Claraz', 'SY 200', 'SY 120', 'Saeta', 'Bellaco', 'Meteoro', 'SY 211', 'SY 330', 'Total Año'],
            datasets: [{
                label: '2018',
                backgroundColor: ['rgba(200, 88, 88, 1)', 'rgba(194, 82, 80, 1)', 'rgba(20, 50, 0, 1)', 'rgba(136, 186, 147, 1)', 'rgba(170, 150, 120, 1)', 'rgba(40, 194, 184, 1)', 'rgba(225, 200, 185, 1)', 'rgba(185, 250, 85, 1)', 'rgba(255, 0, 0, 1)', 'rgba(17, 17, 185, 1)', 'rgba(150, 10, 0, 1)', 'rgba(140, 186, 47, 1)', 'rgba(196, 88, 80, 1)', 'rgba(50, 200, 0, 1)', 'rgba(150, 150, 150, 1)'],
                data: [0, 0, 0, 0, 0, 2538, 2242, 3515, 4125, 8242, 3664, 7680, 10774, 14103, 56883],
                yAxisID: 'left-y-axis'
                },
                {
                label: '2017',
                hidden: true,
                backgroundColor: ['rgba(200, 88, 88, 0.4)', 'rgba(194, 82, 80, 0.4)', 'rgba(20, 50, 0, 0.4)', 'rgba(136, 186, 147, 0.4)', 'rgba(170, 150, 120, 0.4)', 'rgba(40, 194, 184, 0.4)', 'rgba(225, 200, 185, 0.4)', 'rgba(185, 250, 85, 0.4)', 'rgba(255, 0, 0, 0.4)', 'rgba(17, 17, 185, 0.4)', 'rgba(150, 10, 0, 0.4)', 'rgba(140, 186, 47, 0.4)', 'rgba(196, 88, 80, 0.4)', 'rgba(50, 200, 0, 0.4)', 'rgba(150, 150, 150, 0.4)'],
                data: [0, 0, 0, 0, 700, 0, 1546, 461, 0, 620, 5520, 3244, 1116, 790, 13997],
                yAxisID: 'left-y-axis'
                }, 
                // {
                // label: 'Diferencia Años',
                
                // data: [81, 90, -2, 77, 75, 39, 100, 100],

                // // Changes this dataset to become a line
                // type: 'line',
                // yAxisID: 'right-y-axis'
                // }
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
                    // stacked: true,
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 60000,
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