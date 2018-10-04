<script>
import { Radar } from 'vue-chartjs'

export default {
    extends: Radar,

    data () {
        return {
        datacollection: {
            // labels: ['BUENOS AIRES', 'CAPITAL', 'CORDOBA', 'SANTA FE', 'LA PAMPA', 'ENTRE RIOS', 'TUCUMAN', 'SALTA', 'S. DEL ESTERO', 'JUJUY', 'CHACO'],
            labels: ['METEORO', 'SY 300', 'SY 110', 'SY 200', 'SY 100', 'BELLACO', 'SY 330', 'PLENO', 'RANQUEL', 'SAETA', 'ZAFIRO', 'TAITA', 'MALEVO', 'SY 211', 'BAQUEANO', 'TILCARA', 'AGP FAST', '75 ANIVERSARIO', 'SY 015', '55 CL2', 'CLARAZ'],

            datasets: [
                {label: 'Buck',
                // data: [84690, 34893, 13903, 28179, 1983, 4319, 2777, 1312, 2528, 440, 4],
                data: [49859, 31798, 25196, 17604, 13762, 9537, 6891, 6461, 2455, 2048, 1937, 1552, 1489, 1001, 663, 606, 531, 392, 332, 245, 173],

                backgroundColor: "rgba(200,0,0,0.2)",
                },
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
            scale: {
                
                // display: false
                
                ticks: {
                    backdropColor: "rgba(0,0,0,0)" 
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
