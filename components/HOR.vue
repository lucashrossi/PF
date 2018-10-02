<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,

    data () {
        return {
        datacollection: {
            labels: ["2018"],
            datasets: [
            {
                label: 'Algarrobo',
                backgroundColor: '#f87979',
                data: [566060]
            },
            {
                label: 'Ceibo',
                backgroundColor: '#7979f8',
                data: [443338]
            },
            {
                label: 'ACA 360',
                backgroundColor: '#79f879',
                data: [196320]
            },
            {
                label: 'Basilio',
                backgroundColor: '#f8f379',
                data: [194986]
            },
            {
                label: 'Baguette 750',
                backgroundColor: '#65645a',
                data: [144401]
            },
            {
                label: 'Klein Serpiente',
                backgroundColor: '#f87979',
                data: [127973]
            },
            {
                label: 'ACA 303 Plus',
                backgroundColor: '#f01313',
                data: [120775]
            },
            {
                label: 'Klein Tauro',
                backgroundColor: '#f01313',
                data: [106771]
            }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
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