$(document).ready(function () {
    $(".button-collapse").sideNav({
        draggable: true,
        closeOnClick: true
    });
    $('.parallax').parallax();
    $('.parallax1').parallax();

    if (window.matchMedia('(max-width: 979px)').matches) {
        $(window).scroll(function()
        {
            var div = $(this);
            if(div.scrollTop() === 0)
            {
                $(".brand-logo img").removeClass(" animated zoomOut");
                $(".brand-logo img").addClass(" animated zoomIn");
            }else{
                $(".brand-logo img").removeClass(" animated zoomIn");
                $(".brand-logo img").addClass(" animated zoomOut");
            }
        });
    }
    $('.modal').modal();

});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".navlink").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
