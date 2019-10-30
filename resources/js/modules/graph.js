module.exports = {
    /**
     * Get options using field data
     *
     * @param field
     * @returns {{dataLabels: {enabled: boolean}, xaxis: {tickAmount: number, axisTicks: {show: boolean}, min: number, categories: *, lines: {show: boolean}, axisBorder: {show: boolean}, labels: {show: boolean}}, grid: {padding: {top: number, left: number, bottom: number, right: number}, xaxis: {lines: {show: boolean}}, show: boolean, column: {opacity: number}, row: {opacity: number}, yaxis: {lines: {show: boolean}}}, legend: {show: boolean}, tooltip: {show: boolean}, fill: {colors: [string]}, chart: {toolbar: {autoSelected: string, show: boolean, tools: {download: boolean, selection: boolean, customIcons: [], zoomin: boolean, reset: boolean, zoom: boolean, zoomout: boolean, pan: boolean}}, type: string, sparkline: {enabled: boolean}}, yaxis: {tickAmount: number, axisTicks: {show: boolean}, min: number, lines: {show: boolean}, axisBorder: {show: boolean}, labels: {show: boolean}}}}
     */
    getOptions: (field) => {
        return {
            fill: {
                colors: ['#4099de']
            },
            dataLabels: {
                enabled: false,
            },
            grid: {
                show: true,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                xaxis: {
                    lines: {
                        show: false,
                    }
                },
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                row: {
                    opacity: 0,
                },
                column: {
                    opacity: 0,
                }
            },
            legend: {
                show: false,
            },
            chart: {
                type: 'area',
                toolbar: {
                    show: false,
                    tools: {
                        download: false,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false,
                        customIcons: []
                    },
                    autoSelected: 'zoom'
                },
                sparkline: {
                    enabled: false,
                }
            },
            tooltip: {
                show: false,
            },
            xaxis: {
                tickAmount: 1,
                min: 0,
                lines: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                categories: field.data.map((data) => {
                    return data.index
                })
            },
            yaxis: {
                tickAmount: 1,
                min: 0,
                lines: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            }
        }
    }
};
