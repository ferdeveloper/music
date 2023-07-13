<template>
  <h1 class="Head1">
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeadText',
});
</script>

<style lang="sass" scoped>
  @import './Head1'
</style>
