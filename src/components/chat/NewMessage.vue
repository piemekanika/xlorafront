<template>
    <div class="new-message">
        <input
            v-model="message"
            type="text"
            class="new-message__input"
            @keyup.enter="send"
            placeholder="Enter your message..."
        >

        <lo-button
            class="new-message__button"
            :disabled="!message.length"
            @click="send"
        >
            Send
        </lo-button>
    </div>
</template>

<script>
export default {
    name: 'NewMessage',
    data() {
        return {
            message: '',
        };
    },
    methods: {
        send() {
            if (this.message.length) {
                this.$chat.sendMessage({ text: this.message });

                this.message = '';

                this.$emit('message-sent');
            }
        },
    },
};
</script>

<style>
.new-message {
    padding: 20px;

    display: grid;
    grid-template-columns: 1fr 60px;
    grid-column-gap: 10px;

    background: #fafbfc;
}

.new-message__button {
    box-shadow: none;
    outline: none;

    border: 1px solid lightgray;

    background: #ffe6ea;

    border-radius: 5px;

    cursor: pointer;
}
</style>