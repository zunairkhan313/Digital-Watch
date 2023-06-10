


setInterval(function () {
    let time = document.getElementById('clock');
    let arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    let date = new Date();
    let dat = date.getDate();
    let day =arr[date.getMonth()];
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    time.innerHTML = hour + ":" + minutes + ":" + seconds + "<br>" + dat + " " + day + " " + year;
}, 1000);

// console.log(h, m, s);
