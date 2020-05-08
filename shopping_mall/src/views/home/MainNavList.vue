<template>
  <nav-list>
      <nav-list-item title="有好货">
        <img slot="left" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
        <img slot="right" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
      </nav-list-item>
      <nav-list-item title="聚划算">
        <img slot="left" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
        <img slot="right" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
      </nav-list-item>
      <nav-list-item title="每日好店">
        <img slot="left" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
        <img slot="right" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
      </nav-list-item>
      <nav-list-item title="今日爆款">
        <img slot="left" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
        <img slot="right" src="http://localhost:3000/images/home/navlist/11.jpg" alt="">
      </nav-list-item>
    </nav-list>
</template>

<script>

import NavList from '@/components/content/navlist/NavList'
import NavListItem from '@/components/content/navlist/NavListItem'

export default {
  name: 'MainNavList',
  components: {
    NavList,
    NavListItem
  }
}
</script>

<style>

</style>