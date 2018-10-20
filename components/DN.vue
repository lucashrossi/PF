<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,

    data () {
        return {
        datacollection: {
            labels: ['BUENOS AIRES', 'CAPITAL', 'SANTA FE', 'CORDOBA', 'ENTRE RIOS', 'TUCUMAN', 'S. DEL ESTERO', 'LA PAMPA', 'SALTA', 'JUJUY', 'CHACO'],
            datasets: [
                {
                label: 'Buck',
                data: [84690, 34893, 28179, 13903, 4319, 2777, 2528, 1983, 1312, 440, 4],
                backgroundColor: ['rgba(255,0,0)', 'rgba(50,200,0)','#3cba9f','#e8c3b9','#c45850','rgba(20,50,0)', 'rgba(20,100,20)','#38ba93','#e1c8b9','#c25250'],
                // borderColor: ['rgba(255,0,0,0)', 'rgba(50,200,0,0)', 'rgba(0,0,255,0.9)'],
                borderWidth: [0,0,0,0,0,0,0,0,0,0,0]
                },
                // {
                // label: 'N',
                // data: [10, 15, 6, 1],
                // backgroundColor: "rgba(0,0,200,0.2)",
                // },
                // {
                // label: 'K',
                // data: [15, 20, 2, 4],
                // backgroundColor: "rgba(100, 255, 0, 0.5)",
                // },
                ]
        },
        options: {
            title: {
                display: true,
                text: ''
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