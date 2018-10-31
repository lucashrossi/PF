<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [
            {
            label: 'SY 330',
            backgroundColor: 'rgba(50, 200, 0, 1)',
            data: [0, 0, 0, 0, 0, 4500, 62915, 53834, 69906]
            },
            {
            label: 'Esmeralda',
            backgroundColor: '#8e5ea2',
            data: [0, 0, 20370, 73441, 119091, 69515, 56721, 87345, 68774]
            },
            {
            label: 'SY 211',
            backgroundColor: 'rgba(196, 88, 80, 1)',
            data: [0, 0, 0, 0, 0, 100, 5000, 65012, 48716]
            },
            {
            label: 'Saeta',
            backgroundColor: 'rgba(17, 17, 185, 1)',
            data: [0, 0, 0, 0, 0, 1200, 26391, 15350, 41590]
            },
            {
            label: 'Topacio',
            backgroundColor: '#c45850',
            data: [0, 0, 16450, 84237, 99654, 63307, 78972, 58201, 40107]
            },
            {
            label: 'Meteoro',
            backgroundColor: 'rgba(140, 186, 47, 1)',
            data: [46073, 60904, 30445, 27394, 46379, 20555, 51449, 53136, 35743]
            },
            {
            label: 'SY 120',
            backgroundColor: 'rgba(255, 0, 0, 1)',
            data: [0, 0, 0, 0, 0, 0, 0, 2000, 29953]
            },
            {
            label: 'Zafiro',
            backgroundColor: '#148a9f',
            data: [0, 0, 0, 0, 0, 1600, 13798, 9217, 27146]
            },
            {
            label: 'Claraz',
            backgroundColor: 'rgba(225, 200, 185, 1)',
            data: [0, 0, 0, 0, 0, 0, 3500, 27549, 24220]
            },
            {
            label: 'Bellaco',
            backgroundColor: 'rgba(150, 10, 0, 1)',
            data: [0, 0, 0, 0, 0, 150, 8977, 18358, 16371]
            },
            {
            label: 'SY 300',
            backgroundColor: 'rgba(40, 194, 184, 1)',
            data: [3500, 79303, 131507, 68976, 163617, 109263, 44852, 14523, 10925]
            },
            {
            label: 'SY 200',
            backgroundColor: 'rgba(185, 250, 85, 1)',
            data: [3500, 56060, 72265, 47808, 183181, 90313, 35725, 11592, 6837]
            },
            {
            label: 'Platino',
            backgroundColor: '#24ba9f',
            data: [0, 0, 570, 18583, 11300, 100, 859, 416, 5310]
            },
            {
            label: 'Granate',
            backgroundColor: '#24ba9f',
            data: [0, 0, 350, 6215, 6511, 100, 518, 5092, 4844]
            },
            {
            label: 'Pleno',
            backgroundColor: 'rgba(200, 88, 88, 1)',
            data: [0, 0, 0, 6000, 66641, 44823, 25406, 200, 400]
            },
            {
            label: '55 CL2',
            backgroundColor: 'rgba(194, 82, 80, 1)',
            data: [6000, 1600, 0, 0, 0, 0, 0, 200, 400]
            },
            {
            label: 'Otros',
            backgroundColor: '#987979',
            data: [100110, 244335, 122397, 132666, 293900, 103907, 57038, 9925, 11500]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Rotulos'
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

                    // generateLabels: function(chart) {
                    //     return [
                    //         { 
                    //             text: 'SY 330',
                    //             fillStyle: 'red'
                    //         }
                    //     ]
                    // },

                    filter: function(legendItem, chartData) {
                        // if (legendItem.datasetIndex === 0) {
                        //     return false
                        // }
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