<template>
    <panel-item :field="field">
        <template slot="value">
            <small
                v-if="!this.hasData"
                class="waiting-for-data">
                {{ __('Waiting for data') }}
            </small>
            <apexchart
                v-if="this.hasData"
                width="100%"
                height="200"
                :options="options"
                :series="series">
            </apexchart>
        </template>
    </panel-item>
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
    props: ['resource', 'resourceName', 'resourceId', 'field'],
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
    }
}
</script>
