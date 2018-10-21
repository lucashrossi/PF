<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA'],
            datasets: [{
                label: 'Has 2018',
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(100, 255, 0', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(75, 25, 50)', 'rgba(150, 50, 100)', 'rgba(10, 50, 70)'],
                data: [505000, 860000, 1390000, 280000, 635000, 1065000, 510000, 855000],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Has 2017',
                backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(100, 255, 0, 0.4)', 'rgba(200, 50, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(50, 150, 200, 0.4)', 'rgba(75, 25, 50, 0.4)', 'rgba(150, 50, 100, 0.4)', 'rgba(10, 50, 70, 0.4)'],
                data: [295000, 750000, 1145000, 250000, 722000, 1118000, 450000, 720000],
                yAxisID: 'left-y-axis'
                }, {
                label: '% Var Buck 2018',
                hidden: true,
                backgroundColor: ['rgba(20,50,0,0.4)'],
                data: [1.3, 5.0, 0.9, 1.8, 7.5, 0.1, 2.3, 0.0],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis'
                },
                {
                label: '% Var Buck 2017',
                hidden: true,
                backgroundColor: ['rgba(220,150,220,0.4)'],
                data: [2.4, 5.7, 1.4, 5.0, 4.6, 0.2, 2.2, 0.0],

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
                        max: 1500000,
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
                        max: 20,
                        min: -20
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