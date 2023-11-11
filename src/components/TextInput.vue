<script setup lang="ts">
import ImageText from "../models/ImageText";

const imageText = new ImageText();

import OpenAI from "openai";
import {onMounted, ref} from "vue";
const openai = ref(null);

onMounted(() => {
  openai.value = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
})

function getAsciiCode(text) {
  openai.value.chat.completions.create({
    messages: [{role: "user", content: "Generate a concise and creative ASCII art representation for the word" + text + "with a maximum of 6 lines."}],
    model: "gpt-3.5-turbo",
  }).then((response) => {
    imageText.sendText(response.choices[0].message.content);
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
      <button class="waves-effect waves-light btn center-button" @click="getAsciiCode(imageText.text)">Display on
        device
      </button>
    </div>
  </div>
</template>
