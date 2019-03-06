<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,

    data () {
        return {
        datacollection: {
            // labels: ['Girasol', 'Avena', 'Fideo', 'Pan'],
            // labels: [newDate(-3), newDate(-2), newDate(-1), newDate(0)],
            datasets: [
                          
                {
                label: 'Venta',
                // hidden: true,
               
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 0
                    }, {
                        x: '1 May 2019', y: 0
                    }, {
                        x: '1 Jun 2019', y: 0
                    }, {
                        x: '1 Jul 2019', y: 10000
                    }, {
                        x: '1 Aug 2019', y: 10000
                    }, {
                        x: '1 Sep 2019', y: 12789
                    }, {
                        x: '1 Oct 2019', y: 155790
                    }, {
                        x: '1 Nov 2019', y: 280827
                    }, {
                        x: '1 Dec 2019', y: 80827
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(50, 205,250, 0)',
                pointBorderColor: 'rgba(50, 205,250, 0)',
                pointHoverBackgroundColor: 'rgba(50, 205,250, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(50, 205,250, 1)',
                borderWidth: 0.1
                }, 
                {
                label: 'Rent',
                
                // data: [100, 108789, 105790, 180827],
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 1000
                    }, {
                        x: '1 May 2019', y: 108789
                    }, {
                        x: '1 Jun 2019', y: 105790
                    }, {
                        x: '1 Jul 2019', y: 105790
                    }, {
                        x: '1 Aug 2019', y: 180827
                    }, {
                        x: '1 Sep 2019', y: 80827
                    }, {
                        x: '1 Oct 2019', y: 80827
                    }, {
                        x: '1 Nov 2019', y: 80827
                    }, {
                        x: '1 Dec 2019', y: 80827
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(150, 5,20, 0)',
                pointBorderColor: 'rgba(150, 5,20, 0)',
                pointHoverBackgroundColor: 'rgba(150, 5,20, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(150, 5,20, 1)',
                borderWidth: 0.1
                },
                {
                label: 'RentT',
                
                // data: [180000, 100789, 195790, 80827],
                data: [
                    {
                        x: '1 Jan 2019', y: 180000
                    }, {
                        x: '1 Feb 2019', y: 100789
                    }, {
                        x: '1 Mar 2019', y: 100789
                    }, {
                        x: '1 Apr 2019', y: 100789
                    }, {
                        x: '1 May 2019', y: 100789
                    }, {
                        x: '1 Jun 2019', y: 100789
                    }, {
                        x: '1 Jul 2019', y: 100789
                    }, {
                        x: '1 Aug 2019', y: 100789
                    }, {
                        x: '1 Sep 2019', y: 100789
                    }, {
                        x: '1 Oct 2019', y: 195790
                    }, {
                        x: '1 Nov 2019', y: 80827
                    }, {
                        // x: '31 Dec 2019', y: 827
                        x: '1 Dec 2019', y: 1
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(100, 20,200, 0)',
                pointBorderColor: 'rgba(100, 20,200, 0)',
                pointHoverBackgroundColor: 'rgba(100, 20,200, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(100, 20,200, 1)',
                borderWidth: 0.1,
                
                },
                {
                label: 'T',
                
                // data: [180000, 100789, 195790, 80827],
                data: [
                    {
                        x: '1 Jan 2019', y: 380000
                    }, {
                        x: '1 Feb 2019', y: 100789
                    }, {
                        x: '1 Mar 2019', y: 100789
                    }, {
                        x: '1 Apr 2019', y: 100789
                    }, {
                        x: '1 May 2019', y: 100789
                    }, {
                        x: '1 Jun 2019', y: 50789
                    }, {
                        x: '1 Jul 2019', y: 50789
                    }, {
                        x: '1 Aug 2019', y: 50789
                    }, {
                        x: '1 Sep 2019', y: 50789
                    }, {
                        x: '1 Oct 2019', y: 105790
                    }, {
                        x: '1 Nov 2019', y: 300827
                    }, {
                        x: '1 Dec 2019', y: 827
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(60, 70, 60, 0)',
                pointBorderColor: 'rgba(60, 70, 60, 0)',
                pointHoverBackgroundColor: 'rgba(60, 70, 60, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(60, 70, 60, 1)',
                borderWidth: 0.1,
                
                },
                {
                label: 'Re',
                
                // data: [180000, 100789, 195790, 80827],
                data: [
                    {
                        x: '1 Jan 2019', y: 30000
                    }, {
                        x: '1 Feb 2019', y: 100789
                    }, {
                        x: '1 Mar 2019', y: 100789
                    }, {
                        x: '1 Apr 2019', y: 100789
                    }, {
                        x: '1 May 2019', y: 100789
                    }, {
                        x: '1 Jun 2019', y: 400789
                    }, {
                        x: '1 Jul 2019', y: 400789
                    }, {
                        x: '1 Aug 2019', y: 400789
                    }, {
                        x: '1 Sep 2019', y: 400789
                    }, {
                        x: '1 Oct 2019', y: 125790
                    }, {
                        x: '1 Nov 2019', y: 20827
                    }, {
                        x: '1 Dec 2019', y: 40827
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(80, 90, 220, 0)',
                pointBorderColor: 'rgba(80, 90, 220, 0)',
                pointHoverBackgroundColor: 'rgba(80, 90, 220, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(80, 90, 220, 1)',
                borderWidth: 0.1,
                
                },
                
                ],
            // labels: ['I', 'IIN', 'IIS', 'III', 'IV', 'VN', 'VS', 'NOA']
        },
        options: {
            // elements: {
            //     line: {
            //         tension: 0, // disables bezier curves
            //     }
            // },
            title: {
                display: true,
                text: 'Area'
            },
            scales: {
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 1000000,
                        min: 0
                    },
                   
                }, 
                // {   
                //     stacked: true,
                //     id: 'right-y-axis',
                //     type: 'linear',
                //     position: 'right',
                //     ticks: {
                //         beginAtZero: true,
                //         // steps: 10,
                //         // stepValue: 5,
                //         max: 100,
                //         min: -100
                //     },
                //     gridLines: {
                //         display: false,
                //         // offsetGridLines: true
                //     }
                // }
                ],
                xAxes: [{
                    type: 'time',
                    // distribution: 'series',
                    time: {
                        unit: 'month',
                        // unit: 'day',
                        // round: 'day',
                        displayFormats: {
                            month: 'MMM'
                            // day: 'DD MMM'
                        },
                        stepSize: 1
                    },
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: ""
                    },
                    ticks: {
                        autoSkip: false
                        // source: 'data'
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
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            plugins: {
                labels: {
                    render: () => {}
                },
                datalabels: {
                    // display: false
                    formatter: (value, ctx) => {

                        let percentage = 0
                        
                        let datasets = ctx.chart.data.datasets

                        // if (datasets.indexOf(ctx.dataset) == 0) {
                        //     percentage = ''
                            
                   
                        // } else {
                    
                        //     if (datasets.indexOf(ctx.dataset) > 0) {
                                    // let aaa = ctx.chart.data.datasets[0].data[ctx.data.y]
                                    // alert(aaa)
                                    let sum0 = ctx.chart.data.datasets[0].data[ctx.dataIndex].y + ctx.chart.data.datasets[1].data[ctx.dataIndex].y + ctx.chart.data.datasets[2].data[ctx.dataIndex].y + ctx.chart.data.datasets[3].data[ctx.dataIndex].y + ctx.chart.data.datasets[4].data[ctx.dataIndex].y;

                                    let parcial0 = ctx.chart.data.datasets[0].data[ctx.dataIndex].y;
                                    let parcial1 = ctx.chart.data.datasets[1].data[ctx.dataIndex].y;
                                    let parcial2 = ctx.chart.data.datasets[2].data[ctx.dataIndex].y;
                                    let parcial3 = ctx.chart.data.datasets[3].data[ctx.dataIndex].y;
                                    let parcial4 = ctx.chart.data.datasets[4].data[ctx.dataIndex].y;
                                    // let parcial5 = ctx.chart.data.datasets[5].data[ctx.dataIndex];
                                    // let parcial6 = ctx.chart.data.datasets[6].data[ctx.dataIndex];
                                    // let parcial7 = ctx.chart.data.datasets[7].data[ctx.dataIndex];
                                    // let parcial8 = ctx.chart.data.datasets[8].data[ctx.dataIndex];
                                   
                                    if (!ctx.chart.isDatasetVisible(0))  sum0 = sum0 - parcial0;
                                    if (!ctx.chart.isDatasetVisible(1))  sum0 = sum0 - parcial1;
                                    if (!ctx.chart.isDatasetVisible(2))  sum0 = sum0 - parcial2;
                                    if (!ctx.chart.isDatasetVisible(3))  sum0 = sum0 - parcial3;
                                    if (!ctx.chart.isDatasetVisible(4))  sum0 = sum0 - parcial4;
                                    // if (!ctx.chart.isDatasetVisible(5))  sum0 = sum0 - parcial5;
                                    // if (!ctx.chart.isDatasetVisible(6))  sum0 = sum0 - parcial6;
                                    // if (!ctx.chart.isDatasetVisible(7))  sum0 = sum0 - parcial7;
                                    // if (!ctx.chart.isDatasetVisible(8))  sum0 = sum0 - parcial8;
                        
                                    
                                    if (sum0 == 0)
                                        percentage = 0;
                                    else
                                    percentage = (value.y * 100 / sum0).toFixed(0)+"%";
                                
                        //     } 
                        // }
                        
                        return percentage;
                    },
                }
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