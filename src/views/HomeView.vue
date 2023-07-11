<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AlbumHero
      img="https://picsum.photos/200"
      title="fallling"
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
