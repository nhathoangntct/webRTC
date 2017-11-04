function openCamera()
{
    navigator.mediaDevices.getUserMedia({audio : false, video :{ width: 1280, height: 720 }})
    .then(stream => {
        const video = document.getElementById('localStream');
        video.srcObject = stream;
        video.onloadedmetadata = function (err) {
            video.play();           
        };
        console.log(video.srcObject);
    })
    .catch(err => console.log(err));
}
module.exports = openCamera;