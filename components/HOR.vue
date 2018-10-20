<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,

    data () {
        return {
        datacollection: {
            labels: ['SUDESTE', 'SUDOESTE', 'NORTE'],
            datasets: [
                {
                label: 'METEORO',
                backgroundColor: '#35645a',
                data: [17160, 12741, 1264]
                },
                {
                label: 'SY 100',
                backgroundColor: '#801313',
                data: [8108, 4589, 4203]
                },
                {
                label: 'SY 300',
                backgroundColor: '#f87979',
                data: [2802, 430, 7199]
                },
                {
                label: 'SY 200',
                backgroundColor: '#797918',
                data: [4771, 603, 1306]
                },
                {
                label: 'SY 110',
                backgroundColor: '#f81379',
                data: [2770, 560, 576]
                },
                {
                label: 'RANQUEL',
                backgroundColor: '#501313',
                data: [225, 3029, 0]
                },
                {
                label: 'PLENO',
                backgroundColor: '#925193',
                data: [1110, 307, 1143]
                },
                {
                label: 'MALEVO',
                backgroundColor: '#f8f379',
                data: [158, 1240, 0]
                },
                {
                label: '55 CL2',
                backgroundColor: '#100000',
                data: [0, 1027, 0]
                },
                {
                label: 'BAQUEANO',
                backgroundColor: '#7979f8',
                data: [108, 286, 0]
                },
                {
                label: 'SY 015',
                backgroundColor: '',
                data: [150, 215, 0]
                },
                {
                label: 'TAITA',
                backgroundColor: '#251313',
                data: [10, 0, 338]
                },
                {
                label: 'TILCARA',
                backgroundColor: '#f87979',
                data: [200, 0, 0]
                },
                {
                label: 'SY 330',
                backgroundColor: '#805050',
                data: [0, 0, 110]
                },
                {
                label: 'SAETA',
                backgroundColor: '#485379',
                data: [0, 90, 0]
                },
                {
                label: '75 ANIVERSARIO',
                backgroundColor: '#f87979',
                data: [71, 0, 0]
                },
                {
                label: 'BELLACO',
                backgroundColor: '#f01313',
                data: [0, 52, 0]
                },
                {
                label: 'CHACARERO',
                backgroundColor: '#79f879',
                data: [30, 0, 0]
                },
            ]
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    stacked: true
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    stacked: true
                }]
            },
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