const openStream = require('./openStream.js');
const $ = require('jquery');
const playVideo = require('./playVideo');
const Peer = require('peerjs');
const uid = require('uid');
const config = { host: 'mypeer0711.herokuapp.com', port: 443, secure: true, key: 'peerjs' };

function getPeer() {
    const idPeer = uid(10);
    $('#txtPeer-id').text(idPeer);
    return idPeer;
}

const peer = new Peer(getPeer(), config);

$('#btnCall').click(() => {
    const friendId = $('#txtFriendId').val();
    openStream(stream => {
        playVideo(stream, 'localStream');
        const call = peer.call(friendId, stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    });
});

peer.on('call', function (call) {
    openStream(stream => {
        playVideo(stream, 'localStream');
        call.answer(stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    });
});
    console.log(peer);