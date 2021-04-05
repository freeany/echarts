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
  return {
    state,
    increment,
    doubleCount,
    routerAbout
  }
}
