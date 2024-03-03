
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
import ButtonCounter from './ButtonCounter.vue'

// 响应式状态，使用ref才能追踪到这个变量的数据变化，实时渲染
// 数据必须在这里定义
const count = ref(0)

const awesome = ref(false)
const message = ref("")
const multi_message = ref("")
const checkedNames = ref([])
const picked  = ref("")
const items = ref([{ message: 'Foo',id:1 }, { message: 'Bar',id:2 }])
const selected  = ref("")
const multi_selected  = ref(['A'])

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const numbers = ref([1, 2, 3, 4, 5])
// 计算属性
const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

const postFontSize = ref(1)

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
  <header>

  </header>

  <main>
    <h3>main template</h3>
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
  </main>

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
