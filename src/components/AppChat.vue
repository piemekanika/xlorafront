<template>
    <div class="app-chat">
        <div class="app-chat__messages-container" ref="messagesContainer">
            <div v-if="!messages.length" style="padding: 20px; color: gray;">
                No messages yet
            </div>

            <message
                v-for="message in messages"
                :key="message.id"
                :message="message"
            ></message>
        </div>

        <div class="app-chat__line"></div>

        <new-message
            @message-sent="handleMessageSent"
        ></new-message>
    </div>
</template>

<script>
import NewMessage from '@/components/chat/NewMessage.vue';
import Message from '@/components/chat/Message.vue';
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
            shouldScrollToBottom: false,
        }
    },
    created() {
        this.$chat.onMessage(message => {
            this.messages.push({
                date: dateFormat(message.date),
                ...message,
            });

            if (this.shouldScrollToBottom) {
                this.$nextTick()
                    .then(() => {
                        this.scrollToBottom();
                        this.shouldScrollToBottom = false;
                    });
            }
        });
    },
    methods: {
        scrollToBottom() {
            const { messagesContainer } = this.$refs;

            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        },
        handleMessageSent() {
            this.shouldScrollToBottom = true;
        },
    },
};
</script>

<style>
.app-chat {
    background: white;

    max-width: 700px;
    height: calc(100% - 108px);

    margin: 20px auto;

    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px #0000001a;

    overflow: hidden;

    display: flex;
    flex-direction: column;
}

.app-chat__messages-container {
    max-height: calc(100% - 71px);
    overflow-y: auto;
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