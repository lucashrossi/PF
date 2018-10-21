<script>
import { Radar } from 'vue-chartjs'

export default {
    extends: Radar,

    data () {
        return {
        datacollection: {
            // labels: ['BUENOS AIRES', 'CAPITAL', 'CORDOBA', 'SANTA FE', 'LA PAMPA', 'ENTRE RIOS', 'TUCUMAN', 'SALTA', 'S. DEL ESTERO', 'JUJUY', 'CHACO'],
            // labels: ['DESTELLO', 'BELLACO', 'SY 120', 'SY 200', 'SY 211', 'METEORO', 'SY 300', 'SY 330', 'CAMBA', 'SAETA', 'CLARAZ', 'PLENO', '55 CL2'],
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA'],

            datasets: [
                {label: '% Var Buck 2018',
                data: [1.3, 5.0, 0.9, 1.8, 7.5, 0.1, 2.3, 0.0],
                // data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                // data: [6, 4, 33, 2, 6, 11, 1, 19, 3, 10, 2, 1, 1],

                backgroundColor: "rgba(50,150,100, 0.6)",
                },
                {label: '% Var Buck 2017',
                data: [2.4, 5.7, 1.4, 5.0, 4.6, 0.2, 2.2, 0.0],
                // data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                // data: [16, 14, 33, 12, 16, 11, 11, 19, 3, 10, 2, 1, 1],

                backgroundColor: "rgba(10,20,100,0.4)",
                }
                // {label: 'N',
                // data: [10, 15, 6, 1],
                // backgroundColor: "rgba(0,0,200,0.2)",
                // },
                // {label: 'K',
                // data: [15, 20, 2, 4],
                // backgroundColor: "rgba(100, 255, 0, 0.5)",},
                ]
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            scale: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                },
                // ticks: {
                //     beginAtZero: true,
                //     // steps: 10,
                //     // stepValue: 5,
                //     max: 50,
                //     min: 0
                // }
                }],
                xAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
                }],
                // display: false,
                
                ticks: {
                    backdropColor: "rgba(0,0,0,0)",
                    beginAtZero: true,
                    // steps: 10,
                    // stepValue: 5,
                    max: 8,
                    min: 0
                }
            },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,
                    // filter: function(legendItem, data) {
                    //         // return legendItem.index != 1
                    //         return legendItem.index < 5 
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
