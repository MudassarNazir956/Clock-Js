setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotations= 30*htime + mtime/2;
    mrotations= 6*mtime;
    srotations= 6*stime;

    hours.style.transform = `rotate(${hrotations}deg)`;
    minutes.style.transform = `rotate(${mrotations}deg)`;
    seconds.style.transform = `rotate(${srotations}deg)`;
}, 500);
