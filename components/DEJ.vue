<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,

    data () {
        return {
        datacollection: {
            
            datasets: [{
                data: [20, 50, 100, 75, 25, 0],
                label: 'Left dataset',

                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis'
            }, {
                data: [0.9, 0.5, 1.0, 2.0, 1.5, 0],
                label: 'Right dataset',

                // This binds the dataset to the right y axis
                yAxisID: 'right-y-axis',
            }],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
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
                    },
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left'
    
                }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right'
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
                    //         return legendItem.index < 5 
                    // }
                }
            },
    
            // responsive: true,
            // maintainAspectRatio: false,
            pan: {
                // Boolean to enable panning
                enabled: true,

                // Panning directions. Remove the appropriate direction to disable 
                // Eg. 'y' would only allow panning in the y direction
                mode: 'xy',
                rangeMin: {
                    // Format of min pan range depends on scale type
                    x: null,
                    y: null
                },
                rangeMax: {
                    // Format of max pan range depends on scale type
                    x: null,
                    y: null
                },
                // Function called once panning is completed
                // Useful for dynamic data loading
                // onPan: funtion() { console.log('I was panned!!!'); }
            },

            // Container for zoom options
            zoom: {
                // Boolean to enable zooming
                enabled: true,

                // Enable drag-to-zoom behavior
                drag: true,

                // Zooming directions. Remove the appropriate direction to disable 
                // Eg. 'y' would only allow zooming in the y direction
                mode: 'xy',
                rangeMin: {
                    // Format of min zoom range depends on scale type
                    x: null,
                    y: null
                },
                rangeMax: {
                    // Format of max zoom range depends on scale type
                    x: null,
                    y: null
                },
                // Function called once zooming is completed
                // Useful for dynamic data loading
                // onZoom: funtion() { console.log('I was zoomed!!!'); }
            }
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