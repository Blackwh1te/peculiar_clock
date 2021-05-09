'use strict';

function initClock() {
   let clockColumns = document.querySelectorAll('.clock__column');
   let hour1Column = document.getElementById('hour1');
   let hour2Column = document.getElementById('hour2');
   let minute1Column = document.getElementById('minute1');
   let minute2Column = document.getElementById('minute2');
   let second1Column = document.getElementById('second1');
   let second2Column = document.getElementById('second2');
   
   let numCells = document.querySelectorAll('.clock__num');
   let numCell = document.querySelector('.clock__num');
   let numCellHeight = numCell.offsetHeight;

   function updateClock() {
      numCells.forEach(function(numCell) {
         numCell.classList.remove('active');
      });
      
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

      function setNumActive(column, indexOfNum) {
         column.querySelectorAll('.clock__num')[indexOfNum].classList.add('active');
      };

      setNumActive(hour1Column, hour1);
      setNumActive(hour2Column, hour2);
      setNumActive(minute1Column, minute1);
      setNumActive(minute2Column, minute2);
      setNumActive(second1Column, second1);
      setNumActive(second2Column, second2);
   };

   function updateColumns() {
      clockColumns.forEach(function(column) {
         let columnHeight = column.offsetHeight;
         let activeNumPosY = column.querySelector('.clock__num.active').offsetTop;
         let offset = (columnHeight / 2) - (activeNumPosY + numCellHeight / 2);
         column.style.transform = `translateY(${offset}px)`;
      });
   };

   setInterval(function() {
      updateClock();
      updateColumns();
   }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
   initClock();
}, false);