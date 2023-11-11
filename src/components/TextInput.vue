<script setup lang="ts">
import ImageText from "../models/ImageText";
import BayernCloud from "../models/BayernCloud";

const imageText = new ImageText();

import OpenAI from "openai";
import {onMounted, ref} from "vue";

const openai = ref(null as OpenAI | null);
const funfacts = ref("Loading...");

onMounted(() => {
  openai.value = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const bayern = new BayernCloud()
  bayern.getListOfDescriptions().then(res => {
    openai.value!.chat!.completions.create({
      messages: [{
        role: "user", content: "Please write some fun facts and funny be creative about Bavaria in Bavarian Dialact or German and use the following context to generate it.Only provide the Funfacts and don't explain your self at most give 3 sentences: \n\n" + res
      }],
      model: "gpt-3.5-turbo",
      temperature: 0.7
    }).then((response) => {
      funfacts.value = response.choices[0].message.content!
    }).catch((error) => {
      console.log(error);
    });
  })
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
  <h1>Fun Facts über Bayern Yay </h1>
  <div>
    {{ funfacts }}
  </div>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div class="container">
      <input class="input-field center-input" v-model="imageText.text" />
    </div>
    <div class="container">
      <button class="waves-effect waves-light btn center-button" @click="getAsciiCode(imageText.text)">Display on
        device
      </button>
    </div>
  </div>
</template>

