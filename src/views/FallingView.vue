<template>
  <div class="home">
    <AlbumHero
      :img="require(`@/assets/covers/falling.png`)"
      title="Falling"
      alt="Falling"
    />
    <AlbumInfo
      info="Falling es un album instrumental ideal para escuchar de manera relajada.
      Sus temas son composiciones cíclicas que van in crescendo desde melodías intimas de piano
      hasta grandes fragmentos orquestales. Una definición que me gusta es que falling es ideal
      para ser escuchado programando, pero sinceramente, sus composiciones van mucho mas allá."
      url="https://open.spotify.com/embed/album/5vvHdYI1C21dnS8Mon45B8?utm_source=generator&theme=0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlbumHero from '@/components/molecules/AlbumHero/AlbumHero.vue';
import AlbumInfo from '@/components/molecules/AlbumInfo/AlbumInfo.vue';
import fallingData from '../data/fallingData';

export default defineComponent({
  name: 'FallingView',
  components: {
    AlbumHero,
    AlbumInfo,
  },
  setup() {
    return {
      fallingData,
    };
  },
});
</script>
