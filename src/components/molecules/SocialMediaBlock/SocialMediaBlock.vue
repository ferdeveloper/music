<template>
  <div class="SocialMediaBlock">
    <a
      v-for="socialMedia in socialMediaData"
      :key="socialMedia.alt"
      :href="socialMedia.url"
    >
      <img
        class="SocialMediaBlock__item"
        :src="require(`@/assets/media/${socialMedia.icon}.png`)"
        :alt="`Icono ${socialMedia.alt}`"
      >
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import socialMediaData from '../../../data/socialMediaData';

export default defineComponent({
  name: 'SocialMediaBlock',
  setup() {
    return {
      socialMediaData,
    };
  },
});
</script>

<style lang="sass" scoped>
  @import './SocialMediaBlock'
</style>
