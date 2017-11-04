
function openStream(cb)
{
    navigator.mediaDevices.getUserMedia({audio : false, video :{ width: '1280', height: 720 }})
    .then(stream => {
        // playVideo(stream, 'localStream');
        cb(stream);
    })
    .catch(err => console.log(err));
}
module.exports = openStream;
