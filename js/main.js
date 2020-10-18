$( ".required" ).on('input', function() {
    if ($(this).val() != "") {
        $(this).parent().find(".required_label").hide();
    }
    else {
        $(this).parent().find(".required_label").show();
    }
});

$(document).ready(function() {

    new WOW().init();

    function scrollTo(div) {
        // $('html, body').animate({
        //     scrollTop: $("#" + div).offset().top
        // }, 250);
        $('html, body').scrollTop($("#" + div).offset().top);

        if (div == 'intro') {
            window.location.hash = '';
        }
        else {
            window.location.hash = $("#" + div).attr("id");
        }
    };

    $( "#sign_up_button" ).on('click', function() {
        scrollTo("signup");
    });

    $( "a.scrollable" ).on('click', function(event) {
        scrollTo($(this).attr("href").substring(1));
    });

    $( "#go_back" ).on('click', function() {
        document.location.href= "/";
    });

    // scrollTo(Url.hash() || 'intro');
});