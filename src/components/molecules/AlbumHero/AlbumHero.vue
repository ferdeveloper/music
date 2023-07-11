<template>
  <div class="">
    <img
      class="AlbumHero__img"
      :src="img"
      :alt="`${title} cover`"
    >
    {{ title }}
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
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumHero'
</style>
