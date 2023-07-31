<template>
  <div class="home">
    <AlbumHero
      :img="require(`@/assets/covers/falling.png`)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlbumHero from '@/components/molecules/AlbumHero/AlbumHero.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    AlbumHero,
  },
});
</script>
