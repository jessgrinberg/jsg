//Set active links class
$(".navFlex a").on("click", function () {
    $(".navFlex a.active").removeClass("active");
    $(this).addClass("active");
    //close responsive navbar when a link is clicked
    $('#menu-toggle').prop('checked', false); 
});
