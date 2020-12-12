$(document).ready (function(){

    var acercaDE = $('#acerca-de').offset().top,
        skill = $('#skill').offset().top;
		/* web = $('#web').offset().top; */

    $('#btn-acerda-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDE -200
        }, 500);
    });

    $('#btn-skill').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: skill -160
        }, 500);
    });
    
    /* $('#btn-web').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: web
        }, 500);
    });
 */
});