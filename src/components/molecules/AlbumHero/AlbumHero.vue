<template>
    <div class="">
      Hello world!
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AlbumHero',
    props: {
      img: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  });
  </script>
  