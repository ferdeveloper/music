<template>
  <div>
    <div class="AlbumHero__mobile">
      <AlbumHeroMobile
        img="https://picsum.photos/200"
        title="Fallling"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlbumHeroMobile from './AlbumHeroMobile/AlbumHeroMobile.vue';

export default defineComponent({
  name: 'AlbumHero',
  components: {
    AlbumHeroMobile,
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumHero'
</style>
