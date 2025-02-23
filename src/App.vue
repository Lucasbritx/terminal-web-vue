<script setup lang="ts">
import { ref } from 'vue';

// create a state variable to store number of lines
const linesText = ref([""]);

const addLine = (e) => {
  console.log(text);
  linesText.value.push(e.target.value);
  text = "";
};

</script>

<template>
  <header>
    <div class="wrapper" v-for="line in linesText">
      <div class="terminal-input-container">
        <div class="blink_me">></div>
        <input v-model="text" @keyup.enter="addLine" value={{line.text}} />
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
