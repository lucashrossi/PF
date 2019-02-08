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
            label: 'Totales',
            data: [4492600, 5797526, 3894571, 3005632, 5032001, 3285038, 3965552, 4187626, 3863344],
            type: 'line',
            yAxisID: 'right-y-axis',
            fill: false,
            showLine: false,
            pointRadius: 5,
            // pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255, 0, 0, 1)'
            },
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
            backgroundColor: 'rgba(200, 50, 0)',
            data: [159183, 442202, 394354, 465320, 990274, 509433, 472121, 431950, 442742]
            },
            {
            label: 'Sursem',
            backgroundColor: '#808050',
            data: [339630, 594849, 582008, 253843, 348794, 164663, 139093, 148232, 135284],
            // hidden: true,
            },
            {
            label: 'Bioceres',
            backgroundColor: '#581383',
            data: [265431, 465293, 298950, 175687, 380487, 224061, 161632, 162907, 252811],
            // hidden: true,
            },
            {
            label: 'Otros',
            backgroundColor: '#987979',
            data: [39245, 58079, 47809, 47919, 106962, 121544, 145511, 165823, 197830],
            // hidden: true,
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
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 6000000,
                        min: 0
                    },
                },
                {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    display: false,
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 6000000,
                        min: 0
                    },
                }
                ]
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
                    render: () => {},
                    // render: 'label',
                    // render: 'value',
                    // render: function (args) {
                        // args will be something like:
                        // { label: 'Label', value: 123, percentage: 50, index: 0, dataset: {...} }
                        // return (args.percentage != 50 ) ? args.percentage + '%' : ''
                    // },
                    precision: 0,
                    // showActualPercentages: true,
                    fontSize: 10,
                    fontColor: '#abc',
                    // position: 'outside',
                    // outsidePadding: 4,
                    overlap: false,
                },
                datalabels: {
                     //display: false,

                  
                    formatter: (value, ctx) => {

                        let percentage = 0
                        
                        let datasets = ctx.chart.data.datasets

                        if (datasets.indexOf(ctx.dataset) == 0) {
                            percentage = ''
                            
                   
                        } else {
                    
                            if (datasets.indexOf(ctx.dataset) > 0) {
                                    
                                    let sum0 = ctx.chart.data.datasets[0].data[ctx.dataIndex];


                                    let parcial1 = ctx.chart.data.datasets[1].data[ctx.dataIndex];
                                    let parcial2 = ctx.chart.data.datasets[2].data[ctx.dataIndex];
                                    let parcial3 = ctx.chart.data.datasets[3].data[ctx.dataIndex];
                                    let parcial4 = ctx.chart.data.datasets[4].data[ctx.dataIndex];
                                    let parcial5 = ctx.chart.data.datasets[5].data[ctx.dataIndex];
                                    let parcial6 = ctx.chart.data.datasets[6].data[ctx.dataIndex];
                                    let parcial7 = ctx.chart.data.datasets[7].data[ctx.dataIndex];
                                    let parcial8 = ctx.chart.data.datasets[8].data[ctx.dataIndex];
                                   
                         
                                    if (!ctx.chart.isDatasetVisible(1))  sum0 = sum0 - parcial1;
                                    if (!ctx.chart.isDatasetVisible(2))  sum0 = sum0 - parcial2;
                                    if (!ctx.chart.isDatasetVisible(3))  sum0 = sum0 - parcial3;
                                    if (!ctx.chart.isDatasetVisible(4))  sum0 = sum0 - parcial4;
                                    if (!ctx.chart.isDatasetVisible(5))  sum0 = sum0 - parcial5;
                                    if (!ctx.chart.isDatasetVisible(6))  sum0 = sum0 - parcial6;
                                    if (!ctx.chart.isDatasetVisible(7))  sum0 = sum0 - parcial7;
                                    if (!ctx.chart.isDatasetVisible(8))  sum0 = sum0 - parcial8;
                        

                                    percentage = (value*100 / sum0).toFixed(0)+"%";
                                
                            } 
                        }
                        
                        return percentage;
                    },


                    // formatter: (value, ctx) => {

                    //     let datasets = ctx.chart.data.datasets;
                        
                    //     if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                    //         let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                    //         let percentage = Math.round((value / sum) * 100) + '%';
                    //         return percentage;
                    //     } else {
                    //         return percentage;
                    //     }
                    // },
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