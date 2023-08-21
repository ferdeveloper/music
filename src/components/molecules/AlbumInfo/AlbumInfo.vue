<template>
  <div class="AlbumInfo">
    <p class="AlbumInfo__text">{{ info }}</p>
    <div class="AlbumInfo__songs">
      <iframe
        title="falling"
        :src="url"
        width="100%"
        height="452"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlbumInfo',
  props: {
    info: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumInfo'
</style>
