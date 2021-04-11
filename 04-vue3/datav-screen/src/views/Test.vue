<template>
  <button @click="increment">{{ state.count }} {{ doubleCount }}</button>
  <button @click="routerAbout">goto about</button>
  <div>vuex中的数据{{ a }}</div>
  <div>更新vuex中的数据 <button @click="updateVuex">更新</button></div>
  <div>异步更新vuex中的数据 <button @click="asyncActionVuex">更新</button></div>
</template>

<script>
import useTest from './useTest'
export default {
  setup() {
    const { state, increment, doubleCount, routerAbout, a, updateVuex, asyncActionVuex } = useTest()
    return {
      state,
      increment,
      doubleCount,
      routerAbout,
      a,
      updateVuex,
      asyncActionVuex
    }
  }
}
</script>
