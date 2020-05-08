<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar v-show="$store.state.showMainTabBar"/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/maintabbar/MainTabBar'

export default {
  name: 'App',
  data () {
    return {
      active: null
    }
  },
  components: {
    MainTabBar
  },
  computed: {

  },
  watch: {
    $route: function (val, oldVal) {
      
    }
  }
}

</script>

<style>
  @import './assets/css/base.css'
</style>
