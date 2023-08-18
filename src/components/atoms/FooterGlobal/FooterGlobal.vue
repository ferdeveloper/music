<template>
  <div class="FooterGlobal">
    <p>@ferdeveloper - {{ currentDate }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterGlobal',
  setup() {
    const currentDate = new Date().getFullYear();

    return {
      currentDate,
    };
  },
});
</script>

<style lang="sass" scoped>
  @import './FooterGlobal'
</style>
