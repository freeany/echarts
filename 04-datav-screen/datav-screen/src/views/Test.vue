<template>
  <button @click="increment">{{ state.count }} {{ doubleCount }}</button>
  <button @click="routerAbout">goto about</button>
</template>

<script>
import useTest from './useTest'
export default {
  setup() {
    const { state, increment, doubleCount, routerAbout } = useTest()
    return {
      state,
      increment,
      doubleCount,
      routerAbout
    }
  }
}
</script>
