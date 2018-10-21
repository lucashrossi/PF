<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["2014", "2015", "2016", "2017"],
            datasets: [
            // {
            //     label: 'REHa',
            //     backgroundColor: '#f87979',
            //     data: [145482, 115304, 165650, 172013]
            // },
            {
                label: 'Fac',
                backgroundColor: '#7979f8',
                data: [4580762, 4153000, 9150226, 11346075]
            },
            {
                label: 'Cob',
                backgroundColor: '#79f879',
                data: [4558571, 4021302, 8504298, 9948075]
            },
            {
                label: 'Por',
                backgroundColor: '#f87979',
                data: [22191, 131698, 645928, 1398000]
            },
            {
                label: 'Aud',
                backgroundColor: '#f8f379',
                data: [1075000, 1294000, 4094000, 939274]
            },
            {
                label: 'CobAu',
                backgroundColor: '#65645a',
                data: [1000120, 1274000, 3955761, 578908]
            },
            {
                label: 'PorAu',
                backgroundColor: '#f01313',
                data: [74880, 20000, 138239, 360366]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: ''
            },
            scales: {
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
