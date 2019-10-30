<template>
    <span>
        <small
            v-if="!this.hasData"
            class="waiting-for-data">
            {{ __('Waiting for data') }}
        </small>
        <apexchart
            v-if="this.hasData"
            width="200px"
            height="60"
            :options="options"
            :series="series">
        </apexchart>
    </span>
</template>

<style>
    .waiting-for-data {
        color: #cccccc;
        padding-left: 10px;
    }
</style>

<script>
export default {
    props: ['resourceName', 'field'],
    data() {
        return {
            series: [{
                name: this.field.title,
                data: this.field.data.map((data) => {
                    return data.value
                })
            }],
            options: {
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
                    categories: this.field.data.map((data) => {
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
    },
    computed: {
        hasData() {
            return this.field.data.some((data) => data.value > 0);
        }
    },
    mounted() {
        //
    }
}
</script>
