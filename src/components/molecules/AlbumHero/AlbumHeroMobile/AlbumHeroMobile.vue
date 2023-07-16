<template>
  <div
    class="AlbumHeroMobile"
    :style="backgroundImage"
  >
    <h1 class="AlbumHeroMobile__title">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { linearGradientImage } from '../../../../helpers/imageHelper';

export default defineComponent({
  name: 'AlbumHeroMobile',
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
  setup(props) {
    const backgroundImage = linearGradientImage(props.img);

    return {
      backgroundImage,
    };
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumHeroMobile'
</style>
