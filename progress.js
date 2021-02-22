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
            if ($(this).offset().top > $(window).scrollTop() && $(this).offset().top < $(window).scrollTop()+$(window).height()) anim($(this));
            else $(this).addClass("animationProgress");
        } else {
            $(this).css('clip-path', `inset(0% ${100-parseInt($(this).data("percent"))}% 0% 0%)`);
        }

    });

    function anim(elem){
        $(elem).css('clip-path', `inset(0% 100% 0% 0%)`).animate({someValue: parseInt($(elem).data("percent"))}, {
            duration: parseInt($(elem).data("animation")),
            step: function(someValue) {$(elem).css('clip-path', `inset(0% ${100-someValue}% 0% 0%)`)}
        }).delay(800);
    }

    $(window).scroll(function () {
        $('.animationProgress').each(function(){
            if ($(this).offset().top > $(window).scrollTop() && $(this).offset().top < $(window).scrollTop()+$(window).height()){
                anim($(this));
                $(this).removeAttr('class', 'animationProgress');
            }
        })
    });

})