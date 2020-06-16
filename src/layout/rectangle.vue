<template functional>
    <div class="app">
        <div class="app__rect">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rectangle',
};
</script>

<style>
.app {
    position: relative;
}

.app__rect {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: white;

    padding: 20px;

    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px #0000001a;
}
</style>