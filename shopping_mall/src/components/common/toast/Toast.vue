<template>
  <div id="toast" v-show="isShow">
    <span> {{message}} </span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message = '默认消息', duration = 1000) {
      if (1) {
        this.message = message
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
}
</script>

<style>
  #toast {
    position: absolute;
    padding: 8px 10px;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
</style>