<script setup lang="ts">
import BayernCloud from "../models/BayernCloud";


const bayernCloud = new BayernCloud();
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div class="container">
    </div>
    <div class="container">
      <button class="waves-effect waves-light btn center-button"
              @click="bayernCloud.getListOfDescriptions(cloudApiKey)">Ask BayernCloud for POI!
      </button>
    </div>
  </div>
</template>
