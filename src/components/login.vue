
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
// 从其他sfc文件，引用对应的模版组件
const picked  = ref("")
// 响应式状态，使用ref才能追踪到这个变量的数据变化，实时渲染
const checkedNames = ref([])
const selected  = ref("")
const multi_selected  = ref(['A'])
const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])

</script>

<template>
    <h2>我是登陆页</h2>
  <!-- 复选-->
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

    <div>Picked: {{ picked }}</div>
  <!-- 单选 -->
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <!-- 选择器 单选-->
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <!-- 选择器多选-->
  <select v-model="multi_selected" multiple>
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>

  <div>multi_selected: {{ multi_selected }}</div>

</template>
