<template>
  <div id="app">
    <app-header></app-header>
    <app-chat></app-chat>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppChat from '@/components/AppChat.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppChat,
  }
}
</script>

