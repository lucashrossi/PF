<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['Original', 'Primera', 'Fiscalizadas', 'Regalias'],
            datasets: [
                {
                // label: '2018',
                data: [2285145, 853245, 442742, 688052],
                backgroundColor: ['rgba(180,50,60, 1)', 'rgba(80,150,80, 1)','rgba(130, 130, 130, 1)','rgba(50, 150, 150, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0]
                },
                {
                // label: '2018',
                data: [50781, 56883, 442742, 0],
                backgroundColor: ['rgba(180,50,60, 1)', 'rgba(80,150,80, 1)','rgba(130, 130, 130, 1)','rgba(50, 150, 150, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0]
                },
                {
                // label: '2017',
                data: [0, 0, 0, 172013],
                backgroundColor: ['rgba(180,50,60, 1)', 'rgba(80,150,80, 1)','rgba(130, 130, 130, 1)','rgba(50, 150, 150, 1)'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0],
                }
                
                ]
        },
        options: {
            cutoutPercentage: 30,
            title: {
                display: true,
                text: 'U$S Bls Has'
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,
                    filter: function(legendItem, data) {
                            // return legendItem.index != 1
                            return legendItem.index < 5 
                    }
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
                    // render: () => {}
                },
                datalabels: {
                    display: false
                }
            },
            // scales: {
            //     yAxes: [{ 
            //     scaleLabel: {
            //         display: true,
            //         labelString: ""
            //     }
            //     }],
            //     xAxes: [{ 
            //     scaleLabel: {
            //         display: true,
            //         labelString: ""
            //     }
            //     }]
            // },
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