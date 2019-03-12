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
                label: 'U$S',
                
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 50000
                    }, {
                        x: '1 Apr 2019', y: 150000
                    }, {
                        x: '1 May 2019', y: 200000
                    }, {
                        x: '1 Jun 2019', y: 175000
                    }, {
                        x: '1 Jul 2019', y: 75000
                    }, {
                        x: '1 Aug 2019', y: 50000
                    }, {
                        x: '1 Sep 2019', y: 25000
                    }, {
                        x: '1 Oct 2019', y: 20000
                    }, {
                        x: '1 Nov 2019', y: 5000
                    }, {
                        x: '1 Dec 2019', y: 1000
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                yAxisID: 'right-y-axis',
                fill: false,
                showLine: true,
                pointRadius: 5,
                // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 255, 0, 1)'
                },
                {
                label: 'OrigT',
                // hidden: true,
               
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 12000
                    }, {
                        x: '1 Apr 2019', y: 20790
                    }, {
                        x: '1 May 2019', y: 25827
                    }, {
                        x: '1 Jun 2019', y: 10827
                    }, {
                        x: '1 Jul 2019', y: 0
                    }, {
                        x: '1 Aug 2019', y: 0
                    }, {
                        x: '1 Sep 2019', y: 0
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(40, 150, 200, 0)',
                pointBorderColor: 'rgba(40, 150, 200, 0)',
                pointHoverBackgroundColor: 'rgba(40, 150, 200, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(40, 150, 200, 1)',
                borderWidth: 0.1
                },
                {
                label: 'PrimT',
                // hidden: true,
               
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 15000
                    }, {
                        x: '1 May 2019', y: 25000
                    }, {
                        x: '1 Jun 2019', y: 30000
                    }, {
                        x: '1 Jul 2019', y: 20000
                    }, {
                        x: '1 Aug 2019', y: 5000
                    }, {
                        x: '1 Sep 2019', y: 0
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(40, 150, 200, 0)',
                pointBorderColor: 'rgba(40, 150, 200, 0)',
                pointHoverBackgroundColor: 'rgba(40, 150, 200, 0.7)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(40, 150, 200, 0.7)',
                borderWidth: 0.1
                },
                {
                label: 'FiscT',
                // hidden: true,
               
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 25000
                    }, {
                        x: '1 May 2019', y: 35000
                    }, {
                        x: '1 Jun 2019', y: 45000
                    }, {
                        x: '1 Jul 2019', y: 30000
                    }, {
                        x: '1 Aug 2019', y: 20000
                    }, {
                        x: '1 Sep 2019', y: 5000
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(40, 150, 200, 0)',
                pointBorderColor: 'rgba(40, 150, 200, 0)',
                pointHoverBackgroundColor: 'rgba(40, 150, 200, 0.6)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(40, 150, 200, 0.6)',
                borderWidth: 0.1
                },
                {
                label: 'OrigF',
                
                // data: [100, 108789, 105790, 180827],
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 2000
                    }, {
                        x: '1 Apr 2019', y: 5790
                    }, {
                        x: '1 May 2019', y: 827
                    }, {
                        x: '1 Jun 2019', y: 827
                    }, {
                        x: '1 Jul 2019', y: 0
                    }, {
                        x: '1 Aug 2019', y: 0
                    }, {
                        x: '1 Sep 2019', y: 0
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(200, 88, 88, 0)',
                pointBorderColor: 'rgba(200, 88, 88, 0)',
                pointHoverBackgroundColor: 'rgba(200, 88, 88, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(200, 88, 88, 1)',
                borderWidth: 0.1
                },
                {
                label: 'PrimF',
                
                // data: [100, 108789, 105790, 180827],
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 5000
                    }, {
                        x: '1 May 2019', y: 5000
                    }, {
                        x: '1 Jun 2019', y: 3000
                    }, {
                        x: '1 Jul 2019', y: 2000
                    }, {
                        x: '1 Aug 2019', y: 500
                    }, {
                        x: '1 Sep 2019', y: 0
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(200, 88, 88, 0)',
                pointBorderColor: 'rgba(200, 88, 88, 0)',
                pointHoverBackgroundColor: 'rgba(200, 88, 88, 0.7)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(200, 88, 88, 0.7)',
                borderWidth: 0.1
                },
                {
                label: 'FiscF',
                
                // data: [100, 108789, 105790, 180827],
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 5000
                    }, {
                        x: '1 May 2019', y: 5000
                    }, {
                        x: '1 Jun 2019', y: 5000
                    }, {
                        x: '1 Jul 2019', y: 7000
                    }, {
                        x: '1 Aug 2019', y: 2000
                    }, {
                        x: '1 Sep 2019', y: 500
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(200, 88, 88, 0)',
                pointBorderColor: 'rgba(200, 88, 88, 0)',
                pointHoverBackgroundColor: 'rgba(200, 88, 88, 0.4)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(200, 88, 88, 0.4)',
                borderWidth: 0.1
                },
                {
                label: 'OrigA',
                
                // data: [180000, 100789, 195790, 80827],
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 1000
                    }, {
                        x: '1 Apr 2019', y: 2790
                    }, {
                        x: '1 May 2019', y: 527
                    }, {
                        x: '1 Jun 2019', y: 527
                    }, {
                        x: '1 Jul 2019', y: 0
                    }, {
                        x: '1 Aug 2019', y: 0
                    }, {
                        x: '1 Sep 2019', y: 0
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(170, 150, 120, 0)',
                pointBorderColor: 'rgba(170, 150, 120, 0)',
                pointHoverBackgroundColor: 'rgba(170, 150, 120, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(170, 150, 120, 1)',
                borderWidth: 0.1,
                
                },
                {
                label: 'PrimA',
                
                // data: [180000, 100789, 195790, 80827],
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 2000
                    }, {
                        x: '1 May 2019', y: 3000
                    }, {
                        x: '1 Jun 2019', y: 2000
                    }, {
                        x: '1 Jul 2019', y: 1000
                    }, {
                        x: '1 Aug 2019', y: 500
                    }, {
                        x: '1 Sep 2019', y: 0
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(170, 150, 120, 0)',
                pointBorderColor: 'rgba(170, 150, 120, 0)',
                pointHoverBackgroundColor: 'rgba(170, 150, 120, 0.7)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(170, 150, 120, 0.7)',
                borderWidth: 0.1,
                
                },
                {
                label: 'FiscA',
                
                // data: [180000, 100789, 195790, 80827],
                data: [
                    {
                        x: '1 Jan 2019', y: 0
                    }, {
                        x: '1 Feb 2019', y: 0
                    }, {
                        x: '1 Mar 2019', y: 0
                    }, {
                        x: '1 Apr 2019', y: 2000
                    }, {
                        x: '1 May 2019', y: 2000
                    }, {
                        x: '1 Jun 2019', y: 3000
                    }, {
                        x: '1 Jul 2019', y: 4000
                    }, {
                        x: '1 Aug 2019', y: 1000
                    }, {
                        x: '1 Sep 2019', y: 500
                    }, {
                        x: '1 Oct 2019', y: 0
                    }, {
                        x: '1 Nov 2019', y: 0
                    }, {
                        x: '1 Dec 2019', y: 0
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(170, 150, 120, 0)',
                pointBorderColor: 'rgba(170, 150, 120, 0)',
                pointHoverBackgroundColor: 'rgba(170, 150, 120, 0.4)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(170, 150, 120, 0.4)',
                borderWidth: 0.1,
                
                },
                {
                label: 'HibG',
                
                // data: [180000, 100789, 195790, 80827],
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
                        x: '1 Jul 2019', y: 0
                    }, {
                        x: '1 Aug 2019', y: 500
                    }, {
                        x: '1 Sep 2019', y: 2500
                    }, {
                        x: '1 Oct 2019', y: 5000
                    }, {
                        x: '1 Nov 2019', y: 1000
                    }, {
                        x: '1 Dec 2019', y: 200
                    }
                ],

                // Changes this dataset to become a line
                type: 'line',
                // yAxisID: 'right-y-axis',
                fill: true,
                showLine: true,
                pointRadius: 7,
                pointBackgroundColor: 'rgba(180, 180, 180, 0)',
                pointBorderColor: 'rgba(180, 180, 180, 0)',
                pointHoverBackgroundColor: 'rgba(180, 180, 180, 1)',
                pointHoverRadius: 7,
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(180, 180, 180, 1)',
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
                text: 'Bls y U$S'
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
                        max: 120000,
                        min: 0
                    },
                   
                },
                {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        // steps: 10,
                        // stepValue: 5,
                        max: 220000,
                        min: 0
                    },
                }
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
                    font: {
                        size: 10    
                    },
                    // color: 'green',
                    color: 'rgba(0, 0, 0, 0.5)',
                    // anchor: 'start',
                    // clamp: true,
                    // align: 'bottom',
                    align: 'start',
                    // display: false
                    // display: function(context) {
                    //     return context.dataIndex % 2
                        
                    // },
                    offset: -1,
                    formatter: (value, ctx) => {

                        let percentage = 0
                        
                        let datasets = ctx.chart.data.datasets

                        if (datasets.indexOf(ctx.dataset) == 0) {
                            percentage = ''
                            
                   
                        } else {
                    
                            if (datasets.indexOf(ctx.dataset) > 0) {
                                    // let aaa = ctx.chart.data.datasets[0].data[ctx.data.y]
                                    // alert(aaa)
                                    let sum0 = ctx.chart.data.datasets[1].data[ctx.dataIndex].y + ctx.chart.data.datasets[2].data[ctx.dataIndex].y + ctx.chart.data.datasets[3].data[ctx.dataIndex].y + ctx.chart.data.datasets[4].data[ctx.dataIndex].y + ctx.chart.data.datasets[5].data[ctx.dataIndex].y + ctx.chart.data.datasets[6].data[ctx.dataIndex].y + ctx.chart.data.datasets[7].data[ctx.dataIndex].y + ctx.chart.data.datasets[8].data[ctx.dataIndex].y + ctx.chart.data.datasets[9].data[ctx.dataIndex].y + ctx.chart.data.datasets[10].data[ctx.dataIndex].y;

                                    let parcial0 = ctx.chart.data.datasets[1].data[ctx.dataIndex].y;
                                    let parcial1 = ctx.chart.data.datasets[2].data[ctx.dataIndex].y;
                                    let parcial2 = ctx.chart.data.datasets[3].data[ctx.dataIndex].y;
                                    let parcial3 = ctx.chart.data.datasets[4].data[ctx.dataIndex].y;
                                    let parcial4 = ctx.chart.data.datasets[5].data[ctx.dataIndex].y;
                                    let parcial5 = ctx.chart.data.datasets[6].data[ctx.dataIndex].y;
                                    let parcial6 = ctx.chart.data.datasets[7].data[ctx.dataIndex].y;
                                    let parcial7 = ctx.chart.data.datasets[8].data[ctx.dataIndex].y;
                                    let parcial8 = ctx.chart.data.datasets[9].data[ctx.dataIndex].y;
                                    let parcial9 = ctx.chart.data.datasets[10].data[ctx.dataIndex].y;
                                   
                                    if (!ctx.chart.isDatasetVisible(1))  sum0 = sum0 - parcial0;
                                    if (!ctx.chart.isDatasetVisible(2))  sum0 = sum0 - parcial1;
                                    if (!ctx.chart.isDatasetVisible(3))  sum0 = sum0 - parcial2;
                                    if (!ctx.chart.isDatasetVisible(4))  sum0 = sum0 - parcial3;
                                    if (!ctx.chart.isDatasetVisible(5))  sum0 = sum0 - parcial4;
                                    if (!ctx.chart.isDatasetVisible(6))  sum0 = sum0 - parcial5;
                                    if (!ctx.chart.isDatasetVisible(7))  sum0 = sum0 - parcial6;
                                    if (!ctx.chart.isDatasetVisible(8))  sum0 = sum0 - parcial7;
                                    if (!ctx.chart.isDatasetVisible(9))  sum0 = sum0 - parcial8;
                                    if (!ctx.chart.isDatasetVisible(10))  sum0 = sum0 - parcial9;
                                    
                                    if (sum0 == 0)
                                        percentage = 0

                                    else
                                        percentage = (value.y * 100 / sum0).toFixed(0)+"%"
                                        if (percentage == '0%' || percentage == '0')
                                            percentage = ""
                                
                            } 
                        }
                        
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