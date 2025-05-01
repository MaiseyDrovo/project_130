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



      let drop_control = document.querySelectorAll('.drop_control');
      // let drop_info = this.querySelector('.drop_info');
      // let drop_title = this.querySelector('.drop_title');


      drop_control.forEach(el => {
        el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const drop = self.querySelector('.drop');
          const drop_info = self.querySelector('.drop_info');
          
          self.classList.toggle('open');

          if (self.classList.contains('open')) {
            drop.setAttribute('aria-expended', true);
            drop_info.setAttribute('aria-hidden', false);
          } else {
            drop.setAttribute('aria-expended', false);
            drop_info.setAttribute('aria-hidden', true);
          }
        })
      })
})
