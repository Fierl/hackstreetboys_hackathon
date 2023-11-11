<script setup lang="ts">
import ImageText from "../models/ImageText";

const imageText = new ImageText();

import OpenAI from "openai";
import {onMounted, ref} from "vue";

console.log(import.meta.env.VITE_OPENAI_API_KEY)
const openai = ref(null);

onMounted(() => {
  openai.value = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
})

function getAsciiCode(text) {
  openai.value.chat.completions.create({
    messages: [{role: "user", content: "Don't explain yourself. Just send me a Ascii art of maximum 6 Lines for the given text: " + text}],
    model: "gpt-3.5-turbo",
  }).then((response) => {
    console.log(response.choices[0].message.content);
  }).catch((error) => {
    console.log(error);
  });
}

defineProps<{
  msg: string
}>()

</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div class="container">
      <input class="input-field center-input" v-model="imageText.text"/>
    </div>
    <div class="container">
      <button class="waves-effect waves-light btn center-button" @click="getAsciiCode('house')">Display on
        device
      </button>
    </div>
  </div>
</template>
