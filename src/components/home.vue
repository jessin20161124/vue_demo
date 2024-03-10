


<script setup>
import { computed,ref, onMounted } from 'vue'
// 从其他sfc文件，引用对应的模版组件
import ButtonCounter from './ButtonCounter.vue'

// 响应式状态，使用ref才能追踪到这个变量的数据变化，实时渲染
// 数据必须在这里定义
const count = ref(0)
const items = ref([{ message: 'Foo',id:1 }, { message: 'Bar',id:2 }])
const awesome = ref(false)
const message = ref("")

const multi_message = ref("")
const postFontSize = ref(1)
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const numbers = ref([1, 2, 3, 4, 5])
const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

// 用来修改状态、触发更新的函数
function increment() {
  // 有value属性
  count.value++
}
function say(message) {
  alert(message)
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>


<template>
     <h3>我是第一个tab</h3>
    <!-- postTitle必须时post-title格式-->
    <ButtonCounter title="hello" post-title="abc"/>
    <button-counter title="world"></button-counter>

    <!-- 如果是动态数据，必须用bind，且是:，跟随post.title数据的变化而变化？-->
    <!-- 当前所在组件是父组件，buttonCounter是子组件-->
    <ButtonCounter
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
    />

    <!-- 当点击里面的按钮时，会上传事件给外层，然后上层接收到这个事件，会增大外层的大小-->
    <div :style="{ fontSize: postFontSize + 'em' }">
        <ButtonCounter
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          @enlarge-text="postFontSize += 0.1"
        />
    </div>

    <button @click="increment">
      {{ count }}
    </button>
    <!-- 可以放方法句柄或者内联脚本 v-on 或 @ 监听按键事件 -->
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <!-- 使用key关联，方便管理 -->
    <li v-for="item in items" :key="item.id">
      {{ item.message }}
    </li>

    <li v-for="(item, index) in items">
      {{ index }} - {{ item.message }}
    </li>
    <li v-for="n in evenNumbers">{{ n }}</li>

    <button @click="say('hello')">Say hello</button>

    <p>Message is: {{ message }}</p>
    <!-- 实时将这个输入数据赋值给message字段-->
    <input v-model="message" placeholder="edit me" />

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ multi_message }}</p>
    <textarea v-model="multi_message" placeholder="add multiple lines"></textarea>
</template>