<template>
  <div
    class="AlbumHero"
    :style="backgroundImage"
  >
    <Head1>
      {{ title }}
    </Head1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Head1 from '@/components/atoms/text/Head1/Head1.vue';
import { linearGradientImage } from '../../../helpers/imageHelper';

export default defineComponent({
  name: 'AlbumHero',
  components: { Head1 },
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
