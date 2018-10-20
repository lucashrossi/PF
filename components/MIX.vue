<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            labels: ["2014", "2015", "2016", "2017"],
            datasets: [{
                label: 'Bar Dataset',
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850"],
                data: [10, 20, 30, 40]
                }, {
                label: 'Line Dataset',
                
                data: [5, 30, 45, 20],

                // Changes this dataset to become a line
                type: 'line'
                }],
            labels: ['January', 'February', 'March', 'April']
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