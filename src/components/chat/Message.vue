<template functional>
    <div class="message" :class="{'message--author-hidden': props.hideSender}">
<!--        <div class="message__sender-avatar"></div>-->

        <div v-if="!props.hideSender" class="message__sender-name">
            {{ props.message.author.name }}

            <div class="message__date">
                {{ props.message.date }}
            </div>
        </div>

        <div class="message__text">
            {{ props.message.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        message: {
            type: Object,
            required: true,
        },
        hideSender: {
            type: Boolean,
        },
    },
};
</script>

<style>
.message {
    padding: 10px 20px;
}

.message--author-hidden {
    padding-top: 0px;
}

.message__sender-name {
    font-weight: bold;

    display: flex;
    align-items: center;

    margin-bottom: 2px;
}

.message__date {
    margin-top: 3px;
    margin-left: 5px;

    font-size: 10px;
    font-weight: normal;

    color: gray;
}
</style>