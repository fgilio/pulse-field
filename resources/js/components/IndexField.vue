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
const Graph = require('../modules/graph');

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
            options: Graph.getOptions(this.field)
        }
    },
    computed: {
        /**
         * Get if field has data for rendering.
         *
         * @returns boolean
         */
        hasData() {
            return this.field.data.some((data) => data.value > 0);
        }
    },
    mounted() {
        //
    }
}
</script>
