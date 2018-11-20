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
                label: 'CostoT',
                // hidden: true,
                backgroundColor: ['rgba(100, 100, 100, 0.4)','rgba(170, 150, 120, 0.4)', 'rgba(200, 88, 88, 0.4)', 'rgba(40, 150, 200, 0.4)'],
                data: [0, 0, 146181, 296561],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Costo',
                // hidden: true,
                backgroundColor: ['rgba(100, 100, 100, 0.6)','rgba(170, 150, 120, 0.6)', 'rgba(200, 88, 88, 0.6)', 'rgba(40, 150, 200, 0.6)'],
                data: [0, 0, 0, 56883],
                yAxisID: 'left-y-axis'
                },
                {
                label: 'Neto',
                backgroundColor: ['rgba(100, 100, 100, 1)','rgba(170, 150, 120, 1)', 'rgba(200, 88, 88, 1)', 'rgba(40, 150, 200, 1)'],
                data: [1000, 12789, 9609, 27383],
                yAxisID: 'left-y-axis'
                },             
                {
                label: 'Venta',
                // hidden: true,
                data: [1000, 12789, 155790, 380827],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: false,
                showLine: false,
                pointRadius: 5,
                borderColor: 'rgba(100, 100, 100, 1)'
                }, 
                {
                label: 'Rent',
                
                data: [-20, -10, 70, 50],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 5,
                // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 255, 0, 1)'
                },
                {
                label: 'RentT',
                
                data: [-50, -40, 40, 20],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis',
                fill: true,
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
                text: 'U$S y %'
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
                        max: 400000,
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
                        max: 100,
                        min: -100
                    },
                    gridLines: {
                        display: false,
                        // offsetGridLines: true
                    }
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