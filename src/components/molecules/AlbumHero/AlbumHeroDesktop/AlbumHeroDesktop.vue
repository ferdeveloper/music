<template>
  <div class="AlbumHeroDesktop">
    <img
      class="AlbumHeroDesktop__img"
      :src="img"
      :alt="`Portada ${title}`"
    >
    <h1 class="AlbumHeroDesktop__title">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlbumHeroDesktop',
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
});
</script>

<style lang="sass" scoped>
  @import './AlbumHeroDesktop'
</style>
