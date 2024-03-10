<script setup>
import { ref } from 'vue'
defineProps(['title','postTitle'])

const count = ref(0)
</script>

<template>
  <h4>{{ title  }} and {{ postTitle }}</h4>
  <button @click="count++">You clicked me {{ count }} times.</button>
  <button @click="$emit('enlarge-text')">Enlarge text</button>

</template>
