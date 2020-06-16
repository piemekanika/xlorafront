<template functional>
    <button
        class="lo-button"
        v-bind="data.attrs"
        v-on="listeners"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'lo-button',
};
</script>

<style>
.lo-button {
    height: 32px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    width: auto;
    overflow: visible;

    background: #FFD2FA;
    border-radius: 5px;

    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;

    border: 0;
    padding: 0;

    text-align: inherit;
    outline: none;
}
</style>