<template>
  <div id="nav-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavList'
}
</script>

<style scoped>
  #nav-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>