// Lets start now


const text = document.querySelector('#text');
let countdays = new Date("1 apr,2021 4:00:00");
let x = setInterval(() => {

    let now = new Date();

    let distance = countdays - now;

    let day = Math.floor(distance / (1000 * 60 * 60 * 24))
    const counts = document.querySelector('#counts');
    counts.innerHTML = day;
    //when countdown is complete than clearinterval
    if (distance < 0) {
        clearInterval(x);
        counts.innerHTML = 'Expired';
        text.innerHTML = '- - -'
    }
    //add zero before number less than 10 
    if (day < 10) {
        counts.innerHTML = "0" + day;

    }

}, 1000);