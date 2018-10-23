<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["Loreto", "Fantino", "Domine"],
            datasets: [
            {
            label: '2016Orig',
            backgroundColor: '#7979f8',
            data: [7592, 7163, 5775]
            },
            {
            label: '2016Pm',
            backgroundColor: '#79f879',
            data: [4535, 4180, 30434]
            },
            {
            label: '2017Orig',
            backgroundColor: '#f8f379',
            data: [5485, 3878, 5134]
            },
            {
            label: '2017Pm',
            backgroundColor: '#65645a',
            data: [2205, 1644, 10148]
            },
            {
            label: '2018Orig',
            backgroundColor: '#f97919',
            data: [6416, 8165, 12802]
            },
            {
            label: '2018Pm',
            backgroundColor: '#f01313',
            data: [4391, 18606, 33701]
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Bls'
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
                    // filter: function(legendItem, data) {
                    //         // return legendItem.index != 1
                    //         return legendItem.index < 5 
                    // }
                    // filter: function(item, chart) {
                    // filter: function(label) {
                        
                        // return (!item.text.includes('Otros') && !item.text.includes('Bioceres'))
                        // if (label.text != 'Otros') return true
                        // if (label.text !== 'Bioceres') return true
                
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
            },
            // responsive: false,
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