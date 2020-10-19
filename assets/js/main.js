

$(document).ready(function () {

    <!-- меню -->
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
        $(".text_anime").toggleClass("none");

    });
    $(".sub-menu").click(function() {
        $('.sub').toggleClass("active");
    });
    <!-- конец мею -->

});
