function openCamera()
{
    navigator.mediaDevices.getUserMedia({audio : false, video :{ width: '1280', height: 720 }})
    .then(stream => {
        playVideo(stream, 'localStream');
    })
    .catch(err => console.log(err));
}
module.exports = openCamera;