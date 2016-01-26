$(document).ready(function () {
    $(window).scroll(function () {
        var vHeight = $(this).scrollTop();
        if (vHeight > 100) {
            $(".navbar-new").css({
                "background-color": "rgba(35, 186, 181, 1)",
                "border-color": "rgba(15, 166, 161, 1)"
            });
            $(".navbar-new .navbar-brand").css("background-color", "rgba(15, 166, 161, 1)");
        } else {
            $(".navbar-new").css({
                "background-color": "rgba(35, 186, 181, 0)",
                "border-color": "rgba(15, 166, 161, 0)"
            });
            $(".navbar-new .navbar-brand").css("background-color", "rgba(15, 166, 161, 0)");
        };
    });
});