<template>
  <div class="SongList">
    <iframe
      v-for="song in songListData"
      :key="song.title"
      :title="song.title"
      :src="song.url"
      width="100%"
      height="120"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Song } from '../../../types/Song';

export default defineComponent({
  name: 'SongList',
  props: {
    songListData: {
      type: Array as PropType<Song[]>,
      default: () => [],
    },
  },
});
</script>

<style lang="sass" scoped>
  @import './SongList'
</style>
