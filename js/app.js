// * Function to show watch.
const showWatch = () => {
    // * Variables 
    let dt = new Date(); // Date class.
    let hr = formatTime(dt.getHours());
    let min = formatTime(dt.getMinutes());
    let sec = formatTime(dt.getSeconds());
    let year = dt.getFullYear();
    
    // * Arrays of months and days.
    const months = [
        'Ene', 'Feb', 'Mar',
        'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep',
        'Oct', 'Nov', 'Dic'
    ];
    const days = [
        'Lun', 'Mar', 'Mie',
        'Jue', 'Vie', 'Sab',
        'Dom'
    ];

    let day = days[dt.getDay() - 1];
    let month = months[dt.getMonth()];
    
    // * Get divs to show time.
    document.getElementById('hour').innerHTML = `${hr}:${min}:${sec}`;
    document.getElementById('date').innerHTML = `${day}, ${month}, ${year}`;
};

// * Give format to the watch for add 0 in the start of the hour, minutes and seconds.
const formatTime = (time) => {
    if (time < 10) {time = '0' + time;}
    return time;
}
// * Interval of time to execute the app.
const interval = () => {
    setInterval(showWatch, 1000);
}
setTimeout (interval, 2000);