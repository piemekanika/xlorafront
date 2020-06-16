<template>
    <div class="app">
        <app-header></app-header>

        <slot></slot>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
    name: 'default',
    components: {
        AppHeader,
    },
};
</script>
