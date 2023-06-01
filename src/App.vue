<template>
  <div id="app">
    <h1>拉勾教育</h1>
    <!-- 根路由出口, 用于渲染路由组件 -->
    <router-view />
  </div>
</template>

<script>
import request from "@/utils/request"

request({
  method: "GET",
  // 某个后台接⼝
  // url: '/boss/v2/api-docs?group=edu-boss-boot'
  // 某个前台接⼝ url
  url: "/front/ad/getAdList"
}).then((res) => {
  console.log("响应内容：", res)
})

export default {
  name: "index",
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.text {
  color: $warning-color;
}
</style>
