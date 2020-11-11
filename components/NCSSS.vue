<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["T. Original", "T. Primera", "Candeal", "Avena", "Cebada", "Girasol", "Reg Comercial", "Reg Ext"],
            datasets: [
            // {
            //     label: 'REHa',
            //     backgroundColor: '#f87979',
            //     data: [145482, 115304, 165650, 172013]
            // },
           
            {
                label: 'Cantidad',
                // backgroundColor: '#f01313',
                data: [20791, 55700, 12093, 3813, 3491, 749, 600048, 147892],
                type: 'line',
                yAxisID: 'left-y-axis',
                fill: false,
                borderColor: 'rgba(0, 0, 0, 1)',
                order: 2,
            },
            {
                label: 'Facturacion',
                backgroundColor: ['rgba(130, 120, 80, 1)', 'rgba(190, 110, 60, 1)', 'rgba(90, 180, 120, 1)', 'rgba(180, 170, 80, 1)', 'rgba(250, 200, 10, 1)', 'rgba(100, 150, 150, 1)', 'rgba(150, 150, 80, 1)', 'rgba(250, 120, 80, 1)'],
                data: [807286, 899328, 438757, 120195, 54927, 71276, 749753, 640998],
                yAxisID: 'right-y-axis',
                order: 1
            },
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Bls / U$S'
            },
            scales: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                },
                scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    id: 'right-y-axis',
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 1000000,
                        min: 0
                    }
                },
                
                {          
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        // color: "rgba(0, 0, 0, 0)",
                        display: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 700000,
                        min: 0
                    },
                }
                ],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
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
