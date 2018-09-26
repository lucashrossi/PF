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
                label: 'REFa',
                backgroundColor: '#7979f8',
                data: [4580762, 4153000, 9150226, 11346075]
            },
            {
                label: 'RECo',
                backgroundColor: '#79f879',
                data: [4558571, 4021302, 8504298, 9948075]
            },
            {
                label: 'REAu',
                backgroundColor: '#f8f379',
                data: [1075000, 1294000, 4094000, 939274]
            },
            {
                label: 'RECa',
                backgroundColor: '#65645a',
                data: [1000120, 1274000, 3955761, 578908]
            },
            {
                label: 'REPc',
                backgroundColor: '#f87979',
                data: [22191, 131698, 645928, 1398000]
            },
            {
                label: 'REPa',
                backgroundColor: '#f01313',
                data: [74880, 20000, 138239, 360366]
            }
            ]
        }
        }
    },
    mounted () {
        // this.renderChart(data, options)  
        this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    }



}
</script>
