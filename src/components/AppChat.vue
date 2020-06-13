<template>
    <div class="app-chat">
        <div v-if="!messages.length" style="padding: 20px; color: gray;">
            No messages yet
        </div>

        <message
            v-for="message in messages"
            :key="message.id"
            :message="message"
        ></message>

        <div class="app-chat__line"></div>

        <new-message></new-message>
    </div>
</template>

<script>
import Message from '@/components/chat/Message.vue';
import NewMessage from '@/components/chat/NewMessage.vue';
import dateFormat from '@/utils/dateConvert';
export default {
    name: 'AppChat',
    components: {
        NewMessage,
        Message,
    },
    data() {
        return {
            messages: [],
        }
    },
    created() {
        this.$chat.onMessage(message => {
            this.messages.push({
                ...message,
                date: dateFormat(message.date),
                id: this.uniqueId()
            });
        });
    },
    methods: {
        uniqueId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    }
}
</script>

<style>
.app-chat {
    background: white;

    max-width: 700px;
    height: calc(100% - 108px);

    margin: 20px auto;

    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px #0000001a;

    display: flex;
    flex-direction: column;
}

.app-chat__line {
    width: 100%;
    height: 1px;

    background: #e0e0e0;

    margin-top: auto;
}

@media (max-width: 740px) {
    .app-chat {
        margin: 20px;
    }
}
</style>