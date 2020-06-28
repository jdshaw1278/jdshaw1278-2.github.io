function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hide");
}

function createDate() {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = new Date();
    var weekday = d.getDay(); 
    var dayOfMonth = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var fullDate = weekdays[weekday] + ', ' + dayOfMonth + " " + months[month] + " " + year;
    document.getElementById("current_date").innerHTML = fullDate;

    if (weekday === 5) {
        document.getElementById("announcements").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
        document.getElementById("announcements").style.display = "block";
    } 
}