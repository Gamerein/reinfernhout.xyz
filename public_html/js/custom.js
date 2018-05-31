$(window).load(() => {
    $(".loader").fadeOut("slow");
    $(window).scroll(() => {
        $("#intro .arrow").fadeOut("slow");
    });
});

particlesJS.load("particles-js", particlesJson, () => {

});

