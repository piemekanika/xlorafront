<template>
  <component :is="$route.meta.layout || 'default'">
    <router-view></router-view>
  </component>
</template>

<script>
import Rectangle from '@/layout/rectangle.vue';
import Default from '@/layout/default.vue';

export default {
  name: 'App',
  components: {
    Rectangle,
    Default,
  },
};
</script>
