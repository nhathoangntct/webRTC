const openStream = require('./openStream.js');
const Peer = require('simple-peer');
const $ = require('jquery');
const playVideo = require('./playVideo');


openStream(function(stream){
    playVideo(stream, 'localStream');
    const p = new Peer({initiator : location.hash === '#1', trickle :false , stream : stream});
    p.on('signal', token => {
        $('#txtMysignal').val(JSON.stringify(token));
    
    })
    
    p.on('connect', () => console.log('connected'));
    
    $('#btnconnect').click(() => {
        const friendSignal = JSON.parse($('#txtFriendSignal').val());
        p.signal(friendSignal);
    });

    p.on('stream', friendStream => playVideo(friendStream, 'friendStream'));
})