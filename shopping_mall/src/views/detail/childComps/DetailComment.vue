<template>
  <div id="detail-comment">
    <div class="comment-bar">
      <span class="title">宝贝评论({{detailComment.length}})</span>
      <span class="more">查看更多 <i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="content">
      <img :src="uerImg" alt="" v-show="showImg">
      <i> {{userName}} </i>
      <div class="content-text">
        {{commentText}}
      </div>
      <div class="content-time"> {{commentTime}} </div>
    </div>
  </div>
</template>

<script>
import formatDate from '@/common/formatDate'

export default {
  name: 'DetailComment',
  props: {
    detailComment: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      showImg: false
    }
  },
  computed: {
    uerImg () {
      if(this.detailComment.length !== 0) {
        this.showImg = true
        return this.detailComment[0].UserImg
      }
    },
    userName () {
      if(this.detailComment.length !== 0) {
        return this.detailComment[0].UserName
      }
    },
    commentText () {
      if(this.detailComment.length !== 0) {
        return this.detailComment[0].Content
      }
    },
    commentTime () {
      if(this.detailComment.length !== 0) {
        let d = new Date(this.detailComment[0].CommentTime)
        
        return formatDate(d, 'yyyy-MM-dd')
      }
    }
  }
}
</script>

<style scoped>
  #detail-comment {
    font-size: 12px;
    margin: 10px 0;
    padding: 10px;
    overflow: hidden;
    background-color: #fff;
  }
  .comment-bar .title {
    float: left;
  }
  .comment-bar .more {
    float: right;
    color: #ff5500;
  }
  .content {
    padding-top: 40px;
  }
  .content img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .content i {
    color: #999;
  }
  .content-text {
    padding-top: 10px;
  }
  .content-time {
    padding-top: 10px;
  }
</style>