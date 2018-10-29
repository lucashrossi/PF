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
                {label: '2018 Buck',
                data: [13, 30, 16, 61, 37, 38, 79, 100],
                // data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                // data: [6, 4, 33, 2, 6, 11, 1, 19, 3, 10, 2, 1, 1],

                backgroundColor: "rgba(50,150,100, 0.4)",
                },
                {label: '2018 SY',
                data: [87, 70, 84, 39, 63, 62, 21, 0],
                // data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                // data: [6, 4, 33, 2, 6, 11, 1, 19, 3, 10, 2, 1, 1],

                backgroundColor: "rgba(10,20,100,0.4)",
                },
                {label: '2017 Buck',
                data: [52, 40, 28, 67, 22, 31, 71, 18],
                // data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                // data: [16, 14, 33, 12, 16, 11, 11, 19, 3, 10, 2, 1, 1],

                backgroundColor: "rgba(50,150,100, 0.2)",
                },
                {label: '2017 SY',
                data: [48, 60, 72, 33, 78, 69, 29, 82],
                // data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                // data: [16, 14, 33, 12, 16, 11, 11, 19, 3, 10, 2, 1, 1],

                backgroundColor: "rgba(10,20,100,0.2)",
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
                text: 'Porcentaje Buck vs SY'
            },
            scale: {
                yAxes: [{ 
                scaleLabel: {
                    display: true,
                    labelString: ""
                }
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
                    max: 100,
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
                    top: 20,
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
