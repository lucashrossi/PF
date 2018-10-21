<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA'],
            datasets: [{
                label: 'Regalias 2018',
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(100, 255, 0', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(75, 25, 50)', 'rgba(150, 50, 100)', 'rgba(10, 50, 70)'],
                data: [10959, 86543, 26320, 9341, 85457, 0, 17544, 0],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Regalias 2017',
                backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)'],
                data: [15844, 101571, 32044, 30257, 73394, 3750, 21109, 0],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Reg/Orig 2018',
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(100, 255, 0', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(75, 25, 50)', 'rgba(150, 50, 100)', 'rgba(10, 50, 70)'],
                data: [13.1, 17.5, 11.2, 11.0, 20.7, 0.0, 14.3, 0.0],
                yAxisID: 'right-y-axis'
                },
                {
                label: 'Reg/Orig 2017',
                backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)'],
                data: [15.8, 13.1, 11.8, 14.1, 14.6, 5.1, 18.0, 0.0],
                yAxisID: 'right-y-axis'
                }, {
                label: 'Diferencia Regalias',
                backgroundColor: ['rgba(20,50,0,0.4)'],
                data: [-31, -15, -18, -69, 16, -100, -17, 0],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis'
                },
                {
                label: 'Diferencia Reg/Orig',
                backgroundColor: ['rgba(220,150,220,0.4)'],
                data: [-17, 33, -5, -22, 42, -100, -21, 0],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis'
                }],
            // labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA']
        },
        options: {
            title: {
                display: true,
                text: ''
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
                        max: 100000,
                        min: 0
                    }
    
                }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 50,
                        min: -110
                    }
                }],
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