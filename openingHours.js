
document.addEventListener("DOMContentLoaded", function() {
    // Definerer åpningstider for hver dag
    const openingHours = {
        "Mandag": "10-15",
        "Tirsdag": "10-15",
        "Onsdag": "09-12",
        "Torsdag": "10-15",
        "Fredag": "10-15",
        "Lørdag": "13-15",
        "Søndag": "13-15"
    };

    function getMonday(d) {
        d = new Date(d);
        const day = d.getDay(),
              diff = d.getDate() - day + (day == 0 ? -6:1); // juster for søndag
        return new Date(d.setDate(diff));
    }

    function getWeekDates() {
        const today = new Date();
        let day = getMonday(today);
        const dates = [];
        
        for (let i = 0; i < 7; i++) {
            dates.push(new Date(day));
            day.setDate(day.getDate() + 1);
        }

        return dates;
    }

    function displayOpeningHours() {
        const weekDates = getWeekDates();
        const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
        const tableBody = document.getElementById("openingHoursTable").getElementsByTagName("tbody")[0];
        
        for (let i = 0; i < 7; i++) {
            const dateStr = weekDates[i].getDate() + "." + (weekDates[i].getMonth() + 1) + "." + weekDates[i].getFullYear();
            const row = tableBody.insertRow();
            row.insertCell(0).innerText = days[i];
            row.insertCell(1).innerText = dateStr;
            row.insertCell(2).innerText = openingHours[days[i]];
        }
    }

    displayOpeningHours();
});
