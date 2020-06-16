import io from 'socket.io-client';

export default {
    install(Vue) {
        const username = localStorage.getItem('xlora-username')
            || 'Anon #' + Math.floor(Math.random() * 1000);

        localStorage.setItem('xlora-username', username);

        const socket = io(process.env.VUE_APP_CHAT_SOCKET_HOST);

        Vue.prototype.$chat = {
            sendMessage(payload) {
                if (!payload.author) {
                    payload.author = username;
                }

                socket.emit('msgToServer', payload);
            },

            onMessage(callback) {
                socket.on('msgToClient', callback);
            },
        };
    },
};