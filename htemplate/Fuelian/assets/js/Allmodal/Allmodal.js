$(document).ready(function () {
$(".btn-show").on("click", function () {
    $(".h-modal").removeClass("show");
    const modalName = $(this).data("modal");
    const targetModal = $(`.h-modal[data-modal="${modalName}"]`);
    targetModal.addClass("show");
    const dataoverlay = $(this).data("overlay");
    if (dataoverlay !== false && dataoverlay !== "false") {
      const newDiv = $('<div class="overlay"></div>');
      $("body").append(newDiv);
    }
  });

  $(document).on("click", ".overlay", function () {
    $(".h-modal").removeClass("show");
    $(this).remove();
  });

    $(".close").click(function () {
    $(".show").removeClass("show");
    $(".overlay").remove();
  });
});