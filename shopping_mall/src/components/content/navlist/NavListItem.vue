<template>
  <div class="nav-list-item">
    <div class="nav-list-item-text">{{this.title}}</div>
    <div class="nav-list-item-img-box">
      <div class="nav-list-item-img-box-item">
        <slot name="left"></slot>
      </div>
      <div class="nav-list-item-img-box-item">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavListItem',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style>
  .nav-list-item {
    box-sizing: border-box;
    width: 50%;
    background-color: #fff;
    padding-bottom: 10px;
  }
  .nav-list-item:nth-child(even) {
    border-left: 1px solid #eaeaea;
  }

  .nav-list-item-text {
    font-weight: 700;
    font-size: 14px;
    color: black;
    padding: 6px;
  }

  .nav-list-item-img-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .nav-list-item-img-box-item {
    width: 43%;
    border-radius: 7px;
    overflow: hidden;
  }
  .nav-list-item-img-box-item img {
    width: 100%;
    height: 100%;
  }
</style>