<script setup lang="ts">
import SendImage from "../models/SendImage";

const sendImage = new SendImage();

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div class="container">
      <input class="center-input" type="file" id="file" ref="file" @change="sendImage.onChangeFileUpload($event)"/>
    </div>
    <div class="container">
      <button class="waves-effect waves-light btn center-button" @click="sendImage.uploadImage(sendImage.image)">Display
        on Device
      </button>
    </div>
  </div>
</template>
