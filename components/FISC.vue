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
            label: 'Nidera',
            backgroundColor: '#7979f8',
            data: [1864133, 2190943, 1097654, 878456, 1487360, 743713, 660973, 336322, 292911]
            },
            {
            label: 'Klein',
            backgroundColor: '#79f879',
            data: [734059, 837279, 648943, 569879, 816646, 588624, 857017, 913199, 782067]
            },
            {
            label: 'ACA',
            backgroundColor: '#f8f379',
            data: [543339, 742907, 570678, 455346, 649381, 691692, 684656, 884110, 623875]
            },
            {
            label: 'Don Mario',
            backgroundColor: '#65645a',
            data: [547580, 465974, 254175, 159182, 252097, 241308, 844549, 1145083, 1135824]
            },
            {
            label: 'Buck',
            backgroundColor: '#f97919',
            data: [159183, 442202, 394354, 465320, 990274, 509433, 472121, 431950, 442742]
            },
            {
            label: 'Sursem',
            backgroundColor: '#f01313',
            data: [339630, 594849, 582008, 253843, 348794, 164663, 139093, 148232, 135284]
            },
            {
            label: 'Bioceres',
            backgroundColor: '#581383',
            data: [265431, 465293, 298950, 175687, 380487, 224061, 161632, 162907, 252811]
            },
            {
            label: 'Otros',
            backgroundColor: '#987979',
            data: [39245, 58079, 47809, 47919, 106962, 121544, 145511, 165823, 197830]
            }
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