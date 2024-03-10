
<!--选项式API -->
<!-- <script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件处理器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script> -->

<!--组合式API，更底层自由，这里应该可以放到单独的js文件里 -->

<script setup>
import { computed,ref, onMounted } from 'vue'

// 响应式状态，使用ref才能追踪到这个变量的数据变化，实时渲染
// 数据必须在这里定义
const count = ref(0)

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<!-- 整个div app都挂了下面这些模版标签 -->
<template>
  <header>

  </header>

  <main>
    <!-- https://juejin.cn/post/7278567293439901751 -->
    <h1>我是首页，下面是导航栏</h1>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/login">Go to Login</router-link>

  <!-- 路由出口，根据上面切换，显示具体的页面tab -->
  <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </main>


</template>
