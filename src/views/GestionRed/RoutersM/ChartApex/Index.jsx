import React from 'react'
import ApexCharts from 'apexcharts'
function Index({ traficData }) {
    const chartRef = React.useRef(null)

    React.useEffect(() => {
        let chart

        if (traficData.length > 0) {
            const options = {
                series: [
                    {
                        name: 'rx-bits',
                        data: traficData.map(item => item['rx-bits-per-second'])
                    },
                    {
                        name: 'tx-bits',
                        data: traficData.map(item => item['tx-bits-per-second'])
                    },
                    {
                        name: 'fp-rx',
                        data: traficData.map(item => item['fp-rx-bits-per-second'])
                    },
                    {
                        name: 'fp-tx',
                        data: traficData.map(item => item['fp-tx-packets-per-second'])
                    }
                ],

                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
            }
            chart = new ApexCharts(chartRef.current, options);
            chart.render();

            // Limpieza
            return () => {
                if (chart) {
                    chart.destroy();
                }
            };
        }
    })

    return (
        <><div id="chart" ref={chartRef}></div></>
    )
}

export default Index