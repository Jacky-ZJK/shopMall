<template>
  <div class="nav-control">
    <div class="nav-control-item" v-for="(item, index) in datas" :key="item">
      <span :class="{active: activeIndex == index}" @click="changeIndex(index)"> {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavControl',
  props: {
    datas: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    changeIndex (index) {
      this.activeIndex = index
      this.$emit('navControlClick', index)
    }
  }
}
</script>

<style scoped>
.nav-control {
  display: flex;
  padding: 10px 0 ;
  /* height: 50px;
  line-height: 50px; */
  background-color: #fff;
  text-align: center;
}
.nav-control-item {
  flex: 1;
}
.nav-control-item span {
  padding: 5px 10px;
}
.active {
  border-bottom: 3px solid deeppink;
}
</style>