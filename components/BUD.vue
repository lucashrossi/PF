<script>
import { Bubble } from 'vue-chartjs'

export default {
    extends: Bubble,

    data () {
        return {
        datacollection: {
            labels: ['Girasol', 'Avena', 'Fideo', 'Pan'],
            datasets: [
                // {
                // label: ["Girasol"],
                // backgroundColor: "rgba(255, 0, 0, 0.6)",
                // // borderColor: "rgba(255, 0, 0,1)",
                // // hoverBackgroundColor: "'rgba(255, 0, 0, 0.2)",
                // data: [{
                //     x: 45000,
                //     y: 1000,
                //     r: 35000
                // }]
                // }, 
                {
                label: ["Avena"],
                backgroundColor: "rgba(100, 255, 0, 0.6)",
                // borderColor: "rgba(100, 255, 0,1)",
                data: [{
                    x: 575505,
                    y: 12839,
                    // r: -63945=511560
                    r: 5.1
                }]
                },
                {
                label: ["Fideo"],
                backgroundColor: "rgba(200, 50, 255, 0.6)",
                // borderColor: "rgba(200, 50, 255,0.1)",
                data: [{
                    x: 588271,
                    y: 155790,
                    // r: -48045=540226
                    r: 5.4
                }]
                },
                {
                label: ["Pan"],
                backgroundColor: "rgba(0, 100, 255, 0.6)",
                // borderColor: "rgba(0, 100, 255,1)",
                data: [{
                    x: 3070093,
                    y: 466833,
                    // r: -421330=2648763
                    r: 26.4
                }]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'U$S Neto (*100mil)'
            }, 
            scales: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: "Bls (Orig, 1ª, fisc) + Reg (2bls/ha)"
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
                    labelString: "U$S Bls (Orig, 1ª, fisc) + Reg"
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
                    top: 0,
                    bottom: 0
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