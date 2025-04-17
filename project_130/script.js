document.addEventListener("DOMContentLoaded", function() {
    new Calendar({
        id: "#color-calendar",
        calendarSize: "large",
        layoutModifiers: ['month-left-align'],
        headerBackgroundColor: "#F2F2F2",
        disableMonthYearPickers: true,
      });

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: false,
      });
})