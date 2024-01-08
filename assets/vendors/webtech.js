
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 



document.querySelector('video').defaultPlaybackRate = 1.0;
document.querySelector('video').play();

document.querySelector('video').playbackRate = 0.5;