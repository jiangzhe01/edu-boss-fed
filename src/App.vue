<template>
  <div id="app">
    <h1>拉勾教育</h1>
    <!-- 根路由出口, 用于渲染路由组件 -->
    <router-view />

    <!-- 测试element ui 组件是否生效, 过后删除 -->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<style lang="scss">
@import '~@/styles/variables.scss';

 .text {
 color: $warning-color;
 }
</style>
