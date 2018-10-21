<script>
import { Bubble } from 'vue-chartjs'

export default {
    extends: Bubble,

    data () {
        return {
        datacollection: {
            labels: ["China", "Denmark", "Germany", "Japan"],
            datasets: [
                {
                label: ["China"],
                backgroundColor: "rgba(255,221,50,0.2)",
                borderColor: "rgba(255,221,50,1)",
                data: [{
                    x: 21269017,
                    y: 5.245,
                    r: 30
                }]
                }, {
                label: ["Denmark"],
                backgroundColor: "rgba(60,186,159,0.2)",
                borderColor: "rgba(60,186,159,1)",
                data: [{
                    x: 258702,
                    y: 7.526,
                    r: 10
                }]
                }, {
                label: ["Germany"],
                backgroundColor: "rgba(0,0,0,0.2)",
                borderColor: "#000",
                data: [{
                    x: 3979083,
                    y: 6.994,
                    r: 15
                }]
                }, {
                label: ["Japan"],
                backgroundColor: "rgba(193,46,12,0.2)",
                borderColor: "rgba(193,46,12,1)",
                data: [{
                    x: 4931877,
                    y: 5.921,
                    r: 20
                }]
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
                    //         // return legendItem.index != 1
                    //         return legendItem.index < 3
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