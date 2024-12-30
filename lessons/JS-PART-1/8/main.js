let date = new Date()

console.log(date.getUTCFullYear());
console.log(date.getUTCHours());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());

let day = document.getElementById('day')
let hours = document.getElementById('hours')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
    
setInterval(() => {
 let now = new Date();
 let deadline = new Date(2025, 0, 1);
 let difference = deadline.getTime() - now.getTime();

 day.textContent = (difference / 1000 / 60 / 60 / 24).toFixed(0).toString().padStart(3, '0');
 hours.textContent = ((difference / 1000 / 60 / 60) % 24).toFixed(0).toString().padStart(2, '0');
 min.textContent = ((difference / 1000 / 60) % 60 ).toFixed(0).toString().padStart(2, '0');
 sec.textContent = ((difference / 1000) % 60).toFixed(0).toString().padStart(2, '0');
}, 1000)