<template>
  <div>
    <group>
      <calendar v-model="demo1" title="Basic Usage" disable-past></calendar>
    </group>
    <group>
      <calendar v-model="demo2" title="set value as TODAY" disable-past></calendar>
    </group>
    <group>
      <calendar v-model="demo3" title="disable future" disable-future></calendar>
    </group>
  </div>
</template>
<script>
import { Group, Calendar, Cell } from 'vux'

export default {
  components: {
    Calendar,
    Group,
    Cell
  },
  data () {
    return {
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY'
    }
  }
}
</script>
<style scoped>
	
</style>
