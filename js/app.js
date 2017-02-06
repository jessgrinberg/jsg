//Set active links class
$(".navFlex a").on("click", function () {
    $(".navFlex a.active").removeClass("active");
    $(this).addClass("active");
     $('#menu-toggle').prop('checked', false); 
    // $(".navFlex #menu-toggle:checked ~ ul ").css({ opacity: "0" });
     console.log('click')
});

// $('.navFlex a').on("click", function () {
//   $('#menu-toggle').prop('checked', false); 
//     console.log('click2')
// })
