<template>
  <div class="AlbumHeroDesktop">
    <img
      class="AlbumHeroDesktop__img"
      :src="img"
      :alt="`Portada ${title}`"
    >
    <div class="AlbumHeroDesktop__infoBlock">
      <p class="AlbumHeroDesktop__label">Álbum</p>
      <h1 class="AlbumHeroDesktop__title">
        {{ title }}
      </h1>
      <p class="AlbumHeroDesktop__label">Escúchalo en:</p>
      <SocialMediaBlock />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialMediaBlock from '@/components/molecules/SocialMediaBlock/SocialMediaBlock.vue';

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
  components: {
    SocialMediaBlock,
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumHeroDesktop'
</style>
