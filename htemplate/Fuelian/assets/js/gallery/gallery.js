$(document).ready(function() {
    Fancybox.bind("[data-fancybox]", {});

$(".product-item").css("opacity", 0);

$(".product-item").each(function (index) {
    $(this).delay(200 * index).animate({ opacity: 1 }, 500);
});   
});