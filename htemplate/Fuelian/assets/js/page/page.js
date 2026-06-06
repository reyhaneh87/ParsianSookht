$(document).ready(function () {
  $(".progress-bar").each(function () {
    var progressValue = $(this).data("process");
    $(this).css("width", progressValue + "%");
    $(this).attr("aria-valuenow", progressValue);
    $(this)
      .closest(".progress-bar-div")
      .find(".text-progress")
      .text(progressValue + "%");
  });

  $(".harmony-icon-star").on("click", function () {
    var $container = $(this).closest(".stars"); // پیدا کردن بلاک ستاره‌ها

    $container.find(".harmony-icon-star").removeClass("active"); // فقط ستاره‌های همین بلاک
    $(this).addClass("active");

    var value = $(this).data("val");
    $container.siblings(".text-val").text(value); // عدد امتیاز

    $container.addClass("selected"); // اضافه کردن کلاس روی خود بلاک ستاره‌ها
  });

  const $nativeShareButton = $("#nativeShare");
  const $shareMessage = $("#shareMessage");
  const urlToShare = window.location.href;

  // بررسی وجود قابلیت native share
  if (navigator.share) {
    $nativeShareButton.removeClass("hidden").click(() => {
      navigator.share({
        url: urlToShare,
        title: document.title,
      });
    });
  }

  // عملکرد کپی به کلیپ‌بورد
  const copyToClipboard = () => {
    navigator.clipboard.writeText(urlToShare).then(() => {
      $shareMessage.removeClass("hidden");
      setTimeout(() => $shareMessage.addClass("hidden"), 2000); // مخفی کردن پیام پس از 2 ثانیه
    });
  };

  // اضافه کردن کلیک کپی به دکمه اشتراک گذاری در صورت نبود قابلیت native share
  if (!$nativeShareButton.is(":visible")) {
    $nativeShareButton.removeClass("hidden").click(copyToClipboard);
  }
});
