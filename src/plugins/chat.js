import io from 'socket.io-client';

export default {
    install(Vue) {
        const socket = io(process.env.VUE_APP_CHAT_SOCKET_HOST);

        Vue.prototype.$chat = {
            sendMessage(payload) {
                socket.emit('msgToServer', payload);
            },

            onMessage(callback) {
                socket.on('msgToClient', callback);
            },
        };
    },
};