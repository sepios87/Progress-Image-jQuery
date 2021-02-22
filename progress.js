/*copyright sepios*/

$(function () {

    $('.progressIcon').each(function(){
        
        let divProgress = $('<div></div>').css({'position': 'relative', 'display' : 'table'}).addClass("progressIcon");
        $(this).removeAttr('class', 'progressIcon');

        $(this).wrap(divProgress);

        //clonner l'icon pour le mettre en fond
        let cloneGray = $(this).clone();
        $(this).css({"position" : "absolute", "color" : $(this).data("color"), 'z-index' : 2});
        cloneGray.css({'opacity': '0.15', 'display': 'block'});
        $(this).after(cloneGray);

        //déclancher une animation ou pas
        let animation = parseInt($(this).data("animation"))
        if (animation > 0){
            $(this).css('clip-path', `inset(0% 100% 0% 0%)`).animate({someValue: parseInt($(this).data("percent"))}, {
                duration: animation,
                step: function(someValue) {$(this).css('clip-path', `inset(0% ${100-someValue}% 0% 0%)`)}
            });
        } else {
            $(this).css('clip-path', `inset(0% ${100-parseInt($(this).data("percent"))}% 0% 0%)`);
        }

    });
})