//Set active links class
$(".navFlex a").on("click", function () {
    $(".navFlex a.active").removeClass("active");
    $(this).addClass("active");
});