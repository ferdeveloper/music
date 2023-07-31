<template>
  <div>
    <div class="AlbumHero__mobile">
      <AlbumHeroMobile
        :img="img"
        title="Fallling"
      />
    </div>
    <div class="AlbumHero__desktop">
      <AlbumHeroDesktop
        :img="img"
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
  props: {
    img: {
      type: String,
      required: true,
    },
  },
  components: {
    AlbumHeroMobile,
    AlbumHeroDesktop,
  },
});
</script>

<style lang="sass" scoped>
  @import './AlbumHero'
</style>
