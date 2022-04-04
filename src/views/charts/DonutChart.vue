<template>
  <div>
    <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const options = ref({})
    const series = ref([44, 55, 41, 17, 15])

    return { options, series }
  },
}
</script>
