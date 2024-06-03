function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    document.getElementById('output').innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(showTime, 1000);
window.onload = showTime;