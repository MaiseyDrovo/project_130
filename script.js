document.addEventListener("DOMContentLoaded", function() {
  var autoEvent = false;

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: false,
    });
    
    const calendar = new Calendar({
        id: "#color-calendar",
        calendarSize: "large",
        layoutModifiers: ['month-left-align'],
        headerBackgroundColor: "#F2F2F2",
        disableMonthYearPickers: true,
        eventsData: [
          {
            id: 0,
            name: "Cheese 101",
            start: "2025-04-16T15:00:00",
            end: "2025-04-16T16:30:00"
          },
          {
            id: 1,
            name: "French class",
            start: "2025-04-27T10:00:00",
            end: "2020-04-27T11:30:00"
          },
          {
            id: 2,
            name: "Blockchain 101",
            start: "2025-06-02T12:00:00",
            end: "2025-06-02T13:30:00"
          },
        ],
        dateChanged: (currentDate, events) => {
          if(events[0]) {
            if(!autoEvent){
              autoEvent=true;
              swiper.slideTo(events[0].id, 1000);
            }
            else {
              autoEvent = false;
            }
          }
        },
      });

      calendar.setDate(new Date('2025-04-16'));

      
    swiper.on('slideChange', function () {
      if(!autoEvent){
        var dateEvent = swiper.slides[swiper.activeIndex];
        autoEvent = true;
        calendar.setDate(new Date(dateEvent.dataset.date));
      }
      else {
        autoEvent = false;
      }
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
            drop_info.style.maxHeight = drop_info.scrollHeight + 'px';
          } else {
            drop.setAttribute('aria-expended', false);
            drop_info.setAttribute('aria-hidden', true);
            drop_info.style.maxHeight = null;
          }
        })
      })
})
