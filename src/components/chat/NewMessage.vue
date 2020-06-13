<template>
    <div class="new-message">
        <input
            v-model="message"
            type="text"
            class="new-message__input"
            @keyup.enter="send"
            placeholder="Enter your message..."
        >

        <button
            @click="send"
            class="new-message__button"
            :disabled="!message.length"
        >
            Send
        </button>
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
                this.$chat.sendMessage({
                    text: this.message,
                    author: 'test',
                });

                this.message = '';
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

.new-message__input {
    padding: 5px 10px;

    border-radius: 3px;
    border: 1px solid lightgray;

    outline: none;

    box-shadow: none;
    outline: none;
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