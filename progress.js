/*copyright sepios*/

$(function () {

    $('.progressIcon').each(function(){
        let divProgress = $('<div></div>').css({'position': 'relative', 'display' : 'table'});

        //réattribuer l'id et attribuer une classe si voulu
        divProgress.attr('id', $(this).attr('id'));
        $(this).removeAttr('id');
        if ($(this).data("class")) divProgress.addClass($(this).data("class"));

        $(this).wrap(divProgress);

        //clonner l'icon pour le mettre en fond
        let cloneGray = $(this).clone();
        $(this).css({"position" : "absolute", "color" : $(this).data("color")});
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