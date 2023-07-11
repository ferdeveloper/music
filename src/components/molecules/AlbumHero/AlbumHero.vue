<template>
  <div class="">
    <div
      class="AlbumHero__img"
      :style="backgroundImage"
    />
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { linearGradientImage } from '../../../helpers/imageHelper';

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
  setup(props) {
    const backgroundImage = linearGradientImage(props.img);

    return {
      backgroundImage,
    };
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumHero'
</style>
