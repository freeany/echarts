import { reactive, computed, getCurrentInstance } from 'vue'

export default function useTest() {
  const { ctx } = getCurrentInstance()
  const state = reactive({
    count: 1
  })
  const increment = () => {
    state.count++
  }

  const routerAbout = () => {
    // console.log(ctx)
    ctx.$router.push('/about')
  }

  // watchEffect(() => {
  //   document.body.innerHTML = `hello ${state.count}`
  // })
  const doubleCount = computed(() => state.count * 2)

  const a = computed(() => ctx.$store.state.test.a)
  const updateVuex = () => {
    ctx.$store.commit('setTestA', ctx.$store.state.test.a + 1)
  }
  const asyncActionVuex = () => {
    ctx.$store.dispatch('asyncActionVuex', doubleCount.value * 100)
  }
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
