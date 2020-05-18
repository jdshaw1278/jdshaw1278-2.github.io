function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hide")
}

function createDate() {
    weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = new Date();
    var weekday = d.getDay() 
    var dayOfMonth = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var fullDate = weekdays[weekday] + ', ' + dayOfMonth + " " + months[month] + " " + year;
    document.getElementById("current_date").innerHTML = fullDate;
}