<script setup lang="ts">

import Canvas from "../models/Canvas.ts";

const canvas = new Canvas();

let ctx
let canvasBoard
let color = '#c0392b';
const width = 400;
const height = 400;

window.addEventListener("load", function (event) {
  // here is the Vue code
  canvasBoard = document.getElementById('myCanvas');
  ctx = canvasBoard.getContext('2d');
  resize();
});
//var canvas = document.createElement('canvas');
//var canvasScreen = document.getElementById('myCanvas');
//canvasScreen.appendChild(canvas);

// some hotfixes... ( ≖_≖)
//document.body.style.margin = 0;
//canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size

// last known position
var pos = {x: 0, y: 0};

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX - canvasBoard.offsetLeft;
  pos.y = e.clientY - canvasBoard.offsetTop;
}

// resize canvas
function resize() {
  ctx.canvas.width = width;
  ctx.canvas.height = height;
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvasBoard.width, canvasBoard.height);
}

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div class="container" style="display: flex; flex-direction: row">
      <canvas id="myCanvas" width="400" height="400" style="border:1px solid grey;" msg=""></canvas>
      <div class="buttonContainer">
        <button class="waves-effect waves-light btn center-button colorButton" @click="color = 'red'">Red</button>
        <button class="waves-effect waves-light btn center-button colorButton" @click="color = 'blue'">Blue</button>
        <button class="waves-effect waves-light btn center-button colorButton" @click="color = 'green'">Green</button>
        <button class="waves-effect waves-light btn center-button colorButton" @click="color = 'yellow'">Yellow</button>
        <button class="waves-effect waves-light btn center-button colorButton" @click="color = 'black'">Black</button>
      </div>
    </div>
    <div class="container" style="flex-direction: row; display: flex; margin-left: 20px">
      <button class="waves-effect waves-light btn center-button" style="min-width:max-content" @click="clearCanvas()">
        Clear
      </button>
      <button class="waves-effect waves-light btn center-button" style="min-width:max-content; margin-left: 50px"
              @click="canvas.uploadImage(canvasBoard)">Display on device
      </button>
    </div>
  </div>
</template>
