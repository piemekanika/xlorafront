import io from 'socket.io-client';

export default {
    install(Vue) {
        // const socket = io('https://xlora-back.piemekanika.dev/');
        const socket = io('ws://localhost:3030');

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