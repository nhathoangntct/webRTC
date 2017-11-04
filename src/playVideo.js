function playVideo(stream, idVideo)
{
    const video = document.getElementById('idVideo');
    video.srcObject = stream;
    video.onloadedmetadata = function (err) {
        video.play();           
    };
}
module.exports = playVideo;