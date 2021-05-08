(function ($) {
   let initElementsHeight = function() {
      setTimeout(() => {
         $('.clock__column').each(function() {
            let columnHeight = $(this).outerHeight();
            $(this).css('height', columnHeight);
         });
         
         let numCellHeight = $('.clock__num').outerHeight();
         $('.clock__num').css('height', numCellHeight);
      }, 500);
   };

   let initClock = function() {
      let hour1Column = $('#hour1');
      let hour2Column = $('#hour2');
      let minute1Column = $('#minute1');
      let minute2Column = $('#minute2');
      let second1Column = $('#second1');
      let second2Column = $('#second2');

      $('.clock').addClass('loaded');

      let updateClock = function() {
         $('.clock__num').removeClass('active');

         let hour1;
         let hour2;
         let minute1;
         let minute2;
         let second1;
         let second2;
         
         let date = new Date();
         let currentHours = date.getHours().toString();
         let currentMinutes = date.getMinutes().toString();
         let currentSeconds = date.getSeconds().toString();

         if (currentHours.length === 2) {
            hour1 = +currentHours[0];
            hour2 = +currentHours[1];
         } else {
            hour1 = 0;
            hour2 = +currentHours[0];
         }

         if (currentMinutes.length === 2) {
            minute1 = +currentMinutes[0];
            minute2 = +currentMinutes[1];
         } else {
            minute1 = 0;
            minute2 = +currentMinutes[0];
         }

         if (currentSeconds.length === 2) {
            second1 = +currentSeconds[0];
            second2 = +currentSeconds[1];
         } else {
            second1 = 0;
            second2 = +currentSeconds[0];
         }

         hour1Column.find(`.clock__num:eq(${hour1})`).addClass('active');
         hour2Column.find(`.clock__num:eq(${hour2})`).addClass('active');
         minute1Column.find(`.clock__num:eq(${minute1})`).addClass('active');
         minute2Column.find(`.clock__num:eq(${minute2})`).addClass('active');
         second1Column.find(`.clock__num:eq(${second1})`).addClass('active');
         second2Column.find(`.clock__num:eq(${second2})`).addClass('active');
      };

      let updateColumns = function() {
         $('.clock__column').each(function() {
            let columnHeight = parseInt($(this).css('height'));
            let activeNumPosY = $(this).find('.clock__num.active').position().top;
            let numCellHeight = parseInt($('.clock__num').css('height'));

            let offset = (columnHeight / 2) - (activeNumPosY + numCellHeight / 2);
            
            $(this).css('transform', `translateY(${offset}px)`);
         });
      };

      setInterval(function() {
         updateClock();
         updateColumns();
      }, 1000);
   };

   $(document).ready(function() {
      initElementsHeight();

      setTimeout(() => {
         initClock();
      }, 1000);
   });
})(jQuery);