<template>
  <div class="nav-bar">
    <div class="left"> <slot name="left"></slot> </div>
    <div class="center"> <slot name="center"></slot> </div>
    <div class="right"> <slot name="right"></slot> </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>
  .nav-bar {
    display: flex;
    align-items:center;
    text-align: center;
    
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    height: 7%;
    box-shadow: 0 2px 5px rgba(32, 3, 3, 0.2);
  }
  .left {
    flex: 1;
  }
  .center {
    flex: 4;
  }
  .right {
    flex: 1;
  }
</style>