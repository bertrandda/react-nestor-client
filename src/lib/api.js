import openSocket from 'socket.io-client';

const socket = openSocket(process.env.REACT_APP_SERVER_ADDRESS);

function startNestor(callback) {
    socket.on('reply', (data) => {
        callback(data.reply);
    });

    return requestBot;
}

function requestBot(textReq) {
    socket.emit('request', { text: textReq.replace('\u0000', '') });
}

export { startNestor }