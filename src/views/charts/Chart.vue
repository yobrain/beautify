<script>
import AreaChart from './AreaChart.vue'
import BarChart from './BarChart.vue'
import DonutChart from './DonutChart.vue'
import LineChart from './LineChart.vue'

export default {
  components: {
    AreaChart,
    BarChart,
    DonutChart,
    LineChart,
  },
}
</script>
<template>
  <v-row>
    <v-col cols="6">
      <AreaChart />
    </v-col>
    <v-col cols="6">
      <BarChart />
    </v-col>
    <v-col cols="6">
      <DonutChart />
    </v-col>
    <v-col cols="6">
      <LineChart />
    </v-col>
  </v-row>
</template>
