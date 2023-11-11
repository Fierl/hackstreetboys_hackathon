<script setup lang="ts">

import TextInput from "@/components/TextInput.vue";
import SendImage from "@/components/SendImage.vue";
import Canvas from "@/components/Canvas.vue";
</script>

<template>
  <div class="bodyContainer" style="display:flex; flex-direction: row">
    <div class="leftSide">
      <TextInput msg="Enter your text here:"/>
      <SendImage msg="Or send your image here:"/>
    </div>
    <div class="rightSide">
      <Canvas msg="Or draw here:"/>
    </div>
  </div>

</template>