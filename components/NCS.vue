<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["2016", "2017", "2018", "2019", "2020"],
            datasets: [
            // {
            //     label: 'REHa',
            //     backgroundColor: '#f87979',
            //     data: [145482, 115304, 165650, 172013]
            // },
            {
                label: 'T. Original',
                backgroundColor: 'rgba(130, 120, 80, 1)',
                data: [20530, 14497, 21547, 20571, 20791]
            },
            {
                label: 'T. Primera',
                backgroundColor: 'rgba(190, 110, 60, 1)',
                data: [39153, 13997, 61947, 59369, 55706]
            },
            {
                label: 'Candeal',
                backgroundColor: 'rgba(90, 180, 120, 1)',
                data: [3857, 6150, 7621, 12311, 8593]
            },
            {
                label: 'C. Primera',
                backgroundColor: 'rgba(120, 150, 220, 1)',
                data: [0, 0, 1988, 0, 3500]
            },
            {
                label: 'Avena',
                backgroundColor: 'rgba(180, 170, 80, 1)',
                data: [3636, 3551, 6399, 3616, 3813]
            },
            {
                label: 'Cebada',
                backgroundColor: 'rgba(250, 200, 10, 1)',
                data: [0, 0, 0, 5526, 3491]
            },
            {
                label: 'Total',
                // backgroundColor: '#f01313',
                data: [67176, 38195, 99502, 101393, 95894],
                type: 'line',
                yAxisID: 'right-y-axis',
                fill: false,
                borderColor: 'rgba(0, 0, 0, 1)'
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Venta Bls'
            },
            scales: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                },
                {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        // color: "rgba(0, 0, 0, 0)",
                        display: false
                    },
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 120000,
                        min: 0
                    },
                }
                ],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
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
