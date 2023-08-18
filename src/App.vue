<template>
  <router-view />
  <FooterGlobal />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterGlobal from './components/atoms/FooterGlobal/FooterGlobal.vue';

export default defineComponent({
  name: 'AlbumHero',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    FooterGlobal,
  },
});
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
</style>
