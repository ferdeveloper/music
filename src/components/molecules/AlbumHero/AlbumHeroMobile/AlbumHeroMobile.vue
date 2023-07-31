<template>
  <div>
    <div
      class="AlbumHeroMobile"
      :style="backgroundImage"
    >
      <h1 class="AlbumHeroMobile__title">
        {{ title }}
      </h1>
    </div>
    <div class="AlbumHeroMobile__socialMediaBlockContainer">
      <SocialMediaBlock />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { linearGradientImage } from '../../../../helpers/imageHelper';
import SocialMediaBlock from '../../SocialMediaBlock/SocialMediaBlock.vue';

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
  components: {
    SocialMediaBlock,
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
