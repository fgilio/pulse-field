import VueApexCharts from 'vue-apexcharts'

Nova.booting((Vue, router, store) => {
    Vue.component('apexchart', VueApexCharts)
    Vue.component('index-pulse-field', require('./components/IndexField'))
    Vue.component('detail-pulse-field', require('./components/DetailField'))
    Vue.component('form-pulse-field', require('./components/FormField'))
})
