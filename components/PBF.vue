<script>
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,

    data () {
        return {
       
        datacollection: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            // labels: ["2010"],
            // labels: ['Red', 'Yellow', 'Blue'],
            datasets: [            
            {
                label: 'Buck',
                backgroundColor: '#f87979',
                data: [159183, 442202, 394354, 465320, 990274, 509433, 472121, 431950, 442742]
            },
            // {
            //     label: '2010',
            //     backgroundColor: '#f87979',
            //     data: [159183]
            // },
            // {
            //     label: '2011',
            //     backgroundColor: '#79f879',
            //     data: [442202]
            // },
            // {
            //     label: '2012',
            //     backgroundColor: '#f8f379',
            //     data: [394354]
            // },
            // {
            //     label: '2013',
            //     backgroundColor: '#65645a',
            //     data: [465320]
            // },
            // {
            //     label: '2014',
            //     backgroundColor: '#f87979',
            //     data: [990274]
            // },
            // {
            //     label: '2015',
            //     backgroundColor: '#f01313',
            //     data: [509433]
            // },
            // {
            //     label: '2016',
            //     backgroundColor: '#f01313',
            //     data: [472121]
            // },
            // {
            //     label: '2017',
            //     backgroundColor: '#f01313',
            //     data: [431950]
            // },
            // {
            //     label: '2018',
            //     backgroundColor: '#f01313',
            //     data: [442742]
            // }
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