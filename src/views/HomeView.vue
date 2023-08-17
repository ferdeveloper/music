<template>
  <div class="home">
    <AlbumHero
      :img="require(`@/assets/covers/falling.png`)"
      title="Falling"
    />
    <SongList
      :songListData="fallingData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlbumHero from '@/components/molecules/AlbumHero/AlbumHero.vue';
import SongList from '@/components/molecules/SongList/SongList.vue';
import fallingData from '../data/fallingData';

export default defineComponent({
  name: 'HomeView',
  components: {
    AlbumHero,
    SongList,
  },
  setup() {
    return {
      fallingData,
    };
  },
});
</script>
