const hour = document.querySelector('.h'), 
min = document.querySelector('.m'),
sec = document.querySelector('.s'),
hoursNumber = document.querySelector('.hours'),
minutesNumber = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
    second = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;
    
    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;
    
    hoursNumber.innerHTML = time.getHours();
    minutesNumber.innerHTML = time.getMinutes();
    
    setTimeout(() => clock(), 1000);
}
clock();

