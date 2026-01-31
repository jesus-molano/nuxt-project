<script setup lang="ts">

defineProps<{
  name: string,
  amount: number
}>()

defineEmits<{
  (event: 'onIncrement'): void
  (event: 'onDecrement'): void
}>()

</script>

<template>
  <div v-if="amount > 0">
    <span>{{ name }}</span>
    <button @click="$emit('onDecrement')">-</button>
    <span>{{ amount }}</span>
    <button @click="$emit('onIncrement')">+</button>
  </div>
</template>

<style scoped>

div {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 0.5em 0;
}

button {
  padding: 0.5em;
}

span {
  width: 70px;
}
</style>