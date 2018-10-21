<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,

    data () {
        return {
        datacollection: {
            
            datasets: [{
                data: [790, 8970, 2367, 1326, 10193, 2964, 150],
                label: 'Ventas 2018',

                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis'
            }, {
                data: [-61, 130, 20, 56, 114, 29, 48, 100],
                label: 'Diferencia 2017',

                // This binds the dataset to the right y axis
                yAxisID: 'right-y-axis',
            }],
            labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA']
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
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 50
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