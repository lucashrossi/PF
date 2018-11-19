<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ['Girasol', 'Avena', 'Fideo', 'Pan'],
            datasets: [
                
                {
                label: 'Total Has',
                // hidden: true,
                data: [0, 3500, 100000, 230000],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: false,
                showLine: false,
                pointRadius: 5,
                borderColor: 'rgba(100, 100, 100, 1)'
                },
                
                {
                label: 'Extendidas',
                backgroundColor: ['rgba(100, 100, 100, 1)','rgba(170, 150, 120, 1)', 'rgba(200, 88, 88, 1)', 'rgba(40, 150, 200, 1)'],
                data: [0, 1000, 50000, 170000],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Comunes',
                // hidden: true,
                backgroundColor: ['rgba(100, 100, 100, 0.6)','rgba(170, 150, 120, 0.6)', 'rgba(200, 88, 88, 0.6)', 'rgba(40, 150, 200, 0.6)'],
                data: [0, 2000, 40000, 50000],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Segunda',
                // hidden: true,
                backgroundColor: ['rgba(100, 100, 100, 0.4)','rgba(170, 150, 120, 0.4)', 'rgba(200, 88, 88, 0.4)', 'rgba(40, 150, 200, 0.4)'],
                data: [0, 500, 10000, 10000],
                yAxisID: 'left-y-axis',
                // xAxisID: 'left-x-axis',
                },
                
                
                {
                label: 'Extendidas U$S',
                
                data: [0, 5000, 250000, 850000],

                // Changes this dataset to become a line
                // type: 'line',
                yAxisID: 'right-y-axis',
                // xAxisID: 'right-x-axis',
                hidden: true,
                fill: false,
                showLine: true,
                pointRadius: 5,
                // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 255, 0, 1)'
                },
                {
                label: 'Comunes U$S',
                
                data: [0, 2000, 40000, 50000],

                // Changes this dataset to become a line
                // type: 'line',
                yAxisID: 'right-y-axis',
                // xAxisID: 'right-x-axis',
                hidden: true,
                fill: false,
                showLine: true,
                pointRadius: 5,
                // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 255, 0, 1)'
                },
                
                {
                label: 'Segunda U$S',
                
                data: [0, 500, 10000, 10000],

                // Changes this dataset to become a line
                // type: 'line',
                yAxisID: 'right-y-axis',
                // xAxisID: 'right-x-axis',
                hidden: true,
                fill: false,
                showLine: true,
                pointRadius: 5,
                // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 255, 0, 1)'
                },
                {
                label: 'Total U$S',
                
                data: [, 0, 7500, 300000, 900000],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis',
                xAxisID: 'right-x-axis',
                fill: false,
                // showLine: false,
                
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
                text: 'Has y U$S'
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
                        max: 250000,
                        min: 0
                    },
                   
                }, 
                {
                    stacked: true,
                    id: 'right-y-axis',
                    // type: 'linear',
                    position: 'right',
                    
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 1000000,
                        min: 0
                    },
                }
                ],
                xAxes: [{
                    // id: 'left-x-axis',
                    // stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    ticks: {
                        autoSkip: false
                    }
                },
                {   
                    id: 'right-x-axis',
                    labels: [0, 1, 2, 3, 4],
                    // stacked: true,
                    position: "top",
                    // position: "bottom",
                    // gridLines: false,
                    display: false,
                    // offset: true,
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    ticks: {
                        autoSkip: false,
                        // labelOffset: 10
                        // min: 0
                    }
                }
                ]
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