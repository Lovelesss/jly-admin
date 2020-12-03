<template>
  <div class="home-wrapper">
    <FunctionButton>
      <button>一</button>
      <button>2</button>
    </FunctionButton>
  </div>
</template>

<script>
import FunctionButton from '@/components/funcion-button.js'
const a = 1
export default {
  name: 'Home',
  components: {
    FunctionButton
  }
}
</script>

<style scoped lang="less">
  .home-wrapper {
    padding: 24px;
  }
</style>
