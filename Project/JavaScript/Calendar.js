const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const year = document.getElementById('year');
let yearValue = 2024;
year.textContent = yearValue;

decrease.addEventListener('click', function() {
  yearValue--;
  event.preventDefault();
  year.textContent = (yearValue);

})

increase.addEventListener('click', function() {
  yearValue++;
  event.preventDefault();
  year.textContent = (yearValue);
})

// Months 

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = document.getElementById('Month');
let monthArray = months




month.textContent = monthArray

