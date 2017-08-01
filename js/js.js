$(document).ready(function () {
    changeNavColor();
    smooth();
});

function changeNavColor() {
    var navHeight = $('nav').height();


    $(window).scroll(function () {
        var actualPos = $(window).scrollTop();

        if (actualPos > navHeight) {
            $('nav').addClass('nav-colored');
        } else {
            $('nav').removeClass('nav-colored');
        }
    });
}


function smooth() {

    $("a").on('click', function (event) {

       
        if (this.hash !== "") {
           
            event.preventDefault();

            
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
}




//$(document).ready(function(){
//  var scrollTop = 0;
//    
//  $(window).scroll(function(){
//    scrollTop = $(window).scrollTop();
//     $('nav').html(scrollTop);
//    
//    if (scrollTop >= 100) {
//      $('#nawigacja-main').addClass('nav-colored');
//    } else if (scrollTop < 100) {
//      $('#nawigacja-main').removeClass('nav-colored');
//    } 
//    
//  }) 
//})
