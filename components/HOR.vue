<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,

    data () {
        return {
        datacollection: {
            labels: ['Sudeste', 'Sudoeste', 'Norte'],
            datasets: [
                {
                label: 'Meteoro',
                backgroundColor: 'rgba(140, 186, 47, 1)',
                data: [17160, 12741, 1264]
                },
                {
                label: 'SY 100',
                backgroundColor: 'rgba(100, 116, 4, 1)',
                data: [8108, 4589, 4203]
                },
                {
                label: 'SY 300',
                backgroundColor: 'rgba(40, 194, 184, 1)',
                data: [2802, 430, 7199]
                },
                {
                label: 'SY 200',
                backgroundColor: 'rgba(185, 250, 85, 1)',
                data: [4771, 603, 1306]
                },
                {
                label: 'SY 110',
                backgroundColor: 'rgba(170, 150, 120, 1)',
                data: [2770, 560, 576]
                },
                {
                label: 'Ranquel',
                backgroundColor: 'rgba(106, 16, 19, 1)',
                data: [225, 3029, 0]
                },
                {
                label: 'Pleno',
                backgroundColor: 'rgba(200, 88, 88, 1)',
                data: [1110, 307, 1143]
                },
                {
                label: 'Malevo',
                backgroundColor: 'rgba(200, 188, 188, 1)',
                data: [158, 1240, 0]
                },
                {
                label: '55 CL2',
                backgroundColor: 'rgba(194, 82, 80, 1)',
                data: [0, 1027, 0]
                },
                {
                label: 'Baqueano',
                backgroundColor: 'rgba(94, 182, 150, 1)',
                data: [108, 286, 0]
                },
                {
                label: 'SY 015',
                backgroundColor: 'rgba(14, 82, 80, 1)',
                data: [150, 215, 0]
                },
                {
                label: 'Taita',
                backgroundColor: 'rgba(94, 82, 80, 1)',
                data: [10, 0, 338]
                },
                {
                label: 'Tilcara',
                backgroundColor: 'rgba(154, 62, 60, 1)',
                data: [200, 0, 0]
                },
                {
                label: 'SY 330',
                backgroundColor: 'rgba(50, 200, 0, 1)',
                data: [0, 0, 110]
                },
                {
                label: 'Saeta',
                backgroundColor: 'rgba(17, 17, 185, 1)',
                data: [0, 90, 0]
                },
                {
                label: '75 Aniversario',
                backgroundColor: 'rgba(50, 250, 180, 1)',
                data: [71, 0, 0]
                },
                {
                label: 'Bellaco',
                backgroundColor: 'rgba(150, 10, 0, 1)',
                data: [0, 52, 0]
                },
                {
                label: 'Chacarero',
                backgroundColor: 'rgba(120, 50, 250, 1)',
                data: [30, 0, 0]
                },
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Has 2017'
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
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: 15,
                    // filter: function(item, chart) {       
                    //     return (!item.text.includes('CHACARERO') && !item.text.includes('BELLACO') && !item.text.includes('75 ANIVERSARIO') && !item.text.includes('SAETA') && !item.text.includes('SY 330') && !item.text.includes('TILCARA'))
                    // },
                    filter: function(legendItem, chartData) {
                        return legendItem.datasetIndex < 5 
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