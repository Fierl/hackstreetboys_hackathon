<script setup lang="ts">
import ImageText from "../models/ImageText";

const imageText = new ImageText();

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
      <button class="waves-effect waves-light btn center-button" @click="imageText.sendText(imageText.text)">Display on device
      </button>
    </div>
  </div>
</template>
