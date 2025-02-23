<script setup lang="ts">
import { ref } from 'vue';

const linesText = ref([""]);

const addLine = (e: Event, index: number) => {
  const target = e.target as HTMLInputElement;
  linesText.value[index] = target.value;
  linesText.value.push("");
};

</script>

<template>
  <header>
    <div class="wrapper" v-for="(line, index) in linesText" :key="index">
      <div class="terminal-input-container">
        <div :class="index !== linesText.length - 1 ? '' : 'blink_me'">></div>
        <input @keyup.enter="addLine" :value="line"
          @input="(e) => linesText[index] = (e.target as HTMLInputElement).value"
          :disabled="index !== linesText.length - 1" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.terminal-input-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
}

input {
  background-color: transparent;
  border: 0;
  color: var(--color-text);
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem;
  outline: none;
}
</style>
