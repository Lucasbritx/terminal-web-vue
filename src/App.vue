<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const linesText = ref([{ text: "", response: "" }]);
const apiUrl = "localhost:3000";



const sendCommand = async (index: number) => {
  const command = linesText.value[index].text.trim();
  if (!command) return;

  try {
    const response = await axios.post(apiUrl, { command });
    linesText.value[index].response = response.data.message || "No response";
    linesText.value.push({ text: "", response: "" });
  } catch (error) {
    console.error("Error sending command:", error);
    linesText.value[index].response = "Error: Could not connect to server.";
    linesText.value.push({ text: "", response: "" });
  }
};

</script>

<template>
  <header>
    <div class="wrapper" v-for="(line, index) in linesText" :key="index">
      <div class="terminal-input-container">
        <div :class="index !== linesText.length - 1 ? '' : 'blink_me'">></div>
        <input v-model="linesText[index].text" @keyup.enter="sendCommand(index)"
          :disabled="index !== linesText.length - 1" />
      </div>
      <div v-if="line.response" class="terminal-response">{{ line.response }}</div>
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
