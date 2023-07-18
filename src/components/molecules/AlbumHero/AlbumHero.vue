<template>
  <div>
    <div class="AlbumHero__mobile">
      <AlbumHeroMobile
        img="https://picsum.photos/200"
        title="Fallling"
      />
    </div>
    <div class="AlbumHero__desktop">
      <AlbumHeroDesktop
        img="https://picsum.photos/200"
        title="Fallling"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlbumHeroMobile from './AlbumHeroMobile/AlbumHeroMobile.vue';
import AlbumHeroDesktop from './AlbumHeroDesktop/AlbumHeroDesktop.vue';

export default defineComponent({
  name: 'AlbumHero',
  components: {
    AlbumHeroMobile,
    AlbumHeroDesktop,
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumHero'
</style>
