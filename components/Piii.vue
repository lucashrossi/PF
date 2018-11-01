<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
        datacollection: {
            labels: ['Algarrobo', 'Ceibo', 'ACA 360', 'Basilio', 'Baguette 750', 'Serpiente', 'ACA 303 Plus', 'Tauro', 'SRM Nogal 111', 'Fuste', 'Rayo', 'Nutria', 'ACA 602', 'Prometeo', 'ACA 908', 'Proteo', 'SY 330', 'Otras'],
            datasets: [{
                label: "",
                backgroundColor: ['rgba(200, 50, 100)', 'rgba(100, 200, 0)', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(150, 125, 150)', 'rgba(100, 100, 100)', 'rgba(50, 50, 50)','rgba(205, 50, 50)', 'rgba(150, 55, 50)', 'rgba(100, 150, 25)', 'rgba(50, 150, 205)', 'rgba(150, 100, 100)', 'rgba(250, 25, 50)', 'rgba(110, 110, 10)', 'rgba(10, 150, 10)','rgba(50, 200, 0, 1)'],
                data: [566060, 443338, 196320, 194986, 144401, 127973, 120775, 106771, 98.141, 94685, 93238, 90013, 86582, 84771, 79726, 74777, 69906, 1190881],
                borderWidth: [0,0,0,0,0,0,0,0]
            },
            {
                label: "",
                backgroundColor: ['rgba(200, 50, 100)', 'rgba(100, 200, 0)', 'rgba(200, 50, 255)', 'rgba(0, 100, 255)', 'rgba(50, 150, 200)', 'rgba(150, 125, 150)', 'rgba(100, 100, 100)', 'rgba(50, 50, 50)','rgba(205, 50, 50)', 'rgba(150, 55, 50)', 'rgba(100, 150, 25)', 'rgba(50, 150, 205)', 'rgba(150, 100, 100)', 'rgba(250, 25, 50)', 'rgba(110, 110, 10)', 'rgba(10, 150, 10)','rgba(50, 200, 0, 1)'],
                data: [612017,  227375, 247546, 59154, 108637, 217311, 87934, 154019,  87.224, 271201, 134420, 73701, 107037, 58480, 123592, 104147, 53834, 1458260],
                borderWidth: [0,0,0,0,0,0,0,0]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Rotulos 2018 y 2017'
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
                    top: 20,
                    bottom: 50
                }
            },
            plugins: {
                labels: {
                    // render: () => {}
                },
                datalabels: {
                    display: false
                }
            } 
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